import AddPizzaForm from "../components/AddPizzaForm";
import Jumbotron from "../components/Jumbotron";

export default function PizzaCreatePage() {
  return (

    <>
      <Jumbotron title='Add Pizza' description='Fill the form below to add a new pizza to the menu' />

      <div className="container">
        <div className="card bg-dark p-3 text-white">
          <AddPizzaForm />
        </div>
      </div>


    </>

  )
}