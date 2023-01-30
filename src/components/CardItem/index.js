import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} technology-card-item`}>
      <div>
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <div className="img-container">
          <img src={imgUrl} className="avatar" alt={title} />
        </div>
      </div>
    </li>
  )
}

export default CardItem
