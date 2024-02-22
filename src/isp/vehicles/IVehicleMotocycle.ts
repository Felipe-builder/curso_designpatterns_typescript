import IVehicle from "./IVehicle";

export default interface IVehicleMotocycle extends IVehicle {
  configuration(color: string, year: number, engine: number): void;
}