import { Link, useNavigate } from "react-router-dom";

function UserTable({ users, onRowClick }) {
  return (
    <div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Name</th>
            <th className="py-2">Email</th>
            <th className="py-2">Gender</th>
            <th className="py-2">Picture</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user?.login?.uuid}
              className="border-t cursor-pointer"
              onClick={() => onRowClick(user)}
            >
              <td className="py-2 px-4">
                {user?.name?.first} {user?.name?.last}
              </td>
              <td className="py-2 px-4">{user?.email}</td>
              <td className="py-2 px-4">{user?.gender}</td>
              <td className="py-2 px-4">
                <img
                  src={user?.picture?.medium}
                  alt="User"
                  className="rounded-full"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
