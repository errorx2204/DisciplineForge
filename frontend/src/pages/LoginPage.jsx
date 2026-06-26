import { useState, useContext } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";

import toast from "react-hot-toast";

import { loginUser } from "../services/authService";
import { AuthContext } from "../context/AuthContext";

function LoginPage() {
  const navigate = useNavigate();

  const { login } =
    useContext(AuthContext);

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      try {
        const data =
          await loginUser(formData);

        login(
          data.user,
          data.token
        );

        toast.success(
          "Login Successful!"
        );

        navigate("/dashboard");
      } catch (error) {
        toast.error(
          error.response?.data
            ?.message ||
            "Login Failed"
        );
      }
    };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
        color: "white",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "400px",
          padding: "30px",
          borderRadius: "15px",
          background: "#1e293b",
        }}
      >
        <h1>DisciplineForge</h1>

        <h2>Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
          }}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "#7c3aed",
            color: "white",
            border: "none",
          }}
        >
          Login
        </button>

        <p>
          Don't have an account?{" "}
          <Link to="/register">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;