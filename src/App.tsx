import Navigation from "./navigation/navigation";
import { AuthProvider } from "./contexts/AuthContext";
import "./index.css";

const App = () => {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
};

export default App;
