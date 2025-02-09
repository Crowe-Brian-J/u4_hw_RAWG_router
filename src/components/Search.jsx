const Search = (props) => {
  // props.onSubmit, props.onChange, props.value

  return (
    <form onSubmit={props.onSubmit}>
      {/* Need to make sure it isn't <input></input>. Needs to be <input [Insertstuffhere] /> */}
      <input
        type="text"
        name="search"
        value={props.value}
        placeholder="Search Games"
        onChange={props.onChange}
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default Search
