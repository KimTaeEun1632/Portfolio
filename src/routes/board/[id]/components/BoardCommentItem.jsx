import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../firebase";
import Badge from "../../../Badge/Badge";
import BoardReplyEdit from "../../BoardReplyEdit";
import BoardSubReply from "../../BoardSubReply";
import SubReplySubmit from "../../SubReplySubmit";

const BoardCommentItem = ({ r, user, boardId, content }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedReply, setEditedReply] = useState(r.reply);
  const [isSubReplyOpen, setIsSubReplyOpen] = useState(false);

  const handleEdit = async () => {
    try {
      await updateDoc(doc(db, "contents", boardId, "replies", r.id), { reply: editedReply });
      setIsEditing(false);
    } catch (e) { alert("댓글 수정 실패"); }
  };

  return (
    <div className="board-reply-item">
      <div className="board-reply-top">
        <div>
          <div className="board-reply-nickname-wrapper">
            <p className="board-reply-nickname">{r.nickname}</p>
            {content.userId === r.userId && <Badge item={r} />}
          </div>
          <p className="board-reply-date">{new Date(r.createdAt).toLocaleString()}</p>
        </div>
        {user?.uid === r.userId && <BoardReplyEdit onEdit={() => setIsEditing(true)} boardId={boardId} replyId={r.id} />}
      </div>
      {isEditing ? (
        <div className="edit-reply-wrapper">
          <textarea value={editedReply} onChange={(e) => setEditedReply(e.target.value)} />
          <button onClick={handleEdit}>수정 완료</button>
          <button onClick={() => setIsEditing(false)}>취소</button>
        </div>
      ) : (
        <div className="board-reply-body">
          <p style={{ whiteSpace: "pre-wrap" }}>{r.reply}</p>
          <button onClick={() => setIsSubReplyOpen(!isSubReplyOpen)}>{isSubReplyOpen ? "취소" : "답글달기"}</button>
          {isSubReplyOpen && <SubReplySubmit user={user} boardId={boardId} parentId={r.id} parent={r} setOpenReplyId={setIsSubReplyOpen} />}
          <BoardSubReply user={user} content={content} boardId={boardId} parentId={r.id} depth={1} />
        </div>
      )}
    </div>
  );
};

export default BoardCommentItem;
