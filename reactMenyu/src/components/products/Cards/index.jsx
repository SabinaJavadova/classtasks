import controller from "../../../services";
import { endpoints } from "../../../services/constant";

const Cards = ({ recipes, setRecipes }) => {
  return (
    <div className="container">
      <h1>Recipes</h1>
      <div className="cards">
        {recipes &&
          recipes.map((r) => {
            return (
              <div className="card" key={r.id}>
                <img src={r.image} alt="" width={100} />
                <h4>{r.name}</h4>
                <h5>{r.rating}</h5>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Cards;
