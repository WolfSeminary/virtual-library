import { Route, Routes } from "react-router-dom"
import './App.css';
import BookInfo from "./BookInfo";
import Books from "./Books";
function App() {
  return (

    <Routes>
      <Route path="/bookInfo/:id" element={<BookInfo />} />
      <Route path="" element={<Books />} />
    </Routes>


  );
}

export default App;
