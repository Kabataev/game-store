import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import GamePage from "./components/GamePage/GamePage";
import { Provider } from "react-redux";
import { store } from "./redux";
import OrderPage from "./components/OrderPage/OrderPage";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route  path="/app/:title" element={<GamePage />} />
            <Route  path="/order" element={<OrderPage/>} />
          </Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
