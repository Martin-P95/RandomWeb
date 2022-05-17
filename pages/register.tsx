import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

type Props = {};

export default function Register({}: Props) {
  const [form, setForm] = useState({
    username: "",
    password: "",
    passwordrepeat: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password === form.passwordrepeat) {
      axios.post("/api/register", form).then((res) => {
        Cookies.set("token", res.data.token);
        window.location.replace("/");
      });
    }
  };

  return (
    <>
      <div className="background">
        <form onSubmit={onSubmit}>
          <div className="login-formR">
            <h1 className="Nad">Register</h1>
            <label htmlFor="user-input" className="Nadpis">
              Username
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

            <label htmlFor="passwordrepeat-input" className="Nadpis">
              Repeat Password
            </label>
            <input
              id="passwordrepeat-input"
              type="password"
              placeholder="Repeat Password"
              value={form.passwordrepeat}
              onChange={(e) =>
                setForm((form) => {
                  return { ...form, passwordrepeat: e.target.value };
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
