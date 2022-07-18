function Button(props) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      paddingTop: "1rem",
      paddingBottom: "1rem",
    }}>
      <button type="submit">
        {props.text}
      </button>
    </div>
  )
}

export default Button;