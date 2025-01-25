import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useMemo, useState } from "react";
import { db } from "../../../firebase";
import { useParams } from "react-router-dom";
import "./boardContent.css";

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
    <div className="board-content-page">
      {content ? (
        <div className="board-content-wrapper">
          <div className="board-content-detail-header">
            <div className="board-content-detail-header-top">
              <a className="board-content-detail-header-link" href="/board">
                자유게시판
              </a>
              <p>{content.rating}</p>
              <h2 className="board-content-detail-header-title">
                {content.title}
              </h2>
            </div>
            <div className="board-content-detail-header-bottom">
              <div>
                <p className="board-content-detail-header-nickname">
                  {content.nickname}
                </p>
                <p className="board-content-detail-header-date">
                  {new Date(content.createdAt).toLocaleString()}
                </p>
              </div>
              <div>드롭다운</div>
            </div>
          </div>
          <div className="board-content-detail-body">
            <p>{content.content}</p>
          </div>
          <div className="board-content-detail-footer">댓글</div>
        </div>
      ) : (
        <p>로딩 중...</p>
      )}
    </div>
  );
};

export default BoardContent;
