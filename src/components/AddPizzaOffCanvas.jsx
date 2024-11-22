export default function AddPizzaOffCanvas({ handleFormSubmit, formData, handleFormField }) {

  return (
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


    </div>
  )
}