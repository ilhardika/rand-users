import { ChevronUp, ChevronDown } from "lucide-react";

function UserTable({ users, onRowClick, onSort, sortConfig }) {
  const getClassNamesFor = (name) => {
    if (!sortConfig) return "";
    return sortConfig.key === name ? "text-blue-600 bg-blue-50" : "";
  };

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {[
              { key: "login.username", label: "Username" },
              { key: "name.first", label: "Name" },
              { key: "email", label: "Email" },
              { key: "gender", label: "Gender" },
              { key: "registered.date", label: "Registered Date" },
            ].map(({ key, label }) => (
              <th
                key={key}
                onClick={() => onSort(key)}
                className={`px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors ${getClassNamesFor(
                  key
                )}`}
              >
                <div className="flex items-center gap-2">
                  {label}
                  {sortConfig?.key === key &&
                    (sortConfig.direction === "ascending" ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    ))}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user) => (
            <tr
              key={user?.login?.uuid}
              onClick={() => onRowClick(user)}
              className="hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {user?.login?.username}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {user?.name?.first} {user?.name?.last}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {user?.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    user?.gender === "female"
                      ? "bg-pink-100 text-pink-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {user?.gender}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
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
