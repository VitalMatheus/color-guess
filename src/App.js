import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState();
  const [answer, setAnswer] = useState();
  const [condition, setCondition] = useState('');
  
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 256)
  }

  const getRandomColor = () => {
    return `RGB(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
  }

  const sortAnswer = (rightAnswer) => {
    const options = [rightAnswer, getRandomColor(), getRandomColor()];
    setAnswer(options);
  }
  
  const newGame = () => {
    const rightAnswer = getRandomColor();
    setColor(rightAnswer);
    sortAnswer(rightAnswer);
  }

  const handleClick = ({ target }) => {
    if (target.value === color) {
      setCondition('Acertô mizeravi')
      newGame()
    } else {
      setCondition('Errooooowwww')
      newGame()
    }
  }

  useEffect(() => {
    newGame();
  }, [])

  return (
    <div className="main-page">
      <span className={ condition === 'Errooooowwww' ? 'wrong-answer' : 'right-answer'}>{ condition }</span>
      <div className="container" style={ { backgroundColor: color } }></div>
      <div className="buttons-container">
      {answer?.sort().map((each) => (
        <button
          type="button"
          key={ each }
          value={ each }
          onClick= { (e) => handleClick(e) }
        >
          { each }
        </button>
      )) }
      </div>
    </div>
  );
}

export default App;
