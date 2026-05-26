import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
};

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data: User[] = await response.json();

      setUsers(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1>Loading users...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <h1>Users List</h1>

      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid black",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "10px",
          }}
        >
          <h2>{user.name}</h2>

          <p>Email: {user.email}</p>

          <p>Phone: {user.phone}</p>

          <p>Website: {user.website}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
