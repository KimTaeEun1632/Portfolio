import React, { useEffect, useState } from "react";
import { signInAnonymously, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import "./Login.css";

const Login = () => {
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const { isLoggedIn, setIsLoggedIn, nickname, setNickname, isLoading } =
    useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isLoadingSubmit) return;
    try {
      setIsLoadingSubmit(true);
      const credentials = await signInAnonymously(auth);
      await updateProfile(credentials.user, {
        displayName: nickname,
      });
      setIsLoggedIn(true);
      setNickname(credentials.user.displayName);
    } catch (e) {
      console.log(e.message);
      setIsLoggedIn(false);
    } finally {
      setIsLoadingSubmit(false);
    }
  };

  const handleLogout = async (event) => {
    event.preventDefault();
    if (isLoadingSubmit) return;
    try {
      await auth.signOut();
      setIsLoggedIn(false);
      setNickname("");
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    if (auth.currentUser) {
      setNickname(auth.currentUser.displayName || "");
    }
  }, [isLoggedIn, setNickname]);

  if (isLoading) {
    return <p>로딩 중...</p>;
  }

  return (
    <>
      {isLoggedIn ? (
        <div className="logout-wrapper">
          <p className="nickname-display">
            '{nickname}'님,
            <br /> 안녕하세요.
          </p>
          <form onSubmit={handleLogout}>
            <input
              className="logout-input"
              type="submit"
              value={isLoadingSubmit ? "Loading..." : "로그아웃"}
            />
          </form>
        </div>
      ) : (
        <div className="login-wrapper">
          <form onSubmit={handleSubmit} className="login-form">
            <input
              className="login-input"
              type="text"
              name="nickname"
              placeholder="닉네임"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              required
            />
            <input
              className="login-button"
              type="submit"
              value={isLoadingSubmit ? "Loading..." : "로그인"}
            />
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
