import { ChevronUp, ChevronDown } from "lucide-react";

function UserTable({ users, onRowClick, onSort, sortConfig }) {
  const getClassNamesFor = (name) => {
    if (!sortConfig) return "";
    return sortConfig.key === name
      ? "text-primary bg-primary bg-opacity-10"
      : "";
  };

  return (
    <div className="table-responsive rounded border">
      <table className="table table-hover mb-0">
        <thead className="table-light">
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
                className={`text-nowrap ${getClassNamesFor(
                  key
                )} cursor-pointer`}
                style={{ fontSize: "0.875rem" }}
              >
                <div className="d-flex align-items-center gap-2">
                  {label}
                  {sortConfig?.key === key &&
                    (sortConfig.direction === "ascending" ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    ))}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user?.login?.uuid}
              onClick={() => onRowClick(user)}
              style={{ cursor: "pointer" }}
            >
              <td className="align-middle fw-medium">
                {user?.login?.username}
              </td>
              <td className="align-middle">
                {user?.name?.first} {user?.name?.last}
              </td>
              <td className="align-middle">{user?.email}</td>
              <td className="align-middle">
                <span
                  className={`badge rounded-pill ${
                    user?.gender === "female"
                      ? "text-bg-danger bg-opacity-75"
                      : "text-bg-primary bg-opacity-75"
                  }`}
                >
                  {user?.gender}
                </span>
              </td>
              <td className="align-middle">
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
