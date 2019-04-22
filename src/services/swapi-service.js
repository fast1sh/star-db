export default class SwapiService {

  constructor() {
    this._baseUrl = 'https://swapi.co/api';
    this._baseImageUrl = 'https://starwars-visualguide.com/assets/img';
  }

  getResource = async (url) => {
    const res = await fetch(`${this._baseUrl}${url}`);

    if (!res.ok) {
      throw new Error('Error');
    }

    return res.json();
  }

  getAllPeople = async () => {
    const res = await this.getResource('/people/');

    return res.results.map(this._transformPerson);
  }

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}`);

    return this._transformPerson(person);
  }

  getAllPlanets = async () => {
    const res = await this.getResource('/planets/');

    return res.results.map(this._transformPlanet);
  }

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}`);

    return this._transformPlanet(planet);
  }

  getAllStarships = async () => {
    const res = await this.getResource('/starships/');

    return res.results.map(this._transformStarship);
  }

  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}`);

    return this._transformStarship(starship);
  }

  getPersonImage = ({id}) => {
    return `${this._baseImageUrl}/characters/${id}.jpg`;
  }

  getPlanetImage = ({ id }) => {
    return `${this._baseImageUrl}/planets/${id}.jpg`;
  }

  getStarshipImage = ({ id }) => {
    return `${this._baseImageUrl}/starships/${id}.jpg`;
  }


  _getId = (url) => {
    const regExp = /\/([0-9]*)\/$/;

    return url.match(regExp)[1];
  }

  _transformPerson = ({ name, gender, birth_year: birthYear, eye_color: eyeColor, url }) => {
    const id = this._getId(url);

    return {
      id, name, gender, birthYear, eyeColor
    }
  }

  _transformPlanet = ({ name, population, rotation_period: rotationPeriod, diameter, url }) => {
    const id = this._getId(url);

    return {
      id, name, population, rotationPeriod, diameter
    }
  }

  _transformStarship = ({ name, model, manufacturer, cost_in_credits: costInCredits, length, crew, passengers, cargo_capacity: cargoCapacity, url }) => {
    const id = this._getId(url);

    return {
      id, name, model, manufacturer, costInCredits, length, crew, passengers, cargoCapacity
    }
  }

}