import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "../components/App";

test("it renders without crashing", () => {
  try {
    expect(() => render(<App />)).not.toThrow();
  } catch (error) {
    throw new Error(`Failed to render App component: ${error.message}`);
  }
});
