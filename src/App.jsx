import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import people from "./data"
import { useState } from "react"
import Person from "./Person"

const App = () => {
  const [index, setIndex] = useState(0)

  const cycleLeft = (index) => {
    let newIndex
    if (index) {
      newIndex = index - 1
    } else {
      newIndex = people.length - 1
    }
    setIndex(newIndex)
  }

  const cycleRight = (index) => {
    let newIndex
    if (index < people.length - 1) {
      newIndex = index + 1
    } else {
      newIndex = 0
    }
    setIndex(newIndex)
  }

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length)
    if (randomNumber === index) {
      randomNumber = 0
    }
    setIndex(randomNumber)
  }

  return (
    <main>
      <article className="review">
        <Person data={people[index]} />
        <div className="btn-container">
          <button className="prev-btn" onClick={() => cycleLeft(index)}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={() => cycleRight(index)}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          Surprise Me
        </button>
      </article>
    </main>
  )
}
export default App
