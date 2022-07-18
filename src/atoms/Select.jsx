function Select(props) {
  return (
    <select name="breed" defaultValue={props.default}>
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