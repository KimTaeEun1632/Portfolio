import React, { useEffect, useState, useRef } from "react";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../../firebase";
import Star from "../../Star";
import "./BoardSectionContent.css";

const BoardSectionContent = () => {
  const [contents, setContents] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    const contentsQuery = query(
      collection(db, "contents"),
      orderBy("createdAt", "desc"),
      limit(25)
    );
    const unsubscribe = onSnapshot(contentsQuery, (snapshot) => {
      const contentsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setContents(contentsData);
    });

    return () => unsubscribe();
  }, []);

  // 🔹 오른쪽 버튼 클릭 시 스크롤 이동
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  // 🔹 왼쪽 버튼 클릭 시 스크롤 이동
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  return (
    <div className="board-section-content">
      <button className="carousel-button left" onClick={scrollLeft}>
        {"<"}
      </button>
      <div className="m-boardCard-wrapper" ref={carouselRef}>
        {contents.map((content) => (
          <div className="m-boardCard-container" key={content.id}>
            <Star star={content.rating} />
            <p>{content.nickname}</p>
            <p>{content.content}</p>
          </div>
        ))}
      </div>
      <button className="carousel-button right" onClick={scrollRight}>
        {">"}
      </button>
    </div>
  );
};

export default BoardSectionContent;
