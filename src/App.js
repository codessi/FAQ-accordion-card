
import './App.scss';
import illustration from "./../src/images/illustration-woman-online-mobile.svg"
import illustrationDesk from "./../src/images/illustration-woman-online-desktop.svg"
import box from "./../src/images/illustration-box-desktop.svg"

import bigPattern from "./../src/images/bg-pattern-mobile.svg"
import bigPatternDesk from "./../src/images/bg-pattern-desktop.svg"

import Question from './Question';
import data from './data';

function App() {

  return (
    <>  
      <div className="card">
        <div className="img-container">
          <picture>
            <source media="(min-width:900px)" srcset={bigPatternDesk}/>
            <img className= "pattern" src={bigPattern}alt="" />
          </picture>
          <picture>
            <source media="(min-width:900px)" srcset={illustrationDesk}/>
            <img className= "hero" src={illustration} alt="" />
          </picture>
          <picture>
            <source media="(min-width:900px)" srcset={box}/>
            <img className= "box" src=""alt="" />
          </picture>
        </div>
        <div className="content-container">
          <h3 className="title">FAQ</h3>
            {data.map((el,index)=> {
              const {question, answer} = el
      return(       
         <Question key={index} question={question } answer={answer} />   )
    })}

        </div>
      </div>  {/* card */}
    </>
  );
}

export default App;
