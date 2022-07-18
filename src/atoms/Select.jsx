function Select(props) {
  return (
    <select
      name="breed"
      defaultValue={props.default}
      style={{
        fontSize: "2rem",
      }}
    >
      {props.list.map((breed) => {
        return(
          <option key={breed} value={breed}>
            {breed}
          </option>
        )
      })}
    </select>
  )
}

export default Select;