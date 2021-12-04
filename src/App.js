import NeonButton from './NeonButton';
import './App.css'
function App() {
  return (
    <>
      <div className='button-row'> 
        <NeonButton iconName="wifi" />
        <NeonButton iconName="highlight" />
        <NeonButton iconName="bluetooth" />
        <NeonButton iconName="flight" />
      </div>

      <footer>
        Guided by:<span> CODE WITH YD</span>
        <br />
        Designed by <a target="_blank" rel="noreferrer" href='https://github.com/MohammadAmin-Mashayekhan'>Mohammad amin Mashayekhan</a>
      </footer>
    </>

    
  );
}

export default App;
