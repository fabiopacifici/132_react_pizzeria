import { Link } from "react-router-dom"
import Jumbotron from "../components/Jumbotron"
import markPizzaMan from '/mark.jpeg'
export default function AboutPage() {

  const pageTitle = "About React Pizzeria"
  const pageDescription = "Find out more about us"

  return (
    <>
      <Jumbotron title={pageTitle} description={pageDescription} />

      <section className="about-us">
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={markPizzaMan} alt="" />
            </div>
            <div className="col">
              <h3>Our Company</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod praesentium aperiam non soluta facilis, ipsam nihil quibusdam, eaque excepturi, ab molestiae fugit quas maiores obcaecati totam voluptatibus officiis veritatis. Illo.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, tempora consectetur ad minus aspernatur delectus possimus veniam nostrum quos, reprehenderit maxime tenetur vel ipsum dolorum distinctio quis at a commodi iusto consequatur? Voluptatum asperiores similique expedita dignissimos quo hic delectus quae eveniet consequatur, impedit odio totam perspiciatis nam temporibus ex!

              </p>
              <Link className="btn btn-primary" to="/contacts" > Get in touch </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}