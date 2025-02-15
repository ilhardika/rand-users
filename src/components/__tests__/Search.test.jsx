import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from '../Search';

describe('Search Component', () => {
  const mockProps = {
    searchTerm: '',
    setSearchTerm: vi.fn()
  };

  it('renders search input', () => {
    render(<Search {...mockProps} />);
    expect(screen.getByPlaceholderText(/search users/i)).toBeInTheDocument();
  });

  it('displays search term value', () => {
    render(<Search {...mockProps} searchTerm="john" />);
    expect(screen.getByPlaceholderText(/search users/i)).toHaveValue('john');
  });

  it('calls setSearchTerm on input change', () => {
    render(<Search {...mockProps} />);
    const input = screen.getByPlaceholderText(/search users/i);
    fireEvent.change(input, { target: { value: 'test' } });
    expect(mockProps.setSearchTerm).toHaveBeenCalledWith('test');
  });
});