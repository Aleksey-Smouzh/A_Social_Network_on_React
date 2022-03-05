import Header from './components/Header/Header'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="container_app">
      
<Header></Header>
<Navbar/>
{/* <Profile/> */}
<Footer/>
    </div>
  );
}

export default App;
