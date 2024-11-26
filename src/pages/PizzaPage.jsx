import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";

import Jumbotron from "../components/Jumbotron";
export default function PizzaPage() {

  const navigate = useNavigate()
  const [pizza, setPizza] = useState(null)
  const { id } = useParams();
  const url = `http://localhost:3001/pizze/${id}`
  console.log(url);


  // fetch the data from our pizza endpoint
  useEffect(
    () => {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log(data);

          const keys = Object.keys(data)
          console.log(keys);
          if (keys.includes('error')) {
            // redirct to a 404
            navigate('/404')

          } else {
            // check if there are no errors 
            // then set the pizza
            setPizza(data.data)

          }


          // otherwise 
          //redirect the user to a 404 page

        })
        .catch(err => {
          console.log(err);
        })
    },
    [])


  return (
    <>

      {
        pizza ? (

          <div>

            <Jumbotron title={pizza.name} description={pizza?.description} bgImageUrl={`http://localhost:3001/${pizza.image}`} />

            <section className="pizza_details">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="card border-0 rounded-4 shadow-lg">
                      <img className="card-img-top rounded-4" src={`http://localhost:3001/${pizza.image}`} alt="" />
                    </div>
                  </div>
                  <div className="col">
                    <h3>{pizza.name}</h3>
                    <div>
                      <p>
                        {pizza.description}
                      </p>
                      <div className="price">€{pizza.price}</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>


          </div>
        ) : (
          <div>loading...</div>

        )
      }
    </>
  )
}