import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./navigation/navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
