import { iSuperhero } from "../../interfaces/iSuperhero";

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
    </div>
  );
};

export default SuperheroTable;
