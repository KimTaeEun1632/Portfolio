import React, { useRef, useState } from "react";
import "./ProjectListBox.css";
import Modal from "../../Modal/Modal";

const ProjectListData = ({ item }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();

  return (
    <div className="image-wrapper">
      <img src={item.imgUrl} alt="이미지1" />
      <div className="project-detail-button">
        <button
          className="detail-button-hover"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          상세보기
        </button>
      </div>
      <p className="project-summation">{item.title}</p>
      <p className="project-technology">{item.technologies}</p>
      {modalOpen && (
        <div
          className="modal-background"
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setModalOpen(false);
            }
          }}
        >
          <Modal item={item} setModalOpen={setModalOpen} />
        </div>
      )}
    </div>
  );
};

const ProjectListBox = ({ items }) => {
  console.log(items);
  return (
    <ul className="ProjectListUl">
      {items.map((item) => {
        return <ProjectListData key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default ProjectListBox;
