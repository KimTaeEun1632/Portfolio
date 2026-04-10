import React from "react";

const BoardCommentForm = ({ reply, setReply, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <textarea
          className="board-content-reply"
          placeholder="댓글을 입력해 주세요."
          value={reply}
          maxLength={500}
          onChange={(e) => setReply(e.target.value)}
        />
      </div>
      <div className="board-content-reply-button-wrapper">
        <button className="board-content-reply-button" type="submit">등록</button>
      </div>
    </form>
  );
};

export default BoardCommentForm;
