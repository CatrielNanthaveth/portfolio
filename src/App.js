import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Layout } from "./Components";

import { Home } from "./Pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
