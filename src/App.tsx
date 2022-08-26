import Navigation from "./navigation/navigation";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}

export default App;
