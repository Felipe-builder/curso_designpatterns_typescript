import IAircraft from "./interfaces/IAircraft";

export default class Drone implements IAircraft {
  startRoute(): void {
    this.checkWind();
    this.getCargo();
    console.log("Iniciando o voo...")
  }
  getCargo(): void {
    console.log("Pegamos a carga, estamos prontos.")
  }
  checkWind(): void {
    console.log("Ventos a 25km, Leste, ventos ok!")
  }

}