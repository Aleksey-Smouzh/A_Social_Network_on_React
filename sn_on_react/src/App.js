import Header from "./components/Header/Header";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Navbar/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Navbar/Dialogs/Dialogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./components/Navbar/News/News";
import Music from "./components/Navbar/Music/Music";
import Settings from "./components/Navbar/Settings/Settings";
import { addPost } from "./redux/State";



function App(props) {
  return (
    <div className="container_app">
      <Header></Header>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/profile" element={<Profile postData={props.state.postData} profileData={props.state.profileData} addPost={props.state.addPost}/>} />
          <Route path="/dialogs" element={<Dialogs dialogsData={props.state.dialogsData} messageData={props.state.messageData} />} />
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
