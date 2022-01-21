import {useNavigate} from "react-router-dom";

export default function BacktoBooks() {
    let navigate=useNavigate();
    const goToBook=()=>{
        navigate("-1");
    }  
  
    return (
        <div>
            <button onClick={goToBook}>back to Books</button>
        </div>
    )
}