import { iSuperhero } from "../interfaces/iSuperhero";

export class SuperheroService {
  async getSuperheroes() {
    const response = await fetch("http://localhost:4000/superhero");
    const data: { statusCode: number; data: iSuperhero[] } =
      await response.json();
    return data.data;
  }

  async addSuperhero(body: iSuperhero) {
    try {
      await fetch("http://localhost:4000/superhero", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      return true;
    } catch (error) {
      return false;
    }
  }
}
