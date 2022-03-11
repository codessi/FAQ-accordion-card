
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
    
          {/* <article>
            <div className="center">
              <div className={`questions ${show&&"bold"}`}>How many team members can I invite?</div>
              <button onClick={handleClick}><img src={arrow} className={!show ?"arrow":"down-arrow"} alt="" /></button>
            </div>
            <div className={show? 'show': 'hide'}>You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</div>
          </article> */}
        </div>
      </div>  {/* card */}
      {/* <picture>
            <source media="(min-width:900px)" srcset={box}/>
            <img className= "box-two" src=""alt="" />
      </picture> */}
    </>
  );
}

export default App;
