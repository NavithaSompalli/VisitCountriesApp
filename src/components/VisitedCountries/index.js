import './index.css'

const VisitedCountries = props => {
  const {visitedCountriesList, removeItem} = props
  const {imageUrl, id, name} = visitedCountriesList
  const removeButton = () => {
    removeItem(id)
  }

  return (
    <li className="visited-county-list-item">
      <img src={imageUrl} alt="thumbnail" className="country-image" />
      <div className="remove-button-container">
        <p className="country-name">{name}</p>
        <button type="button" className="remove-btn" onClick={removeButton}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
