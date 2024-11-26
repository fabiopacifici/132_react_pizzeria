/* 
before refactoring:
Props drilling from AppMain
export default function AddPizzaForm({ handleFormSubmit, formData, handleFormField }) {

after:
*/

import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function AddPizzaForm() {
  const initialFormData = {
    name: '',
    description: '',
    price: 0,
    image: '',
    is_available: false
  }
  const [formData, setFormData] = useState(initialFormData) /* ✅ <-- need this */
  const navigate = useNavigate()

  function handleFormSubmit(e) {
    e.preventDefault()
    //console.log('Form sent', formData);
    const newItem = {
      id: Date.now(),
      ...formData
    }
    console.log(newItem);

    // make a post request to the api serve and pass over the newItem object to the setMenu state setter
    fetch('http://localhost:3001/pizze', {
      method: 'POST',
      body: JSON.stringify(newItem),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(response => {
        console.log('Success:', response)

        // Cannot do that here (redirect to  pizza list page 💥)
        //setMenu(response.data)
        navigate('/pizze')
      })
      .catch(error => console.error('Error:', error));


    /* setMenu([
      newItem,
      ...menu
    ]) */

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
          id="is_available"
          name='is_available'
          type="checkbox"
          className="form-check-input"
          value={formData.is_available}
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
  )


}