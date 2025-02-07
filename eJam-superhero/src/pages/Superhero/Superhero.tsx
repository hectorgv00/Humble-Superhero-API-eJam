import { useEffect, useState } from "react";
import "./Superhero.css";
import { SuperheroService } from "../../services/superhero.service";
import SuperheroTable from "../../components/SuperheroTable/SuperheroTable";
import { iSuperhero } from "../../interfaces/iSuperhero";

export const Superhero = () => {
  const superheroService = new SuperheroService();

  const [superheroes, setSuperheroes] = useState<iSuperhero[]>([]);

  useEffect(() => {
    obtainSuperheroes();
  }, []);

  const obtainSuperheroes = async () => {
    const obtainedSuperheroes = await superheroService.getSuperheroes();
    console.log(obtainedSuperheroes);
    setSuperheroes(obtainedSuperheroes);
  };

  return (
    <div id="superhero">
      <SuperheroTable superheroes={superheroes} />
    </div>
  );
};

export default Superhero;
