import Jumbotron from "../components/Jumbotron"
import markPizzaMan from '/mark.jpeg'

export default function HomePage() {


  const pageTitle = "Best pizza in town"
  const pageDescription = "Our pizza is the best pizza you will ever taste"

  return (
    <>
      <Jumbotron title={pageTitle} description={pageDescription} />


      <div className="pizza-man">
        <div className="container">

          <div className="card align-items-center justify-content-center">
            <img width={140} className="rounded-circle" src={markPizzaMan} alt="" />
            <div className="intro text-center">
              <h3 className="my-3">Mark Pizzaman</h3>
              <p>Hi, I am mark your expert pizzaman</p>
            </div>


          </div>
        </div>
      </div>


    </>
  )
}