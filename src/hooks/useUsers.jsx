import { useState, useEffect } from "react";
import axios from "axios";

const fetchRandomUsers = async (count = 1) => {
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

  try {
    const response = await axios.get("https://randomuser.me/api/", { params });
    return response.data.results;
  } catch (error) {
    throw new Error(
      "An error occurred while fetching users. Please try again later."
    );
  }
};

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        const results = await fetchRandomUsers(100);
        setUsers(results);
      } catch (error) {
        console.error("Error fetching users:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
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
    const loadRandomUser = async () => {
      try {
        setLoading(true);
        const [result] = await fetchRandomUsers(1);
        setUser(result);
      } catch (error) {
        console.error("Error fetching user:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadRandomUser();
  }, []);

  return { user, error, loading };
}
