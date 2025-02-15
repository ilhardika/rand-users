import { describe, it, expect } from 'vitest';
import reducer, {
  setSearchTerm,
  setGenderFilter,
  setCurrentPage,
} from '../usersSlice';

describe('users reducer', () => {
  const initialState = {
    items: [],
    loading: false,
    error: null,
    searchTerm: '',
    genderFilter: '',
    currentPage: 1,
    usersPerPage: 10,
    sortConfig: { key: null, direction: null }
  };

  it('should handle initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setSearchTerm', () => {
    const actual = reducer(initialState, setSearchTerm('test'));
    expect(actual.searchTerm).toEqual('test');
  });

  it('should handle setGenderFilter', () => {
    const actual = reducer(initialState, setGenderFilter('male'));
    expect(actual.genderFilter).toEqual('male');
  });

  it('should handle setCurrentPage', () => {
    const actual = reducer(initialState, setCurrentPage(2));
    expect(actual.currentPage).toEqual(2);
  });
});