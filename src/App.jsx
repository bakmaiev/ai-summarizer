import "./App.css";
import Hero from "./components/Hero";
import SummaryTool from "./components/SummaryTool";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient"></div>
      </div>
      <div className="app">
        <Hero />
        <SummaryTool />
      </div>
    </main>
  );
};

export default App;
