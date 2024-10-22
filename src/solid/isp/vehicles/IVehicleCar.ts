import IVehicle from "./IVehicle";

export default interface IVehicleCar extends IVehicle {
  configuration(color: string, year: number, engine: number, seats: number, doors: number): void;
}