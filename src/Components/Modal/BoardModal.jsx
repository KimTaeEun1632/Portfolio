import { useState } from "react";
import "./BoardModal.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

const BoardModal = ({ setIsOpenModal }) => {
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!content || content.length > 200 || !rating || !nickname || !password)
      return;

    // 데이터 제출 로직 추가
    try {
      await addDoc(collection(db, "contents"), {
        content,
        rating,
        nickname,
        password,
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
              ※ 별점과 닉네임, 비밀번호를 입력해 주세요
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
            <div className="modal-input">
              <input
                type="text"
                name="nickname"
                placeholder="Nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <div className="modal-textarea-wrapper">
          <textarea
            className="modal-textarea"
            onChange={(e) => setContent(e.target.value)}
            maxLength={200}
            value={content}
            placeholder="자유롭게 작성해주세요."
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
