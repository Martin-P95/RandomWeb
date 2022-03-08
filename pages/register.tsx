import React, { useState } from "react";

type Props = {};

export default function Register({}: Props) {
  const [form, setForm] = useState({ username: "", password: "" });
  return (
    <>
      <form>
        <div className="login-form">
          <h1>Register</h1>
          <label htmlFor="user-input">Username</label>
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

          <label htmlFor="password-input">Password</label>
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
