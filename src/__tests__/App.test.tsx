import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("renders AI art canvas", () => {
    render(<App />);
    const canvas = screen.getByRole("img");
    expect(canvas).toBeInTheDocument();
  });

  test("displays current generation number", () => {
    render(<App />);
    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent(/Generation/);
  });
});
