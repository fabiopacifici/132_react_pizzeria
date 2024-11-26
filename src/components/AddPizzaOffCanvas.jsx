import AddPizzaForm from "./AddPizzaForm";

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

      <AddPizzaForm handleFormField={handleFormField} formData={formData} handleFormSubmit={handleFormSubmit} />

    </div>
  )
}