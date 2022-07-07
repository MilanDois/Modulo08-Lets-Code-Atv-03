import { Request, Response, NextFunction } from "express";
import { LoremService } from "../../../services/LoremService";

interface LoremRequest {
  totalWords: number;
}

export class LoremController {
  #service: LoremService;

  constructor() {
    this.#service = new LoremService();
  }

  getLorem = (req: Request<LoremRequest>, res: Response, next: NextFunction) => {
    const { totalWords } = req.query;

    return res.status(200).json({
      result: this.#service.getLorem(Number(totalWords)),
    });
  };
}
