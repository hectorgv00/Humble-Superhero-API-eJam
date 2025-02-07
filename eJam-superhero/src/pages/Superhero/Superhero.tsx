import { useEffect, useRef, useState } from "react";
import "./Superhero.css";
import { SuperheroService } from "../../services/superhero.service";
import SuperheroTable from "../../components/SuperheroTable/SuperheroTable";
import { iSuperhero } from "../../interfaces/iSuperhero";
import Modal from "../../components/Modal/Modal";

export const Superhero = () => {
  const superheroService = new SuperheroService();

  const [superheroes, setSuperheroes] = useState<iSuperhero[]>([]);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    obtainSuperheroes();
  }, []);

  const obtainSuperheroes = async () => {
    const obtainedSuperheroes = await superheroService.getSuperheroes();
    console.log(obtainedSuperheroes);
    setSuperheroes(obtainedSuperheroes);
  };

  const onSubmitModal = async (body: iSuperhero) => {
    console.log(body);
    const superheroReturn = await superheroService.addSuperhero(body);

    if (superheroReturn) obtainSuperheroes();
  };

  const switchModal = () => {
    console.log(modalRef);
    if (modalRef.current) {
      modalRef.current.classList.toggle("closed");
    }
  };

  return (
    <div id="superhero">
      <div className="button-ad-line">
        <button onClick={switchModal}>Add superhero</button>
      </div>

      <SuperheroTable superheroes={superheroes} />
      <Modal
        ref={modalRef}
        onSubmitModal={onSubmitModal}
      />
    </div>
  );
};

export default Superhero;
