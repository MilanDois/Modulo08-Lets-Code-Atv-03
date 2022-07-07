import { Request, Response, NextFunction } from "express";
import { ArrayService } from "../../../services/ArrayService";

interface ArrayRequest {
  text: Array<string>;
  dec: boolean;
  noDupes: boolean;
}

export class ArrayController {
  #service: ArrayService;

  constructor() {
    this.#service = new ArrayService();
  }

  getSortedArray = (req: Request<ArrayRequest>, res: Response, next: NextFunction) => {
    const { text, dec, noDupes } = req.query;

    return res.status(200).json({
        result: this.#service.getSortedArray(text as string[], Boolean(dec), Boolean(noDupes)),
    });
  };
}
