import './App.scss';
import Hero from "./components/Hero";
import {useSelector} from "react-redux";

function App() {
    const darkMode = useSelector(state => state.darkMode)


    const body = () => {
        document.body.style.background = darkMode? '#222' : 'white'
        document.body.style.transition = '1s'
    }

    body()

  return (
    <div className="App" >
      <Hero/>
    </div>
  );
}

export default App;
