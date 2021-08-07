import { fireEvent, render, screen } from "@testing-library/react";
import { fetchFortunes } from "./api/requests";
import App from "./App";

test("Renders the header text on initial load", () => {
  render(<App />);
  const header = screen.getByText("Today's Fortune");

  expect(header).toBeInTheDocument();
});

test("Fetches initial cookie sayings", () => {
  return fetchFortunes().then((data) => {
    expect(data).toHaveLength(100);
  });
});
