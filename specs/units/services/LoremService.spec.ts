import { LoremService } from "../../../src/services/LoremService";

describe('LoremService tests, 100% coverage', () => {
    it('Num request de 25 gerará 25 palavras aleatórias', () => {
        const service = new LoremService()
        const resultado = service.getLorem(25)
        expect(resultado.split(' ').length).toBe(25)
    })

    it('Num request de -1 retornará: You don\'t need our services.', () => {
        const service = new LoremService()
        const resultado = service.getLorem(-1)
        expect(resultado).toStrictEqual('You don\'t need our services.')
    })
})