import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pagination from "../Pagination";

describe("Pagination Component", () => {
  const mockProps = {
    totalUsers: 100,
    usersPerPage: 10,
    currentPage: 1,
    setCurrentPage: vi.fn(),
  };

  it("renders pagination buttons", () => {
    render(<Pagination {...mockProps} />);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("disables previous button on first page", () => {
    render(<Pagination {...mockProps} />);
    const prevButton = screen.getByLabelText("Previous page");
    expect(prevButton).toBeDisabled();
  });

  it("enables next button when not on last page", () => {
    render(<Pagination {...mockProps} />);
    const nextButton = screen.getByLabelText("Next page");
    expect(nextButton).not.toBeDisabled();
  });

  it("calls setCurrentPage when page button is clicked", () => {
    render(<Pagination {...mockProps} />);
    const pageButton = screen.getByText("2");
    fireEvent.click(pageButton);
    expect(mockProps.setCurrentPage).toHaveBeenCalledWith(2);
  });

  it("calls setCurrentPage when next button is clicked", () => {
    render(<Pagination {...mockProps} />);
    const nextButton = screen.getByLabelText("Next page");
    fireEvent.click(nextButton);
    expect(mockProps.setCurrentPage).toHaveBeenCalledWith(2);
  });

  it("handles last page correctly", () => {
    render(<Pagination {...mockProps} currentPage={10} />);
    const nextButton = screen.getByLabelText("Next page");
    expect(nextButton).toBeDisabled();
  });
});
