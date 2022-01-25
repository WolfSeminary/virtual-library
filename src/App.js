import {Route,Routes} from "react-router-dom"
import './App.css';
function App() {
  return (
<>
<Routes>
  <Route path="/bookInfo/:id" element={<BookInfo/>}/>
</Routes>
</>

  );
}

export default App;
