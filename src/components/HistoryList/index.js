import './index.css'

const HistoryList = props => {
  const {listItems, deleteList} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = listItems

  const onDeleteList = () => {
    deleteList(id)
  }

  return (
    <li className="list-item">
      <p className="title">{(timeAccessed, logoUrl, title, domainUrl)}</p>
      <button
        alt="delete"
        type="button"
        className="delete-btn"
        onClick={onDeleteList}
      >
        <img src="https://assets.ccbp.in/frontend/react-js/delete-img.png" />
      </button>
    </li>
  )
}

export default HistoryList
