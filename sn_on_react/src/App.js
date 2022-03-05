import Header from './components/Header/Header'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs';

function App() {
  return (
    <div className="container_app">
      
<Header></Header>
<Navbar/>
{/* <Profile/> */}
<Dialogs/>
<Footer/>
    </div>
  );
}

export default App;
