import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/Actions/authActions";
import "./style.css";

const Dashboard = () => {
  const dispatch = useDispatch();
  const logouthandler = () => {
    dispatch(logout());
  };
  return (
    <div className="msgCont">
      <section className="headerCont">
        <div className="msgContent">Message Component</div>
        <div className="logoutBtn" onClick={() => logouthandler()}>
          Logout
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
