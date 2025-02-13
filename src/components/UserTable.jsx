import { ChevronUp, ChevronDown } from "lucide-react";

function UserTable({ users, onRowClick, onSort, sortConfig }) {
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const renderSortIcon = (name) => {
    if (!sortConfig || sortConfig.key !== name) {
      return null;
    }
    return sortConfig.direction === "ascending" ? (
      <ChevronUp className="inline-block ml-1" />
    ) : (
      <ChevronDown className="inline-block ml-1" />
    );
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md text-left">
        <thead className="bg-gray-100">
          <tr>
            <th
              className="py-2 px-4 border-b cursor-pointer"
              onClick={() => onSort("login.username")}
            >
              Username {renderSortIcon("login.username")}
            </th>
            <th
              className="py-2 px-4 border-b cursor-pointer"
              onClick={() => onSort("name.first")}
            >
              Name {renderSortIcon("name.first")}
            </th>
            <th
              className="py-2 px-4 border-b cursor-pointer"
              onClick={() => onSort("email")}
            >
              Email {renderSortIcon("email")}
            </th>
            <th
              className="py-2 px-4 border-b cursor-pointer"
              onClick={() => onSort("gender")}
            >
              Gender {renderSortIcon("gender")}
            </th>
            <th
              className="py-2 px-4 border-b cursor-pointer"
              onClick={() => onSort("registered.date")}
            >
              Registered Date {renderSortIcon("registered.date")}
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user?.login?.uuid}
              className="border-t cursor-pointer hover:bg-gray-50"
              onClick={() => onRowClick(user)}
            >
              <td className="py-2 px-4">{user?.login?.username}</td>
              <td className="py-2 px-4">
                {user?.name?.first} {user?.name?.last}
              </td>
              <td className="py-2 px-4">{user?.email}</td>
              <td className="py-2 px-4">{user?.gender}</td>
              <td className="py-2 px-4">
                {new Date(user?.registered?.date).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
