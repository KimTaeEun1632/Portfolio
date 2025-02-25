import React, { useEffect, useState } from "react";
import "./BoardList.css";
import getRelativeTime from "../getRelativeTime ";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../firebase";

const BoardList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const { contents: initialContents = [] } = useLoaderData();
  const [contents, setContents] = useState(initialContents);

  const sortValue = searchParams.get("sort") || "createdAt";

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSortChange = (value) => {
    const sortParam =
      value === "최신순"
        ? "createdAt"
        : value === "별점순"
        ? "rating"
        : "replyCount";

    setSearchParams({ sort: sortParam });
  };

  useEffect(() => {
    const contentsQuery = query(
      collection(db, "contents"),
      orderBy(sortValue, "desc"),
      limit(25)
    );

    const unsubscribe = onSnapshot(contentsQuery, (snapshot) => {
      const newContents = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setContents(newContents);
    });
    return () => unsubscribe();
  }, [sortValue]);

  return (
    <div className="board-list-wrapper">
      <div className="board-list-header">
        <div onClick={handleDropdown} className="board-dropdown-wrapper">
          <button className="board-dropdown">
            {sortValue === "createdAt"
              ? "최신순"
              : sortValue === "rating"
              ? "별점순"
              : "댓글순"}
          </button>
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
              <button onClick={() => handleSortChange("최신순")}>최신순</button>
              <button onClick={() => handleSortChange("별점순")}>별점순</button>
              <button onClick={() => handleSortChange("댓글순")}>댓글순</button>
            </div>
          )}
        </div>
      </div>
      {contents.map((content) => (
        <section className="board-list-body" key={content.id}>
          <div>
            {content.replyCount > 0 ? (
              <Link className="board-list-link" to={`/board/${content.id}`}>
                {content.title}{" "}
                <span className="board-list-replyCount">
                  [{content.replyCount}]
                </span>
              </Link>
            ) : (
              <Link className="board-list-link" to={`/board/${content.id}`}>
                {content.title}
              </Link>
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
