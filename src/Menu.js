const Menu = () => {
  return (
    <div
      style={{
        position: "absolute",
        right: "0",
        color: "white",
        padding: "0px",
        paddingRight: "80px",
        fontSize: "2.3vw",
      }}
    >
      <ul style={{ paddingLeft: "8px" }}>
        <li style={{ listStyle: "none" }}>HOME</li>
        <li style={{ listStyle: "none" }}>WORKS</li>
        <li style={{ listStyle: "none" }}>SKILL</li>
        <li style={{ listStyle: "none" }}>PROFILE</li>
        <li style={{ listStyle: "none" }}>LINKS</li>
      </ul>
    </div>
  );
};

export default Menu;