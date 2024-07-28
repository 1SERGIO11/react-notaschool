import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header.jsx';
import Main from "./Components/Main/Main"
import classes from "./index.css"
const App = () => {
  return (
    <div className={classes.appWrapper}>
      <Header />
      <Main />
      <Footer/>
    </div>
    

  );
}

export default App;
