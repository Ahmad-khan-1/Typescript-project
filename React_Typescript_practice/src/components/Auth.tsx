import { useState } from "react";

const Auth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid black",
        marginTop: "20px",
      }}
    >
      <h1>Authentication Example</h1>

      {isLoggedIn ? (
        <div>
          <h2>You are logged in</h2>

          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Please Login</h2>

          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Auth;
