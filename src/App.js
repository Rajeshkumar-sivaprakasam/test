import logo from "./logo.svg";
import "./App.css";
import SignUp from "./views/auth/signup/SignUp";
import SignIn from "./views/auth/signin/SignIn";
import NavBar from "./views/navigation/NavBar";
import Landing from "./views/components/landing/Landing";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <SignIn />
      <SignUp />
    </div>
  );
}

export default App;
