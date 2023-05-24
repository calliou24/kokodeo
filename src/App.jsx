import Section from "./components/Section/Section";
import { NavBar } from "./components/NavBar/NavBar";
import "./styles/global-styles.css";
function App() {
  return (
    <>
      <main className="header">
        <div className="app">
          <NavBar />
          <Section />
        </div>
      </main>
    </>
  );
}

export default App;
