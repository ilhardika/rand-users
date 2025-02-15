import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Filter from '../Filter';

describe('Filter Component', () => {
  const mockProps = {
    genderFilter: '',
    setGenderFilter: vi.fn(),
    usersPerPage: 10,
    setUsersPerPage: vi.fn(),
    onResetFilters: vi.fn(),
  };

  it('renders all filter options', () => {
    render(<Filter {...mockProps} />);
    
    expect(screen.getByLabelText(/gender:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/show:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /reset/i })).toBeInTheDocument();
  });

  it('handles gender filter change', () => {
    render(<Filter {...mockProps} />);
    
    const select = screen.getByLabelText(/gender:/i);
    fireEvent.change(select, { target: { value: 'male' } });
    
    expect(mockProps.setGenderFilter).toHaveBeenCalledWith('male');
  });

  it('handles users per page change', () => {
    render(<Filter {...mockProps} />);
    
    const select = screen.getByLabelText(/show:/i);
    fireEvent.change(select, { target: { value: '25' } });
    
    expect(mockProps.setUsersPerPage).toHaveBeenCalledWith(25);
  });

  it('handles reset button click', () => {
    render(<Filter {...mockProps} />);
    
    const resetButton = screen.getByRole('button', { name: /reset/i });
    fireEvent.click(resetButton);
    
    expect(mockProps.onResetFilters).toHaveBeenCalled();
  });
});