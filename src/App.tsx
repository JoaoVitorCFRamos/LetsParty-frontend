import Navigation from "./navigation/navigation";
import { AuthProvider } from "./contexts/AuthContext";
import { ToastContainer } from 'react-toastify';
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <AuthProvider>
      <Navigation />
      <ToastContainer />
    </AuthProvider>
  );
};

export default App;
