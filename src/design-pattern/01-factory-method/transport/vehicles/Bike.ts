import IVehicle from "./interfaces/IVehicle";

export default class Bike implements IVehicle {
  startRoute(): void {
      this.getCarga();
      console.log("Iniciamos a entrega...");
  }

  getCarga(): void {
      console.log("Já pegamos a encomenda!");
  }

}