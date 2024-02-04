import './App.scss';
import {useSelector} from "react-redux";
import Home from "./components/Home";

function App() {
    const darkMode = useSelector(state => state.darkMode)


    const body = () => {
        document.body.style.background = darkMode? '#222' : 'white'
        document.body.style.transition = '1s'
    }

    body()

  return (
    <div className="App" >
      <Home/>
    </div>
  );
}

export default App;
