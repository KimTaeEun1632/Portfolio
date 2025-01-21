import { collection, getDocs, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";

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
      const { content, createdAt, nickname, password, rating, title } =
        doc.data();
      return {
        content,
        createdAt,
        nickname,
        password,
        rating,
        title,
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
        <a key={content.id} href={`/board/${content.id}`}>
          {content.title}
        </a>
      ))}
    </div>
  );
};

export default BoardList;
