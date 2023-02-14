import "./App.css";
import Image from "./Assets/470a19a36904fe200610cc1f41eb00d9.jpg"

function App(){
  const x = 10;
  var text = "Not equal";
  if (x===10){
    text = "Equal";
  }else {
    text = "Not Equal";
  }
return( 
<div className="App">
<h1>Hello World</h1>
<p>This is paragraph</p>
<h3>{text}</h3>
<h3>{5+30}</h3>
<img src={Image} alt="pic" width="50%"  /> 
<h4>{x > 10? "greater" : "lesser"}</h4>
</div>
);
}
export default App;