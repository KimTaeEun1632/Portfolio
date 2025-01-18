import { useState } from "react";
import "./BoardModal.css";

const BoardModal = ({ setIsOpenModal }) => {
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Rating:", rating);
    console.log("Content:", content);
  };

  const onChange = (event) => {
    setContent(event.target.value);
  };

  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="modal-wrapper">
      <div className="modal-title-wrapper">
        <h2 className="modal-title">글 작성</h2>
        <button
          onClick={() => {
            setIsOpenModal(false);
          }}
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
              {stars.map((_, index) => (
                <div key={index} onClick={() => handleStarClick(index)}>
                  <img
                    src={
                      index < rating
                        ? "/images/starOnIcon.svg"
                        : "/images/starOffIcon.svg"
                    }
                    alt="star"
                  />
                </div>
              ))}
            </div>
            <div className="modal-input">
              <input type="text" name="name" placeholder="Nickname" required />
              <input
                type="password"
                name="password"
                placeholder="password"
                required
              />
            </div>
          </div>
        </div>
        <div className="modal-textarea-wrapper">
          <textarea
            className="modal-textarea"
            onChange={onChange}
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
