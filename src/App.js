import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import { Provider } from "react-redux";
import { store } from "./redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Provider>
    </div>
  );
}

export default App;
