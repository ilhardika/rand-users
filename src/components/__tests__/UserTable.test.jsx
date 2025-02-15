import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserTable from '../UserTable';

describe('UserTable Component', () => {
  const mockUsers = [
    {
      login: { uuid: '1', username: 'john_doe' },
      name: { first: 'John', last: 'Doe' },
      email: 'john@example.com',
      gender: 'male',
      registered: { date: '2023-01-01' }
    }
  ];

  const mockProps = {
    users: mockUsers,
    onRowClick: vi.fn(),
    onSort: vi.fn(),
    sortConfig: { key: null, direction: null }
  };

  it('renders table headers', () => {
    render(<UserTable {...mockProps} />);
    expect(screen.getByText('Username')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Gender')).toBeInTheDocument();
  });

  it('renders user data correctly', () => {
    render(<UserTable {...mockProps} />);
    expect(screen.getByText('john_doe')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
  });

  it('calls onRowClick when row is clicked', () => {
    render(<UserTable {...mockProps} />);
    const row = screen.getByText('john_doe').closest('tr');
    fireEvent.click(row);
    expect(mockProps.onRowClick).toHaveBeenCalledWith(mockUsers[0]);
  });

  it('calls onSort when header is clicked', () => {
    render(<UserTable {...mockProps} />);
    const nameHeader = screen.getByText('Name');
    fireEvent.click(nameHeader);
    expect(mockProps.onSort).toHaveBeenCalledWith('name.first');
  });

  it('displays sort indicators when sorting is active', () => {
    render(<UserTable {...mockProps} sortConfig={{ key: 'name.first', direction: 'ascending' }} />);
    const nameHeader = screen.getByText('Name').closest('th');
    expect(nameHeader).toHaveClass('text-primary');
  });
});