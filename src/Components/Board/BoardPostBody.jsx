import React from "react";

const BoardPostBody = ({ isEditing, editedContent, setEditedContent, content, onEdit, onCancel }) => {
  return (
    <>
      <div className="board-content-detail-body">
        {isEditing ? (
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="edit-content-input"
          />
        ) : (
          <p style={{ whiteSpace: "pre-wrap" }}>{content.content}</p>
        )}
      </div>
      {isEditing && (
        <div className="edit-buttons">
          <button onClick={onEdit}>수정 완료</button>
          <button onClick={onCancel}>취소</button>
        </div>
      )}
    </>
  );
};

export default BoardPostBody;
