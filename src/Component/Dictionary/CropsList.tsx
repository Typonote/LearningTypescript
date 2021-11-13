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
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="CropsList__Heart"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg> */}
            <div className="CropsList__Button">정보확인</div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CropsList;
