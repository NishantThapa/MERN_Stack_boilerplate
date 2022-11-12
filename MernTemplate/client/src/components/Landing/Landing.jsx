import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./style.css";
import Login from "./login";
import Register from "./register";

const Landing = () => {
  const Auth = useSelector((state) => state.auth);
  const history = useNavigate();
  useEffect(() => {
    if (Auth.token) {
      history("/dashboard");
    }
  }, [Auth]);
  return (
    <section className="container">
      <article className="ColContainer">
        <Register />
      </article>
      <article className="ColContainer">
        <Login />
      </article>
    </section>
  );
};

export default Landing;
