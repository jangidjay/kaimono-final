import Pay from "./Pay";
import Success from "./Success";
import { BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/pay" element={<Pay />} />
        <Route exact path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// "1.51.14"