import { useState, useEffect } from "react";
import axios from "axios";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://randomuser.me/api/", {
          params: {
            results: 100,
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
          },
        });
        setUsers(response.data.results);
      } catch (error) {
        console.error("Error fetching users:", error);
        setError(
          "An error occurred while fetching users. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  const updateUser = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.login.uuid === updatedUser.login.uuid ? updatedUser : user
      )
    );
  };

  const deleteUser = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.login.uuid !== userId)
    );
  };

  return {
    users,
    error,
    loading,
    addUser,
    updateUser,
    deleteUser,
  };
}

export function useRandomUser() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRandomUser = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://randomuser.me/api/", {
          params: {
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
          },
        });
        setUser(response.data.results[0]);
      } catch (error) {
        console.error("Error fetching user:", error);
        setError(
          "An error occurred while fetching the user. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchRandomUser();
  }, []);

  return { user, error, loading };
}
