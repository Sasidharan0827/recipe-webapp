import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SavedRecipe from "./pages/SavedRecipe";
import CuratedResults from "./pages/CuratedResults";
import RecipeMethod from "./pages/RecipeMethod";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <SavedRecipe />
      <CuratedResults />
      <RecipeMethod />
    </>
  );
}

export default App;
