import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./navigation/navigation";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
