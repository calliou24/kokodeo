import Section from "./components/Section/Section";
import { NavBar } from "./components/NavBar/NavBar";
import "./styles/global-styles.css";
function App() {
  return (
    <>
      <div className="header">
        <NavBar />
        <Section />
      </div>
    </>
  );
}

export default App;
