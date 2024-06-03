import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./store/store";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Comics from "./pages/Comics";
import Events from "./pages/Events";
import Series from "./pages/Series";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/comics" element={<Comics />} />
      <Route path="/events" element={<Events />} />
      <Route path="/series" element={<Series />} />
    </Route>
  )
);

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
