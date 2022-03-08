import React, { useState } from "react";

type Props = {};

export default function Login({}: Props) {
  const [form, setForm] = useState({ username: "", password: "" });
  return (
    <>
      <form>
        <div className="login-form">
        <h1>Login</h1>
        <label htmlFor="user-input"></label>
        <input
          id="user-input"
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={(e) =>
            setForm((form) => {
              return { ...form, username: e.target.value };
            })
          }
        />
        <h1>Password</h1>
        <label htmlFor="password-input"></label>
        <input
          id="password-input"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm((form) => {
              return { ...form, password: e.target.value };
            })
          }
        />
        <button type="submit">odeslat</button>
        </div>
      </form>
    </>
  );
}
