import Button from '../Button/Button';
export default function PizzaCard({ data, children }) {

  //console.log(children);


  return (
    <div className="col">
      <div className="card bg-dark text-white">
        <img width={300} height={240} className='object-fit-cover card-img-top' src={data.image} alt="Pizza" />
        <div className="card-body">
          <h3>{data.name}</h3>
          <p>
            {data.description}
          </p>
          <div className='price'>€ {data.price}</div>


          {data.available && <Button>📌Buy now </Button>}


          {/* {data.available ? <Button /> : 'not available'} */}

          {children}

        </div>
      </div>
    </div>

  )
}