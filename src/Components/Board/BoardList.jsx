import { collection, getDocs, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";

import "./BoardList.css";
import getRelativeTime from "../getRelativeTime ";

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
    <div className="board-list-wrapper">
      <div className="board-list-header">
        <div></div>
        <div>드롭다운</div>
      </div>
      {contents.map((content) => (
        <section className="board-list-body">
          <div>
            <a
              className="board-list-link"
              key={content.id}
              href={`/board/${content.id}`}
            >
              {content.title}
            </a>
          </div>
          <div className="board-footer">
            <img src="/images/starOnIcon.svg" alt="별점" />
            <div>({content.rating})</div>
            <div className="board-nickname">{content.nickname}</div>
            <div className="board-info">
              {getRelativeTime(content.createdAt)}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default BoardList;
