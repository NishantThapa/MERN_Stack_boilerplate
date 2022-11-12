import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerAction } from "../../store/Actions/authActions";

const Register = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onRegister = (data) => {
    dispatch(registerAction(data));
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit(onRegister)}>
        <label>
          <div className="lableSt">Name</div>
          <input
            {...register("name", { required: true })}
            placeholder="Enter your name"
          />
        </label>
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
        <input type="submit" value="REGISTER" className="mt20 btn" />
      </form>
    </Fragment>
  );
};

export default Register;
