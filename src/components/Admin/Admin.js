import React, { useState, useEffect } from "react";
import AdminAddExp from "./AdminAddExp";
import AdminAddPortfolio from "./AdminAddPortfolio";
import AdminMenu from "./AdminMenu";
import { Outlet } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import Login from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { changeUserStatus } from "../../redux/actions";
import "./admin.scss";

export default function Admin() {
  const auth = getAuth();
  const [isUser, setIsUser] = useState(false);
  const isUserSignIn = useSelector((state) => state.user.isSignIn);
  const dispatch = useDispatch();
  console.log(isUserSignIn);
  useEffect(() => {
    dispatch(changeUserStatus(isUser));
  }, [isUser]);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsUser(true);
    } else {
      setIsUser(false);
    }
  });
  function ShowLoginForm() {
    if (isUserSignIn) {
      return (
        <>
          <div className="admin_menu_wrap">
            <AdminMenu />
            <div className="logout">
              <span onClick={logOut}>Log Out</span>
            </div>
          </div>
          <div className="adding_wrap">
            {/* Get child reutes */}
            <Outlet />
          </div>
        </>
      );
    }
    return <Login />;
  }

  function logOut() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  }
  return (
    <div className="adminWrap">
      <ShowLoginForm />
    </div>
  );
}
