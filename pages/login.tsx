import React, { useState } from "react";

type Props = {};

export default function Login({}: Props) {
  const [form, setForm] = useState({ username: "", password: "" });
  return (
    <div>
      <form>
        <label htmlFor="user-input">user name</label>
        <input
          id="user-input"
          type="text"
          placeholder="username"
          value={form.username}
          onChange={(e) =>
            setForm((form) => {
              return { ...form, username: e.target.value };
            })
          }
        />
        <label htmlFor="password-input">password</label>
        <input
          id="password-input"
          type="password"
          placeholder="username"
          value={form.password}
          onChange={(e) =>
            setForm((form) => {
              return { ...form, password: e.target.value };
            })
          }
        />
        <button type="submit">odeslat</button>
      </form>
    </div>
  );
}
