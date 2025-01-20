import { collection, getDocs, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import BoardContent from "./BordContent";
import "./BoardList.css";

const BoardList = () => {
  const [contents, setContents] = useState([]);
  const fetchContents = async () => {
    const contentsQuery = query(
      collection(db, "contents"),
      orderBy("createdAt", "desc")
    );
    const spanshot = await getDocs(contentsQuery);
    const contents = spanshot.docs.map((doc) => {
      const { content, createdAt, nickname, password, rating } = doc.data();
      return {
        content,
        createdAt,
        nickname,
        password,
        rating,
        id: doc.id,
      };
    });
    setContents(contents);
  };
  useEffect(() => {
    fetchContents();
  }, []);

  return (
    <div className="BoardList-wrapper">
      {contents.map((content) => (
        <BoardContent key={content.id} {...content} />
      ))}
    </div>
  );
};

export default BoardList;
