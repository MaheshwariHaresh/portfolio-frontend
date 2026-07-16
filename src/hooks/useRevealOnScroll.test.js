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

  beforeEach(() => {
    observedTargets = [];

    class MockIntersectionObserver {
      constructor(callback) {
        this.callback = callback;
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
      observe = jest.fn();
      disconnect = jest.fn();
    };
  });

  it("adds the in class to reveal elements that mount after the hook initializes", () => {
    const { rerender } = render(<RevealHarness showExtra={false} />);

    rerender(<RevealHarness showExtra={true} />);

    expect(screen.getByText("Second").classList.contains("in")).toBe(true);
  });
});
