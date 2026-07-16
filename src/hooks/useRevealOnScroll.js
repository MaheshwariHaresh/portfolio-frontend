import { useEffect } from "react";

const DEFAULT_OPTIONS = {
  threshold: 0.1,
  rootMargin: "0px 0px -40px 0px",
};

export default function useRevealOnScroll(rootRef = null, options = {}) {
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      typeof IntersectionObserver === "undefined"
    ) {
      return undefined;
    }

    const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
    const targetRoot = rootRef?.current ?? document.body;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: mergedOptions.threshold,
        rootMargin: mergedOptions.rootMargin,
      },
    );

    const observeRevealElements = () => {
      const elements = targetRoot.querySelectorAll?.(".reveal") ?? [];
      elements.forEach((element) => {
        if (!element.classList.contains("in")) {
          observer.observe(element);
        }
      });
    };

    observeRevealElements();

    const mutationObserver = new MutationObserver(() => {
      observeRevealElements();
    });

    mutationObserver.observe(targetRoot, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [rootRef, options]);
}
