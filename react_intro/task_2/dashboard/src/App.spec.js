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

  /**
   * NEW TEST 1: Inputs (email + password)
   */
  test("renders email and password inputs", () => {
    render(<App />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  /**
   * NEW TEST 2: Labels
   */
  test("renders email and password labels", () => {
    render(<App />);

    const emailLabel = screen.getByText(/email/i);
    const passwordLabel = screen.getByText(/password/i);

    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
  });

  /**
   * NEW TEST 3: Button
   */
  test("renders OK button", () => {
    render(<App />);

    const button = screen.getByRole("button", { name: /ok/i });
    expect(button).toBeInTheDocument();
  });
});