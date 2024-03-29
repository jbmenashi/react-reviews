import { FaQuoteRight } from "react-icons/fa"

const Person = (props) => {
  return (
    <>
      <div className="img-container">
        <img
          src={props.data.image}
          alt={props.data.name}
          className="person-img"
        />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{props.data.name}</h4>
      <p className="job">{props.data.job}</p>
      <p className="info">{props.data.text}</p>
    </>
  )
}
export default Person
