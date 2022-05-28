import React, { useState } from "react";
import axios from "../lib/axios.client"
import Cookies from "js-cookie";

type Props = {};

export default function Login({}: Props) {
  const [form, setForm] = useState({ username: "", password: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post("/api/login", form).then((res) => {
      Cookies.set("token", res.data.token);
      window.location.replace("/");
    });
  };

  return (
    <>
      <div className="background">
        <form onSubmit={onSubmit}>
          <div className="login-form">
            <label htmlFor="user-input" className="Nadpis">
              Login
            </label>
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
            <label htmlFor="password-input" className="Nadpis">
              Password
            </label>
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
            <button type="submit" className="tlačítko">
              odeslat
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
