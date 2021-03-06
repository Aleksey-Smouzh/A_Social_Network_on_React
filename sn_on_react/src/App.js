import HeaderContainer from "./components/Header/HeaderContainer";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
// import Profile from "./components/Navbar/Profile/Profile";
import Footer from "./components/Footer/Footer";
//import Dialogs from "./components/Navbar/Dialogs/Dialogs";
import {  Routes, Route } from "react-router-dom";
import News from "./components/Navbar/News/News";
import Music from "./components/Navbar/Music/Music";
import Settings from "./components/Navbar/Settings/Settings";
import DialogsContainer from "./components/Navbar/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Navbar/Profile/ProfileContainer"
import UsersContainer from "./components/Navbar/Users/UsersContainer";
function App(props) {
  return (
    <div className="container_app">
      <HeaderContainer/>
        <Navbar />
        <Routes>
          <Route path="/profile" element={ProfileContainer} /> 
          <Route
            path="/dialogs"
            element={<DialogsContainer  />}
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="users" element={<UsersContainer />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      
      <Footer />
    </div>
  );
}

export default App;

//<Profile state={props.state.profilePage} profileData={props.state.profileData} dispatch={props.dispatch} store={props.store}
//element={<Profile store={props.state} />}
//element={<DialogsContainer store={props.store} />}