import React from "react";
import "./scss/_Modal.scss";

function Modal({ setOpenModal }: any) {
  return (
    <div className="Modal__Background">
      <div className="Modal__Container">
        <div className="Modal__CloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="Modal__Title">고추탄저병</div>
        <div className="Modal__Content">
          <img
            className="Modal__Image"
            src="https://images.unsplash.com/photo-1622180203374-9524a54b734d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
            alt="crops"
          />
          <div className="Modal__Body">
            <h1>
              가장 효과적인 고추 탄저병의 재배적 방제에는 비가림 시설로 빗물이
              직접 과실에 튀는 것을 막는 방법이 있다. 연구자에 따라 비가림
              시설의 고추 탄저병 방제 효과는 85~95% 정도로 나타난다. 무농약 고추
              재배에서 비가림 시설이 무설치구에 비 해 수량은 약 2배 증가하는
              것으로 보고되었다. 가장 효과적인 고추 탄저병의 재배적 방제에는
              비가림 시설로 빗물이 직접 과실에 튀는 것을 막는 방법이 있다.
              연구자에 따라 비가림 시설의 고추 탄저병 방제 효과는 85~95% 정도로
              나타난다. 무농약 고추 재배에서 비가림 시설이 무설치구에 비 해
              수량은 약 2배 증가하는 것으로 보고되었다.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
