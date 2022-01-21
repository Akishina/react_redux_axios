import { useState } from "react";
import { useLoginMutation } from "../../app/services/auth";
import { Navigate } from "react-router-dom";

export const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading, data, error }] = useLoginMutation();

  if (data) {
    return <Navigate to={"/"} />;
  }

  return (
    <div>
      {error && (
        <p style={{ color: "red" }}>
          {error.status === 401
            ? error.data?.message
            : "Cannot connect to server!"}
        </p>
      )}

      <input
        type="text"
        placeholder="Email"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <br />
      <br />

      <button
        aria-label="Decrement value"
        onClick={async () => {
          await login({ name, password });
        }}
        disabled={isLoading}
      >
        Click to Login
      </button>
    </div>
  );
};
