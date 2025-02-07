import { iSuperhero } from "../interfaces/iSuperhero";

export class SuperheroService {
  async getSuperheroes() {
    const response = await fetch("http://localhost:4000/superhero");
    const data: iSuperhero[] = await response.json();
    return data;
  }
}
