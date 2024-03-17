import Navbar from "./component/Navbar"
import Explore from "./component/Explore"
import Recipes from "./component/Recipes"
import Footer from "./component/Footer";
import "./App.css";

function App() {


  return (
    <>
        <header className="mx-28 mt-3">
          <Navbar></Navbar>
          <div className="mt-5">
          <Explore></Explore>
          </div>
        </header>
        <main>
          <Recipes></Recipes>

        </main>
        <footer>
          <Footer></Footer>
        </footer>
    </>
  );
}

export default App;
