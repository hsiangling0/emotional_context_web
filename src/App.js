import "./App.css";
import Home from "./Pages/home";

function App() {
  return (
    <ChakraProvider>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </ChakraProvider>
  );
}

export default App;
