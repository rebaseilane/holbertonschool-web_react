/**
 * App.spec.js
 * -------------------------
 * Unit tests for App component using React Testing Library.
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component Tests", () => {
  test("renders School dashboard heading", () => {
    render(<App />);

    const heading = screen.getByText(/school dashboard/i);
    expect(heading).toBeInTheDocument();
  });

  test("renders body and footer text correctly", () => {
    render(<App />);

    const bodyText = screen.getByText(
      /login to access the full dashboard/i
    );

    // REQUIRED FIX: regex-based footer query
    const footerRegex = /copyright \d{4}.*holberton school/i;
    const footerText = screen.getByText(footerRegex);

    expect(bodyText).toBeInTheDocument();
    expect(footerText).toBeInTheDocument();
  });

  test("renders holberton logo image", () => {
    render(<App />);

    const logo = screen.getByAltText(/holberton logo/i);
    expect(logo).toBeInTheDocument();
  });
});