import { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import { useNavigate } from "react-router-dom";
import UserTable from "./UserTable";
import Search from "./Search";
import Pagination from "./Pagination";
import Filter from "./Filter";

function UserManagement() {
  const { users, error } = useUsers();
  const [searchTerm, setSearchTerm] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [usersPerPage, setUsersPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const navigate = useNavigate();

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
    setSearchTerm("");
    setGenderFilter("");
    setUsersPerPage(10);
    setCurrentPage(1);
  };

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-6">
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
              {error}
            </div>
          )}
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Filter
            genderFilter={genderFilter}
            setGenderFilter={setGenderFilter}
            usersPerPage={usersPerPage}
            setUsersPerPage={setUsersPerPage}
            onResetFilters={handleResetFilters}
          />
          <UserTable
            users={currentUsers}
            onRowClick={handleRowClick}
            onSort={handleSort}
            sortConfig={sortConfig}
          />
          <div className="mt-6">
            <Pagination
              totalUsers={sortedUsers.length}
              usersPerPage={usersPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserManagement;
