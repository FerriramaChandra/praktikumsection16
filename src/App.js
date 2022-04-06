import { Link, Outlet } from 'react-router-dom';
import './App.css';
import AboutAuthor from './components/routes/aboutAuthor';
import AboutApp from './components/routes/aboutApp';
import Navbar from './components/routes/Navbar';
import Home from './components/Home';
import Header from "./components/pages/Header"



const App = () => {
  return (
    <div>
        <Navbar>
          <Link to={'/'}/>
          <Link to={'/AboutApp'} exact component={AboutApp} />
          <Link to={'/AboutAuthor'} exact component={AboutAuthor} />              
        </Navbar>
        <Outlet/>
      <div className="App" >
        <Header/>
        <Home/>
      </div>
    </div>
  );
}

export default App;
