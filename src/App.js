import Hero from "./components/hero";
import Nav from "./components/nav";
import Carousell from "./components/carousell";
import Aparatur from "./components/aparatur";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div>
        <Nav />
        <Hero />
        <Carousell />
        {/* <Aparatur /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
