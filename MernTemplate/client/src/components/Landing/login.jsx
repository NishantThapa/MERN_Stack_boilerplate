import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginAction } from "../../store/Actions/authActions";

const Login = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onLogin = (data) => {
    let { name, ...rest } = data;
    dispatch(loginAction(rest));
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit(onLogin)}>
        <div>
          <div className="lableSt">Email</div>
          <input
            {...register("email", { required: true })}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <div className="lableSt">Password</div>
          <input
            {...register("password", { required: true })}
            placeholder="Enter your password"
            type="password"
          />
        </div>
        <input type="submit" value="LOGIN" className="mt20 btn" />
      </form>
    </Fragment>
  );
};

export default Login;
