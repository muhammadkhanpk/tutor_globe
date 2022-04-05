import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// style
import "./signin.style.css";

// icons
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

// validations
import { useFormik } from "formik";
import * as Yup from "yup";

// redux
import {
  userRequest,
  userSuccess,
  userFailure,
} from "../../Redux/Actions/userActions";
import { useDispatch, useSelector } from "react-redux";

// firebase
import { db, auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";


const Form = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.userReducer);
  const [showPassword, setShowPassword] = useState(false);
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required").min(8),
  });

  const onSubmit = async () => {
    if (formik.values.email && formik.values.password) {

      // signInWithEmailAndPassword(auth, formik.values.email, formik.values.password)
      // .then((userCredential) => {
      //   const user = userCredential.user;
      //   console.log(user);
      //   alert("Login successfully!");
      //   history.push({
      //     pathname:"/dashboard",

      //   })
      // })
      // .catch((error) => {
      //   alert("Admin not found");
      //   console.log(error);
      // });

      dispatch(userRequest());
      await signInWithEmailAndPassword(
        auth,
        formik.values.email,
        formik.values.password
      )
        .then(async (userCredential) => {
          // const snap = await getDoc(
          //   doc(db, "user_profile", userCredential.user.uid)
          // );
          const user = userCredential.user;
          if (user) {
            dispatch(userSuccess(user));
            alert("Login successfully!");
            history.push("/dashboard");
          } else {
            auth.signOut().then(() => {
              dispatch(userFailure("You are not an admin"));
            });
          }
        })
        .catch((err) => {
          dispatch(userFailure(err.code));
        });
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="error">{error && error}</div>
      <div className="email__field">
        <label htmlFor="email">
UserEmail
        {/* Nom d'utilisateu */}
        </label>
        <br />
        <input
          type="email"
          placeholder="HugIn113@gmail.com"
          id="email"
          name="email"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <div id="error">{formik.errors.email}</div>
        ) : null}
      </div>
      <div className="password__field">
        <label htmlFor="password">Password</label>
        <br />
        <div className="password__input__area">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="8 + Characters"
            id="password"
            name="password"
            {...formik.getFieldProps("password")}
          />
          <div
            className="password__icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {!showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
          </div>
        </div>

        {formik.touched.password && formik.errors.password ? (
          <div id="error">{formik.errors.password}</div>
        ) : null}
      </div>
      <button id="signin__btn" type="submit" disabled={loading}>
        {loading ? "Loading..." : "Log In"}
      </button>
    </form>
  );
};

export default Form;
