import { Request, Response, NextFunction } from "express";
import { CPFService } from "../../../services/CPFService";

interface CPFRequest {
  cpf: string;
}

export class CPFController {
  #service: CPFService;

    constructor() {
        this.#service = new CPFService();
    }

    generateCPF = (req: Request, res: Response, next: NextFunction) => {
        return res.status(201).json({
            result: this.#service.generateCPF(),
        });
    }

    checkCPF = (req: Request<CPFRequest>, res: Response, next: NextFunction) => {
        const { cpf } = req.query;

        return res.status(200).json({
            result: this.#service.checkCPF(String(cpf)),
        });
    };
}
