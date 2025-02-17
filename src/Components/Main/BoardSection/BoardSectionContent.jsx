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

  const scrollRight = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

      if (scrollLeft + clientWidth >= scrollWidth - 5) {
        carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        carouselRef.current.scrollBy({ left: 400, behavior: "smooth" });
      }
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      if (carouselRef.current.scrollLeft <= 0) {
        carouselRef.current.scrollTo({
          left: carouselRef.current.scrollWidth,
          behavior: "smooth",
        });
      } else {
        carouselRef.current.scrollBy({ left: -400, behavior: "smooth" });
      }
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
