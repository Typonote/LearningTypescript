import React, { useState } from "react";
import Modal from "../Common/Modal";
import "./scss/_CropsList.scss";
import image1 from "../../Asset/Disease/Tomato/tomato1.jpg";

const CropsList = (props: any) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="Search__Result">
        {props.data.map((value: any) => (
          <div className="CropsList__Container-Box">
            <img className="CropsList__Image" src={image1} alt="crops" />
            <div className="CropsList__Classification">
              <div className="Classification__Name">{value.class1}</div>
              <div className="Classification__Name">{value.class2}</div>
            </div>

            <div className="CropsList__Name">{value.name}</div>

            <div className="CropsList__Content">
              {value.name}에 대해 알아보세요
            </div>

            <div className="CropsList__Click">
              <button
                className="CropsList__Button"
                onClick={() => {
                  setModalOpen(true);
                }}
              >
                정보확인
              </button>
            </div>
          </div>
        ))}
      </div>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </>
  );
};

export default CropsList;

// 깃허브 프로필 커밋 미반영 확인 테스트2
