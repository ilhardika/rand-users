import { useState, useEffect } from "react";
import axios from "axios";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=100")
      .then((response) => setUsers(response.data.results))
      .catch((error) => {
        console.error("Error fetching users:", error);
        setError(
          "Uh oh, something has gone wrong. Please tweet us @randomapi about the issue. Thank you."
        );
      });
  }, []);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const updateUser = (updatedUser) => {
    setUsers(
      users.map((user) =>
        user.login.uuid === updatedUser.login.uuid ? updatedUser : user
      )
    );
  };

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.login.uuid !== userId));
  };

  return { users, error, addUser, updateUser, deleteUser };
}

export function useRandomUser() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((response) => setUser(response.data.results[0]))
      .catch((error) => {
        console.error("Error fetching user:", error);
        setError(
          "Uh oh, something has gone wrong. Please tweet us @randomapi about the issue. Thank you."
        );
      });
  }, []);

  return { user, error };
}
