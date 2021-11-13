import React from "react";
import Dummy2 from "../../Sample/Dummy2";

import "./scss/_CropsList.scss";

const CropsList = () => {
  return (
    <section className="CropsList__Container">
      {Dummy2.map((option) => (
        <div className="CropsList__Container-Box">
          <img
            className="CropsList__Image"
            src="https://images.unsplash.com/photo-1622180203374-9524a54b734d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
            alt=""
          />
          <div className="CropsList__Classification">
            <div className="Classification__Name">{option.class1}</div>
            <div className="Classification__Name">{option.class2}</div>
          </div>

          <div className="CropsList__Name">{option.name}</div>

          <div className="CropsList__Content">
            {option.name}에 대해 알아보세요
          </div>

          <div className="CropsList__Click">
            <div className="CropsList__Button">정보확인</div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CropsList;
