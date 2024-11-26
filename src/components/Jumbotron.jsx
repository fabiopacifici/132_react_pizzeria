export default function Jumbotron({ title, description, bgImageUrl = '', children }) {


  /* 
  
      background-size: cover;
      background-blend-mode: color;
      background-color: #000000a6 !important;
  
  */

  return (
    <div className="p-5 mb-4" style={{ backgroundImage: `url(${bgImageUrl})`, backgroundSize: 'cover', backgroundColor: '#000000a6', backgroundBlendMode: 'color' }}>
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">{title}</h1>
        <p className="col-md-8 fs-4">
          {description}
        </p>
        {children}
      </div>
    </div>
  )
}