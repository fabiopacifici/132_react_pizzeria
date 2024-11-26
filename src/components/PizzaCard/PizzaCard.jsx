import { Link } from 'react-router-dom';
import Button from '../Button/Button';
export default function PizzaCard({ data, handleDeleteClick, children }) {

  //console.log(children);



  return (
    <div className="col">


      <div className="card bg-dark text-white position-relative">
        <form onSubmit={handleDeleteClick} data-id={data.id} className='position-absolute top-0 end-0 m-2'>

          <button className="btn btn-danger" type='submit'>
            <i className="bi bi bi-trash-fill"></i>
          </button>

        </form>

        <Link to={`/pizze/${data.id}`}>
          <img width={300} height={240} className='object-fit-cover card-img-top' src={'http://localhost:3001/' + data.image} alt="Pizza" />
        </Link>

        <div className="card-body">
          <h3>{data.name}</h3>
          <p>
            {data.description}
          </p>
          <div className='price'>€ {data.price}</div>

          {data.is_available && <Button>📌Buy now </Button>}


          {/* {data.available ? <Button /> : 'not available'} */}

          {children}

        </div>
      </div>
    </div>

  )
}