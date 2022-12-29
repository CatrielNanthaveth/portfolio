import { Route, Routes, BrowserRouter } from "react-router-dom";

import { Home } from "./Pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" exact element={<Home />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
