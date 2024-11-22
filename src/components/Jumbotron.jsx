export default function Jumbotron({ pageTitle, pageDescription }) {


  return (
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
  )
}