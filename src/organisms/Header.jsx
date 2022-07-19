function Header() {
  return (
    <header style={{
      width: "100%"
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#78BBE6",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
      }}>
        <div style={{
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}>
          <h1 style={{
            color: "#FFFFFF",
            fontSize: "2rem",
          }}
          >
            <a href="/"
              style={{
                textDecoration: "none",
                color: "inherit"
              }}
            >
              犬画像検索
            </a>
          </h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
