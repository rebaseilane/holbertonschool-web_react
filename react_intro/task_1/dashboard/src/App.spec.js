/**
 * App.spec.js
 * -------------------------
 * Unit tests for App component using React Testing Library.
 * Verifies rendering of header, body, footer and image elements.
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

/**
 * Test suite for App component
 */
describe("App Component Tests", () => {
  /**
   * Test 1: Check if H1 is rendered correctly
   */
  test("renders School Dashboard heading", () => {
    render(<App />);

    const headingElement = screen.getByText(/School dashboard/i);
    expect(headingElement).toBeInTheDocument();
  });

  /**
   * Test 2: Check body and footer text content
   */
  test("renders correct body and footer text", () => {
    render(<App />);

    const bodyText = screen.getByText(
      /Login to access the full dashboard/i
    );

    const footerText = screen.getByText(
      /Copyright/i
    );

    expect(bodyText).toBeInTheDocument();
    expect(footerText).toBeInTheDocument();
  });

  /**
   * Test 3: Check if image is rendered using alt text
   */
  test("renders holberton logo image", () => {
    render(<App />);

    const logoImage = screen.getByAltText(/holberton logo/i);
    expect(logoImage).toBeInTheDocument();
  });
});