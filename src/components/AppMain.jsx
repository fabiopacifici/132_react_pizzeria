import { useState } from 'react';
import PizzaCard from './PizzaCard/PizzaCard';
import pizze from '../data/pizze.js'

const initialFormData = {
  name: '',
  description: '',
  price: 0,
  image: '',
  available: false
}

export default function AppMain() {

  const [formData, setFormData] = useState(initialFormData)
  const [menu, setMenu] = useState(pizze)
  const pageTitle = 'Pizzeria Menu';
  const pageDescription = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsum dignissimos rem saepe repellendus nulla blanditiis vel, debitis nihil deleniti, dolorum quaerat nam veritatis dolor ratione reprehenderit ab? Alias, necessitatibus?';


  //console.log(pizze);

  function handleFormSubmit(e) {
    e.preventDefault()
    console.log('Form sent', formData);
    const newItem = {
      id: Date.now(),
      ...formData
    }
    console.log(newItem);

    setMenu([
      newItem,
      ...menu
    ])

    setFormData(initialFormData)
  }

  function handleFormField(e) {
    //console.log(e.target);

    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

    setFormData({
      ...formData,
      [e.target.name]: value
    })
  }


  return (
    <main>
      {/* Jumbotron */}
      <div className="p-5 mb-4 bg-dark">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">{pageTitle}</h1>
          <p className="col-md-8 fs-4">
            {pageDescription}
          </p>
          <button className="btn btn-primary btn-lg" type="button" popovertarget="off-canvas-form">
            <i className="bi bi-plus"></i> Add
          </button>
        </div>
      </div>


      {/* Form Offcanvas */}
      <div id="off-canvas-form" popover="true" className='bg-dark p-3 border-0 shadow-lg text-white' style={{ minHeight: "100dvh" }}>
        <div className="d-flex justify-content-between align-items-center">
          <h3>Add a new Pizza</h3>
          <button className="btn btn-dark" type="button" popovertarget="off-canvas-form" popovertargetaction="hide">
            <i className="bi bi-x"></i> Close
          </button>
        </div>
        <p>Use the form below to add a new pizza item to your menu</p>


        {/* Form Here */}

        <form onSubmit={handleFormSubmit}>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              aria-describedby="namehelper"
              placeholder="Margherita"
              required
              value={formData.name}
              onChange={handleFormField}
            />
            <small id="namehelper" className="form-text text-muted">Type the name of your pizza</small>
          </div>

          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image</label>
            <input
              type="text"
              className="form-control"
              name="image"
              id="image"
              aria-describedby="imagehelper"
              placeholder="/images/1.jpg"
              value={formData.image}
              onChange={handleFormField}

            />
            <small id="imagehelper" className="form-text text-muted">Type the image path of your pizza</small>
          </div>

          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input
              type="number"
              step={0.1}
              className="form-control"
              name="price"
              id="price"
              aria-describedby="pricehelper"
              placeholder="9.99"
              required
              value={formData.price}
              onChange={handleFormField}

            />
            <small id="pricehelper" className="form-text text-muted">Type the price of your pizza</small>
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>

            <textarea
              className="form-control"
              name="description"
              id="description"
              rows="5"
              value={formData.description}
              onChange={handleFormField}
            ></textarea>
          </div>


          <div className="form-check mb-3">
            <input
              id="available"
              name='available'
              type="checkbox"
              className="form-check-input"
              value={formData.available}
              onChange={handleFormField}

            />
            <label className="form-check-label" htmlFor=""> Available </label>
          </div>


          <button
            type="submit"
            className="btn btn-secondary"
          >
            <i className="bi bi-floppy"></i> Save
          </button>



        </form>




      </div>


      <div className="container">

        <section className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {/* Add pizza cards here  */}

          {/*           {pizze.map(pizza => <PizzaCard key={pizza.id} name={pizza.name} image={pizza.image} description={pizza.description} price={pizza.price} />)} */}


          {menu.map(pizza => <PizzaCard key={pizza.id} data={pizza}> <p>{pizza.available ? 'Available' : 'Not Available'}</p> </PizzaCard>)}




          {/*  <PizzaCard name="Margherita Veg" image="/images/1.jpg" description="Pizza margherita vegana con mozzarella" price="7" />


          <PizzaCard name="Diavola Veg" image="/images/2.webp" description="Pizza diavola vegana" price="8" /> */}



          {/*           <PizzaCard data={pizze[0]}>

            <p>Fabio was here</p>

          </PizzaCard> */}



        </section>


      </div>
    </main>
  )
}