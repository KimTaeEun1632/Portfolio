import { useState } from "react";
import "./BoardModal.css";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../firebase";

const BoardModal = ({ setIsOpenModal }) => {
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const user = auth.currentUser;

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!user || !content || !rating || !title) return;
    try {
      await addDoc(collection(db, "contents"), {
        nickname: user.displayName || "Anonymous",
        userId: user.uid,
        title,
        content,
        rating,
        createdAt: Date.now(),
      });
    } catch (e) {
      console.log(e);
    } finally {
      setIsOpenModal(false);
    }
  };

  return (
    <div className="modal-wrapper">
      <div className="modal-title-wrapper">
        <h2 className="modal-title">글 작성</h2>
        <button
          onClick={() => setIsOpenModal(false)}
          className="modal-close-button"
        >
          <img src="/images/x_button.svg" alt="CloseButton" />
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="modal-form-top">
          <div className="modal-description-wrapper">
            <p className="modal-description">
              자유롭게 글을 쓰고 사이트에 대해 평가 해주세요!
            </p>
            <p className="modal-caution">
              ※ 부적절한 단어가 포함 될 시 게시물이 삭제 될 수 있습니다
            </p>
          </div>
          <div className="modal-input-wrapper">
            <div className="modal-star">
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={star} onClick={() => handleStarClick(star - 1)}>
                  <img
                    src={
                      star <= rating
                        ? "/images/starOnIcon.svg"
                        : "/images/starOffIcon.svg"
                    }
                    alt={`별점 ${star}`}
                  />
                </div>
              ))}
            </div>
            <div className="modal-input"></div>
          </div>
        </div>
        <div className="modal-textarea-wrapper">
          <input
            className="modal-title-textarea"
            type="text"
            name="title"
            placeholder="제목을 입력해주세요"
            value={title}
            maxLength={78}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            className="modal-textarea"
            onChange={(e) => setContent(e.target.value)}
            value={content}
            placeholder="자유롭게 작성해주세요"
            style={{ whiteSpace: "pre-wrap" }}
          />
          <button className="modal-submit-button" type="submit">
            작성하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default BoardModal;
