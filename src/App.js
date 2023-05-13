import logo from './logo.svg';
import './App.css';
import eye from "./eyes.png";
import twitter from "./twitter.png";
import tg from "./tg.png";
import tea from "./tea.png";
import peek from "./peek.png";

function App() {
  return (
    <div className="App">
      <nav >
        <div style={{maxHeight:"100px", maxWidth:"100px"}}>
          <img src={eye} width="100%" height="100%"/>
        </div>
        <div className='title'>
          Kermit
        </div>
        <div style={{maxHeight:"200px", maxWidth:"200px", marginLeft:"auto"}}>
          <img src={twitter} width="50%" height="50%" style={{cursor:"pointer"}}
          onClick={()=>{
            window.open("https://twitter.com/KermitTheETH");
          }}/>
          <img src={tg} width="50%" height="50%" style={{cursor:"pointer"}} onClick={()=>{
            window.open(
"//t.me/Kermitsoneth")
          }}/>
        </div>
      </nav>
      <div className='main-content'>
          <div className="main_">
            <div>$KERMIT</div>
            <div style={{fontWeight:400, marginTop:"2%"}}>Swamp, or no Swamp.</div>
<div style={{marginTop:"2%"}}>But that’s none of my business.</div>
  <div className='buttons'>
      <div onClick={
        ()=>{
          window.open("https://app.uniswap.org/#/swap?inputCurrency=0xfe625Bb2D2a0f24aCE72aDc3365f203771495e39");
        }
      }>
        BUY $KERMIT
      </div>
      <div onClick={()=>{
        window.open("https://dexscreener.com/ethereum/0x3fa0d2fb8ec605447da6b7b54cda8d8e3dfff22f");
      }}>
        CHART
      </div>
  </div>
          </div>
          
          <div className="img" style={{width:"100%", height:"100%"}}>
            <img src={tea}/>
          </div>
      </div>
      <div className='secondary'>
      Kermit was crowned King of the Muppets after defeating his arch-nemesis, Constantine.
With Miss Piggy by his side, he ruled over the kingdom with fairness and kindness, always putting the needs of his fellow Muppets first.
And the people rejoiced, for they knew that with Kermit as their king, they were in good hands.
<br/><br/>
Now, Kermit is here to generate you enough wealth to buy your own swamp.
      </div>
      <footer>
      <div>Copyright KermitTheETH 2023. All rights Reserved.</div>
        <div style={{maxHeight:"100px", maxWidth:"200px"}}>
          <img src={peek} width="100%"  />
        </div>
      
      </footer>
    </div>
  );
}

export default App;
