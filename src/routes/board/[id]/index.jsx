import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useMemo, useState } from "react";
import { db } from "../../../firebase";
import { useParams } from "react-router-dom";

const BoardContent = () => {
  const [content, setContent] = useState(null);
  const { id } = useParams();
  const boardId = id;
  const docRef = useMemo(() => doc(db, "contents", boardId), [boardId]);

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log("문서 데이터:", docSnap.data());
          setContent(docSnap.data());
        } else {
          console.log("문서가 존재하지 않습니다.");
        }
      } catch (error) {
        console.error("문서 가져오기 오류:", error);
      }
    };

    fetchDocument();
  }, [docRef]);

  return (
    <div>
      {content ? (
        <div>
          <h2>{content.title}</h2>
          <p>
            <strong>작성자:</strong> {content.nickname}
          </p>
          <p>
            <strong>내용:</strong> {content.content}
          </p>
          <p>
            <strong>평점:</strong> {content.rating}
          </p>
          <p>
            <strong>작성일:</strong>{" "}
            {new Date(content.createdAt).toLocaleString()}
          </p>
        </div>
      ) : (
        <p>로딩 중...</p>
      )}
    </div>
  );
};

export default BoardContent;
