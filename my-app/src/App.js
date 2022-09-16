import logo from './logo.svg';
import './App.css';


function App() {
  const [text, setText] = useState(1);

  return (
  <div className ="App">
    <AppText texts ={text}/>
    <input value ={text} onChange={(e) => setText(e.target.value)}/>
  </div>
  );
}
function AppText({texts}){
  return <h1>{texts}</h1>;
}


export default App;
