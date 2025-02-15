import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (count = 100) => {
    const params = {
      results: count,
      inc: [
        "gender",
        "name",
        "location",
        "email",
        "login",
        "dob",
        "registered",
        "phone",
        "cell",
        "id",
        "picture",
        "nat",
      ].join(","),
    };

    const response = await axios.get("https://randomuser.me/api/", { params });
    return response.data.results;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    loading: false,
    error: null,
    searchTerm: '',
    genderFilter: '',
    currentPage: 1,
    usersPerPage: 10,
    sortConfig: { key: null, direction: null }
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setGenderFilter: (state, action) => {
      state.genderFilter = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setUsersPerPage: (state, action) => {
      state.usersPerPage = action.payload;
    },
    setSortConfig: (state, action) => {
      state.sortConfig = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const {
  setSearchTerm,
  setGenderFilter,
  setCurrentPage,
  setUsersPerPage,
  setSortConfig
} = usersSlice.actions;

export default usersSlice.reducer;