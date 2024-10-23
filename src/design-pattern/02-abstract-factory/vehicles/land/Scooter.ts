import ILandVehicle from "./interfaces/ILandVehicle";

export default class Scooter implements ILandVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Iniciando a trajetória...")
  }
  getCargo(): void {
    console.log("Conseguimos pegar a encomenda!")
  }
}