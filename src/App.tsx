import Home from "./components/Home/Home";
import { useTheme } from "./hooks/useTheme";

function App() {
  // change theme
  const { mode } = useTheme();
  return (
    <div className={`h-screen ${mode === "dark" ? "bg-gray-800" : "bg-white"}`}>
      <Home />
    </div>
  );
}

export default App;
