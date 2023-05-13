import './index.css'

const HistoryList = props => {
  const {listItems, deleteList} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = listItems

  const onDeleteList = () => {
    deleteList(id)
  }

  return (
    <li className="list-item">
      <p>{timeAccessed}</p>
      <div className="item-details">
        <img src={logoUrl} alt="app logo" className="app-logo" />
        <p className="title">{title}</p>
        <p className="url">{domainUrl}</p>
      </div>
      <button
        alt="delete"
        type="button"
        className="delete-btn"
        onClick={onDeleteList}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryList
