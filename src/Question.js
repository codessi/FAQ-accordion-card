import React ,{useState} from "react"
import data from "./data"
import arrow from "./../src/images/icon-arrow-down.svg"

const Question = ({question, answer}) => {

  // const {question, answer} = data[0]

  const [show, setShow] = useState(false)


  const handleClick =()=> {
    setShow(!show)
    console.log(show)

  }

  return(
    
    <>
    <article>
      <div className="center">
        <button onClick={handleClick}><div className={`questions ${show&&"bold"}`}>{question}</div>
        <img src={arrow} className={!show ?"arrow":"down-arrow"} alt="" /></button>
      </div>
      <div className={show? 'show': 'hide'}>{answer}</div>
    </article>
 
    
    </>
    

  )
}

export default Question