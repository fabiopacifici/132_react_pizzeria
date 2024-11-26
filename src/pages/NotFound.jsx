import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";

export default function NotFound() {
  return (

    <Jumbotron title="🥲 404 Not found" description="Sorry, could not find what your are looking for">
      <Link to='/' className="btn btn-primary" >Back to Home</Link>
    </Jumbotron>

  )
}

