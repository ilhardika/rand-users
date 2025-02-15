import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchUsers,
  setSearchTerm,
  setGenderFilter,
  setUsersPerPage,
  setCurrentPage,
  setSortConfig,
} from "../store/slices/usersSlice";
import UserTable from "./UserTable";
import Search from "./Search";
import Pagination from "./Pagination";
import Filter from "./Filter";

function UserManagement() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    items: users,
    loading,
    error,
    searchTerm,
    genderFilter,
    currentPage,
    usersPerPage,
    sortConfig,
  } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const filteredUsers = users.filter(
    (user) =>
      `${user.name.first} ${user.name.last} ${user.email} ${user.login.username}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) &&
      (genderFilter === "" || user.gender === genderFilter)
  );

  const getNestedValue = (obj, key) => {
    return key.split(".").reduce((acc, part) => acc && acc[part], obj);
  };

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortConfig.key) {
      const aValue = getNestedValue(a, sortConfig.key);
      const bValue = getNestedValue(b, sortConfig.key);
      if (aValue < bValue) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
    }
    return 0;
  });

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);

  const handleRowClick = (user) => {
    navigate(`/user/${user.login.uuid}`, { state: { user } });
  };

  const handleResetFilters = () => {
    dispatch(setSearchTerm(""));
    dispatch(setGenderFilter(""));
    dispatch(setUsersPerPage(10));
    dispatch(setCurrentPage(1));
  };

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    dispatch(setSortConfig({ key, direction }));
  };

  return (
    <div className="container py-4">
      <div className="card shadow">
        <div className="card-body">
          {error && <div className="alert alert-danger mb-4">{error}</div>}
          <Search
            searchTerm={searchTerm}
            setSearchTerm={(term) => dispatch(setSearchTerm(term))}
          />
          <Filter
            genderFilter={genderFilter}
            setGenderFilter={(filter) => dispatch(setGenderFilter(filter))}
            usersPerPage={usersPerPage}
            setUsersPerPage={(num) => dispatch(setUsersPerPage(num))}
            onResetFilters={handleResetFilters}
          />
          <UserTable
            users={currentUsers}
            onRowClick={handleRowClick}
            onSort={handleSort}
            sortConfig={sortConfig}
          />
          <div className="mt-4">
            <Pagination
              totalUsers={sortedUsers.length}
              usersPerPage={usersPerPage}
              currentPage={currentPage}
              setCurrentPage={(page) => dispatch(setCurrentPage(page))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserManagement;
