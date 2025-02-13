import { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import UserTable from "../components/UserTable";
import Search from "../components/Search";
import Pagination from "../components/Pagination";
import Filter from "../components/Filter";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const { users, error } = useUsers();
  const [searchTerm, setSearchTerm] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [usersPerPage, setUsersPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const filteredUsers = users.filter(
    (user) =>
      `${user.name.first} ${user.name.last} ${user.email}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) &&
      (genderFilter === "" || user.gender === genderFilter)
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const handleRowClick = (user) => {
    navigate(`/user/${user.login.uuid}`, { state: { user } });
  };

  return (
    <div className="container mx-auto p-4">
      {error && <p className="text-red-500">{error}</p>}
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Filter
        genderFilter={genderFilter}
        setGenderFilter={setGenderFilter}
        usersPerPage={usersPerPage}
        setUsersPerPage={setUsersPerPage}
      />
      <UserTable users={currentUsers} onRowClick={handleRowClick} />
      <Pagination
        totalUsers={filteredUsers.length}
        usersPerPage={usersPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default HomePage;
