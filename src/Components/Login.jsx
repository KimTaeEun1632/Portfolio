import { signInAnonymously, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [nickname, setNickname] = useState("");

  const handleSubmit = async (event) => {
    if (isLoading) return;
    event.preventDefault();
    try {
      setIsLoading(true);
      const credentials = await signInAnonymously(auth);
      await updateProfile(credentials.user, {
        displayName: nickname,
      });
      console.log(credentials.user);
    } catch (e) {
      console.log(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nickname:</label>
        <input
          type="text"
          name="nickname"
          placeholder="닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          required
        />
        <input type="submit" value={isLoading ? "Loading..." : "로그인"} />
      </form>
    </div>
  );
};

export default Login;
