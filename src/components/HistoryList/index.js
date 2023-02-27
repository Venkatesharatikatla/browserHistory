import './index.css'

const HistoryList = props => {
  const {listItems, deleteTodo} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = listItems

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item">
      <p className="title">{(timeAccessed, logoUrl, title, domainUrl)}</p>
      <button
        alt="delete"
        type="button"
        className="delete-btn"
        onClick={onDeleteTodo}
      >
        <img src="https://assets.ccbp.in/frontend/react-js/delete-img.png" />
      </button>
    </li>
  )
}

export default HistoryList
