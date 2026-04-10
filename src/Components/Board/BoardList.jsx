import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { collection, limit, onSnapshot, orderBy, query, startAfter } from "firebase/firestore";
import { db } from "../../firebase";
import BoardItem from "./BoardItem";
import BoardPagination from "./BoardPagination";
import "./BoardList.css";

const PAGE_SIZE = 10;

const BoardList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [contents, setContents] = useState([]);
  const [pageStack, setPageStack] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);
  const [hasNext, setHasNext] = useState(false);
  const sortValue = searchParams.get("sort") || "createdAt";

  const handleSortChange = (val) => {
    setSearchParams({ sort: val });
    setPageStack([]);
  };

  useEffect(() => {
    let q = query(collection(db, "contents"), orderBy(sortValue, "desc"));
    if (pageStack.length > 0) q = query(q, startAfter(pageStack[pageStack.length - 1]));
    q = query(q, limit(PAGE_SIZE + 1));

    return onSnapshot(q, (snap) => {
      const hasMore = snap.docs.length > PAGE_SIZE;
      setHasNext(hasMore);
      const pageDocs = hasMore ? snap.docs.slice(0, PAGE_SIZE) : snap.docs;
      setContents(pageDocs.map(doc => ({ id: doc.id, ...doc.data() })));
      setLastDoc(pageDocs[pageDocs.length - 1]);
    }, (err) => console.error("Error:", err));
  }, [sortValue, pageStack]);

  return (
    <div className="board-list-wrapper">
      <div className="board-list-header">
        <div onClick={() => setIsOpen(!isOpen)} className="board-dropdown-wrapper">
          <button className="board-dropdown">{sortValue === "createdAt" ? "최신순" : sortValue === "rating" ? "별점순" : "댓글순"}</button>
          {isOpen && <div className="board-dropdown-button">
            <button onClick={() => handleSortChange("createdAt")}>최신순</button>
            <button onClick={() => handleSortChange("rating")}>별점순</button>
            <button onClick={() => handleSortChange("replyCount")}>댓글순</button>
          </div>}
        </div>
      </div>
      {contents.map(item => <BoardItem key={item.id} content={item} />)}
      <BoardPagination currentPage={pageStack.length} hasNext={hasNext} onPrev={() => setPageStack(ps => ps.slice(0, -1))} onNext={() => setHasNext(hn => hn && lastDoc && setPageStack(ps => [...ps, lastDoc]))} />
    </div>
  );
};

export default BoardList;
