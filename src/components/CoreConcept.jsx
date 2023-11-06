 export default function CoreConcept({title,description,image}){ //destruction of parameters simply props
    return(
      <li>
        <img src={image} alt={image}/>
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    )
  }