import { useState } from "react";

const Header = () => {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <header
      style={{
        height: "10vh",
        width: "85%",
        color: "#949DB4",
        display: "flex",
        justifyContent: "flex-end",
        boxSizing: "border-box",
        padding: "0.5rem 0.5rem",
      }}
    >
      <button
        style={{
          position: "relative",
          backgroundColor: "none",
          border: "none",
          display: "flex",
          alignItems: "center",
          height: "20px",
        }}
        onClick={() => {
          setModal((prev) => !prev);
        }}
      >
        <img
          style={{ maxWidth: "20px", maxHeight: "20px", paddingRight: "5px" }}
          src="https://sogangteam2bucket.s3.ap-northeast-2.amazonaws.com/logo/sogang.png"
          alt="로고"
        ></img>
        지갑 주소 v
        {modal && (
          <div
            style={{
              position: "absolute",
              top: "23px",
              right: "0px",
              zIndex: "3",
            }}
          >
            <div
              style={{
                width: "200px",
                height: "150px",
                background: "white",
                boxShadow: "0 0 4px #888888",
              }}
            >
              <div>계정 생성</div>
              <div>지갑 연결 / 지갑 연결 해제</div>
            </div>
          </div>
        )}
      </button>
    </header>
  );
};
export default Header;
