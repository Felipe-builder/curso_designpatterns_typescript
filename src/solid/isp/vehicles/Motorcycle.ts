import IVehicleMotocycle from "./IVehicleMotocycle";

export default class Motorcycle implements IVehicleMotocycle {
  constructor(
    color: string,
    year: number,
    engine: number
  ) {
    this.configuration(color, year, engine);
  }

  startVehicle(): void {
      console.log('Ligando os motores');
  }

  configuration(color: string, year: number, engine: number): void {
    console.log(
      `Criando um carro:
        Cor: ${color},
        Ano: ${year},
        Motor: ${engine} Cilindradas`,
    )
    this.startVehicle();
  }
}
