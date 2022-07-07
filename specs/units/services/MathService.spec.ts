import { MathService } from "../../../src/services/MathService";

describe('MathService', () => {
    it('deveria resultar 2, se comado 1 + 1', () => {
        const service = new MathService()
        const resultado = service.getSum(1, 1)
        expect(resultado).toBe(2)
    })

    it('deveria resultar 4, se comado 3 + 1', () => {
        const service = new MathService()
        const resultado = service.getSum(3, 1)
        expect(resultado).toBe(4)
    })
})