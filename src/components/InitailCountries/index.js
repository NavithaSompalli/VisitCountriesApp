import './index.css'

const InitailCountries = props => {
  const {countriesList, visitCountryButton} = props
  const {id, name, isVisited} = countriesList
  const visitedBtnClassName = isVisited ? 'visited_btn' : 'visit_btn'

  const visitButton = () => {
    visitCountryButton(id)
  }

  return (
    <li className="country-list-item" key={id}>
      <p className="country-name">{name}</p>
      <button
        className={`${visitedBtnClassName}`}
        type="button"
        onClick={visitButton}
      >
        {isVisited ? <p>Visited</p> : <p>Visit</p>}
      </button>
    </li>
  )
}

export default InitailCountries
