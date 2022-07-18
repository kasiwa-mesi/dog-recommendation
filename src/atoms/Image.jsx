function Image(props) {
  return (
    <img 
      src={props.src}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        margin: "auto",
        objectFit: "cover",
      }}
    />
  );
}

export default Image;