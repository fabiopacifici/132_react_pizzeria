import Jumbotron from "../components/Jumbotron"
export default function ContactsPage() {

  const pageTitle = "Get in touch"
  const pageDescription = "We will get back to you in a jiffy"


  return (
    <>

      <Jumbotron title={pageTitle} description={pageDescription} />

      <section className="contact-details">
        <div className="container">
          <h3>Our Contacts</h3>

          <ul className="list-unstyled">
            <li>
              <strong>Email:</strong> <a href="to:mark-pizzaman@react-pizzeria.com"> Email us</a>
            </li>
            <li>
              <strong>Pinterest:</strong> <a href=""> <i className="bi bi-pinterest"></i>Piterest</a>
            </li>
            <li>
              <strong>Youtube:</strong> <a href=""> <i className="bi bi-youtube"></i> YouTube</a>
            </li>
          </ul>
        </div>
      </section>

    </>
  )
}