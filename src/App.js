import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import PetDetails from "./pages/PetDetails";
import Pets from "./pages/Pets";

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/pets' element={<Pets />} />
        <Route path='/petDetails/:id' element={<PetDetails />} />
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    </>
  );
}

export default App;
