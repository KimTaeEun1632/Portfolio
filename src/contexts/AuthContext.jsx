import React, { createContext, useState, useContext, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nickname, setNickname] = useState("");
  const [isLoading, setIsLoading] = useState(true); // 초기 로딩 상태 추가

  useEffect(() => {
    // Firebase 인증 상태 확인
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setNickname(user.displayName || "");
      } else {
        setIsLoggedIn(false);
        setNickname("");
      }
      setIsLoading(false); // 로딩 완료
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        nickname,
        setNickname,
        isLoading, // 로딩 상태를 제공
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
