import Header from "./components/Header/Header";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Navbar/Profile/Profile";
import Footer from "./components/Footer/Footer";
//import Dialogs from "./components/Navbar/Dialogs/Dialogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./components/Navbar/News/News";
import Music from "./components/Navbar/Music/Music";
import Settings from "./components/Navbar/Settings/Settings";
import DialogsContainer from "./components/Navbar/Dialogs/DialogsContainer";
function App(props) {
  return (
    <div className="container_app">
      <Header></Header>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/profile" element={<Profile store={props.store}/>} />
          <Route path="/dialogs" element={<DialogsContainer store={props.store} />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

//<Profile state={props.state.profilePage} profileData={props.state.profileData} dispatch={props.dispatch} store={props.store}
