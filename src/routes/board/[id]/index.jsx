import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { addDoc, collection, doc, getDoc, onSnapshot, runTransaction, updateDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase";
import BoardPostHeader from "../../../Components/Board/BoardPostHeader";
import BoardPostBody from "../../../Components/Board/BoardPostBody";
import BoardCommentForm from "../../../Components/Board/BoardCommentForm";
import BoardCommentItem from "./components/BoardCommentItem";
import "./boardContent.css";

const BoardContent = () => {
  const { id: boardId } = useParams();
  const [content, setContent] = useState(null);
  const [reply, setReply] = useState("");
  const [replies, setReplies] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState("");
  const docRef = useMemo(() => doc(db, "contents", boardId), [boardId]);
  const user = auth.currentUser;

  const handleReplySubmit = async (e) => {
    e.preventDefault();
    if (!reply || !user) return;
    try {
      await addDoc(collection(db, "contents", boardId, "replies"), {
        reply, nickname: user.displayName, userId: user.uid, createdAt: Date.now(),
        depth: 0, parentId: null, path: ["root"]
      });
      await runTransaction(db, async (t) => {
        const snap = await t.get(docRef);
        t.update(docRef, { replyCount: (snap.data().replyCount || 0) + 1 });
      });
      setReply("");
    } catch (err) { alert("댓글 등록 실패"); }
  };

  const handleEdit = async () => {
    try {
      await updateDoc(docRef, { content: editedContent });
      setContent(p => ({ ...p, content: editedContent }));
      setIsEditing(false);
      alert("수정되었습니다.");
    } catch (e) { alert("수정 실패"); }
  };

  useEffect(() => {
    getDoc(docRef).then(s => s.exists() && setContent(s.data()));
    return onSnapshot(collection(db, "contents", boardId, "replies"), (s) => {
      setReplies(s.docs.map(d => ({ id: d.id, ...d.data() })).sort((a, b) => b.createdAt - a.createdAt));
    });
  }, [docRef, boardId]);

  if (!content) return <p>로딩 중...</p>;

  return (
    <div className="board-content-page">
      <div className="board-content-wrapper">
        <BoardPostHeader content={content} user={user} docRef={docRef} onEditClick={() => { setEditedContent(content.content); setIsEditing(true); }} />
        <BoardPostBody isEditing={isEditing} editedContent={editedContent} setEditedContent={setEditedContent} content={content} onEdit={handleEdit} onCancel={() => setIsEditing(false)} />
        <div className="board-content-detail-footer">
          <strong>댓글 {replies.length}</strong>
          <BoardCommentForm reply={reply} setReply={setReply} onSubmit={handleReplySubmit} />
          {replies.filter(r => r.depth === 0).map(r => (
            <BoardCommentItem key={r.id} r={r} user={user} boardId={boardId} content={content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoardContent;
