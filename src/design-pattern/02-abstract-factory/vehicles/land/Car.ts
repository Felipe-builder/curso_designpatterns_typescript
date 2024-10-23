import ILandVehicle from "./interfaces/ILandVehicle";

export default class Car implements ILandVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Iniciando o trageto...")
  }
  getCargo(): void {
    console.log("Pegamos os Passageiros, estamos prontos")
  }
}