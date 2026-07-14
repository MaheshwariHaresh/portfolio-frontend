describe("Tailwind dark mode configuration", () => {
  it("uses class-based dark mode", () => {
    const config = require("../../tailwind.config.js");

    expect(config.darkMode).toBe("class");
  });
});
