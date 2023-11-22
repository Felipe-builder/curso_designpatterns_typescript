import IvehicleMotorcycle from "./IvehicleMotorcycle";

export default class Motorcycle implements IvehicleMotorcycle {

  constructor(
    color: string,
    year: number,
    engine: number,
  ) {
    this.configure(color, year, engine,)
  }

  startVehicle(): void {
    console.log('Ligando os motores')
  }
  configure(color: string, year: number, engine: number): void {
    console.log(
      `Criando um carro:
        Cor: ${color},
        Ano: ${year},
        Motor: ${engine} potência`
    )
    this.startVehicle();
  }

}