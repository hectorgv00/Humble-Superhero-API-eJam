import { iSuperhero } from "../interfaces/iSuperhero";

export class SuperheroService {
  async getSuperheroes() {
    const response = await fetch(
      "https://humble-superhero-api.hectorgv00.online/"
    );
    const data: { statusCode: number; data: iSuperhero[] } =
      await response.json();
    return data.data;
  }

  async addSuperhero(body: iSuperhero) {
    try {
      await fetch("https://humble-superhero-api.hectorgv00.online/", {
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
