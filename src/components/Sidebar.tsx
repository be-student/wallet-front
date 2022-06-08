import SideButton from "./core/SideButton";

const Sidebar = () => {
  return (
    <div
      style={{
        width: "25%",
        maxWidth: "230px",
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "80%", marginTop: "2rem" }}>
        <img
          alt="sogang logo"
          src="https://sogangteam2bucket.s3.ap-northeast-2.amazonaws.com/logo/sogang.svg"
        />
      </div>
      <SideButton where="/">팀원 소개</SideButton>
      <SideButton where="/send">전송</SideButton>
      <SideButton where="/add">커스텀 토큰 추가</SideButton>
      <SideButton where="/info">정보관리</SideButton>
    </div>
  );
};
export default Sidebar;
