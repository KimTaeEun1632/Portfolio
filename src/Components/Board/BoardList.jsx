import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";

import "./BoardList.css";

import getRelativeTime from "../getRelativeTime ";

const BoardList = () => {
  const [contents, setContents] = useState([]);
  const [sortValue, setSortValue] = useState("최신순");
  const [isOpen, setIsOpen] = useState(false);
  console.log(contents);

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownClick = (item) => {
    setSortValue(item);
    setIsOpen(false);
  };
  useEffect(() => {
    let unsubscribe = null;

    const fetchContents = async (orderField = "createdAt") => {
      const contentsQuery = query(
        collection(db, "contents"),
        orderBy(orderField, "desc"),
        limit(25)
      );

      unsubscribe = await onSnapshot(contentsQuery, (snapshot) => {
        const contents = snapshot.docs.map((doc) => {
          const { password, ...rest } = doc.data();
          return {
            ...rest,
            id: doc.id,
          };
        });
        setContents(contents);
      });
    };

    if (sortValue === "최신순") {
      fetchContents("createdAt");
    } else if (sortValue === "별점순") {
      fetchContents("rating");
    } else {
      fetchContents("replyCount");
    }

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [sortValue]);

  return (
    <div className="board-list-wrapper">
      <div className="board-list-header">
        <div onClick={handleDropdown} className="board-dropdown-wrapper">
          <button className="board-dropdown">{sortValue}</button>
          <svg
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            ></path>
          </svg>

          {isOpen && (
            <div className="board-dropdown-button">
              <button onClick={() => handleDropdownClick("최신순")}>
                최신순
              </button>
              <button onClick={() => handleDropdownClick("별점순")}>
                별점순
              </button>
              <button onClick={() => handleDropdownClick("댓글순")}>
                댓글순
              </button>
            </div>
          )}
        </div>
      </div>
      {contents.map((content) => (
        <section className="board-list-body" key={content.id}>
          <div>
            {content.replyCount > 0 ? (
              <a className="board-list-link" href={`/board/${content.id}`}>
                {content.title}{" "}
                <span className="board-list-replyCount">
                  [{content.replyCount}]
                </span>
              </a>
            ) : (
              <a className="board-list-link" href={`/board/${content.id}`}>
                {content.title}
              </a>
            )}
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
