export default interface IvehicleMotorcycle {
  startVehicle(): void;
  configure(
    color: string,
    year: number,
    engine: number,
  ): void;
}