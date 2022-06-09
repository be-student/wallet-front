import Card from "../components/Card";

const Default = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Card />
        <Card />
        <Card />
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
export default Default;
