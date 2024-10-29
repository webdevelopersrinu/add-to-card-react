import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CardContextProvider } from "./context/cardContext";
const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CardContextProvider>
      <App />
    </CardContextProvider>
  </BrowserRouter>
);
