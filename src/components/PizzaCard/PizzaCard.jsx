import Button from '../Button/Button';
export default function PizzaCard({ data, children }) {

  console.log(children);


  return (
    <div className="pizza-card">
      <img src={data.image} alt="Pizza" />
      <div className="details">
        <h3>{data.name}</h3>
        <p>
          {data.description}
        </p>
        <div className='price'>€ {data.price}</div>


        {data.available && <Button>📌Buy now </Button>}


        {data.available ? <Button /> : 'not available'}

        {children}

      </div>
    </div>

  )
}