import Card from "./Card";

function Tours(props){
  return (
    <div className="container">
      <div>
        <h2 className="title">Plan with Love</h2>
      </div>
      <div className="cards">
        {
          props.tours.map((tour) =>{
            return <Card key = {tour.id} {...tour} removeTour = {props.removeTour}></Card>
          })
        }
      </div>

    </div>
  )
}

export default Tours;