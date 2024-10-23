import Client from "./vehicles/client/Client";
import Company from "./vehicles/consts/Company";
import ITransportFactory from "./vehicles/factories/interfaces/ITransportFactory";
import LineTransport from "./vehicles/factories/LineTransport";
import NineNineTransport from "./vehicles/factories/NineNineTransport";
import UberTransport from "./vehicles/factories/UberTransport";


const currentCompany = Company.LINE;
let factory: ITransportFactory;

switch (currentCompany) {
  case Company.UBER:
    factory = new UberTransport();
    break
  case Company.NINENINE:
    factory = new NineNineTransport();
    break
  case Company.LINE:
    factory = new LineTransport();
    break
  default:
    console.error("Desconhecida!")
}

const cliet = new Client(factory);

cliet.startRoute();