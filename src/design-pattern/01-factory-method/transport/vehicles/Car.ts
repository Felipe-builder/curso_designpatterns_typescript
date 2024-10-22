import IVehicle from "./interfaces/IVehicle";

export default class Car implements IVehicle {

  startRoute(): void {
    this.getCarga()
    console.log("Iniciando o trajeto...");
  }
  getCarga(): void {
    console.log("Pegamos os passageiros, estamos prontos!");
  }

}