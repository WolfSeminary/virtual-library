import {Route,Routes} from "react-router-dom"
import './App.css';
import BookInfo from "./BookInfo";
function App() {
  return (

<Routes>
  <Route path="/bookInfo/:id" element={<BookInfo/>}/>
</Routes>


  );
}

export default App;
