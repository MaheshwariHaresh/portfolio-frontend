import { render, screen } from "@testing-library/react";
import useRevealOnScroll from "./useRevealOnScroll";

function RevealHarness({ showExtra }) {
  useRevealOnScroll();

  return (
    <div>
      <div className="reveal">First</div>
      {showExtra ? <div className="reveal">Second</div> : null}
    </div>
  );
}

describe("useRevealOnScroll", () => {
  let observedTargets = [];
  let intersectionInstances = 0;
  let mutationInstances = 0;
  let mutationCallback = null;

  beforeEach(() => {
    observedTargets = [];
    intersectionInstances = 0;
    mutationInstances = 0;
    mutationCallback = null;

    class MockIntersectionObserver {
      constructor(callback) {
        this.callback = callback;
        intersectionInstances += 1;
      }

      observe = (target) => {
        observedTargets.push(target);
        this.callback([{ isIntersecting: true, target }]);
      };

      unobserve = jest.fn();
      disconnect = jest.fn();
    }

    window.IntersectionObserver = MockIntersectionObserver;
    window.MutationObserver = class {
      constructor(callback) {
        mutationInstances += 1;
        mutationCallback = callback;
      }

      observe = jest.fn();
      disconnect = jest.fn();
    };
  });

  it("adds the in class to reveal elements that mount after the hook initializes", () => {
    const { rerender } = render(<RevealHarness showExtra={false} />);

    rerender(<RevealHarness showExtra={true} />);
    mutationCallback([{ addedNodes: [screen.getByText("Second")] }]);

    expect(screen.getByText("Second").classList.contains("in")).toBe(true);
  });

  it("does not recreate observers on normal rerenders with the same reveal settings", () => {
    function OptionsHarness({ showExtra }) {
      useRevealOnScroll(null, {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      });

      return (
        <div>
          <div className="reveal">First</div>
          {showExtra ? <div className="reveal">Second</div> : null}
        </div>
      );
    }

    const { rerender } = render(<OptionsHarness showExtra={false} />);

    rerender(<OptionsHarness showExtra={true} />);

    expect(intersectionInstances).toBe(1);
    expect(mutationInstances).toBe(1);
    expect(observedTargets.length).toBeGreaterThan(0);
  });
});
