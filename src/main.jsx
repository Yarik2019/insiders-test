import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "modern-normalize";
// import { Provider } from "react-redux";
// import { persistor, store } from "./redux/store";
// import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <Toaster />
  </BrowserRouter>
);

//  <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}></PersistGate>
//   </Provider>
