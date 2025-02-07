import { iSuperhero } from "../../interfaces/iSuperhero";
import "./SuperheroTable.css";

interface SuperheroTableProps {
  superheroes: iSuperhero[];
}

const SuperheroTable = ({ superheroes }: SuperheroTableProps) => {
  return (
    <div className="superhero-table">
      <div className="header-line">
        <span>
          <p>Name</p>
        </span>
        <span>
          <p>Power</p>
        </span>
        <span>
          <p>Humility Score</p>
        </span>
      </div>
      {superheroes.map((superhero, index) => (
        <div
          className="line"
          key={index}
        >
          <span>
            <p>{superhero.name}</p>
          </span>
          <span>
            <p>{superhero.power}</p>
          </span>
          <span>
            <p>{superhero.humilityScore}</p>
          </span>
        </div>
      ))}
    </div>
  );
};

export default SuperheroTable;
