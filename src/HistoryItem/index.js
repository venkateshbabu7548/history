import './index.css'

const HistoryItem = props => {
  const {historyItem, deleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem
  const onDelete = () => {
    deleteHistoryItem(id)
  }
  return (
    <li>
      <div className="each">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="icon" />
        <p className="time">{title}</p>
        <p className="domain">{domainUrl}</p>
      </div>
      <button
        type="button"
        className="img-con"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
export default HistoryItem
