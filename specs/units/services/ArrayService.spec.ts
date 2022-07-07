import { ArrayService } from "../../../src/services/ArrayService";

describe('ArrayService coverage 100%', () => {
    
    it('Array de 5 elementos para tratar duplicatas e decrescente', () => {
        const service = new ArrayService()
        const resultado = service.getSortedArray(['Aurum', 'Boron', 'Aurum', 'Carbon', 'Boron'], true , true)
        expect(resultado).toStrictEqual(['Carbon', 'Boron', 'Aurum'])
    })

    it('Array de 5 elementos para apenas tratar duplicatas', () => {
        const service = new ArrayService()
        const resultado = service.getSortedArray(['Aurum', 'Boron', 'Aurum', 'Carbon', 'Boron'], false , true)
        expect(resultado).toStrictEqual(['Aurum', 'Boron', 'Carbon'])
    })

    it('Array de 5 elementos para tornar decrescente', () => {
        const service = new ArrayService()
        const resultado = service.getSortedArray(['Aurum', 'Boron', 'Aurum', 'Carbon', 'Boron'], true , false)
        expect(resultado).toStrictEqual(['Carbon', 'Boron', 'Boron', 'Aurum', 'Aurum'])
    })

    it('Array de 5 elementos para tornar crescente', () => {
        const service = new ArrayService()
        const resultado = service.getSortedArray(['Aurum', 'Boron', 'Aurum', 'Carbon', 'Boron'], false , false)
        expect(resultado).toStrictEqual(['Aurum', 'Aurum', 'Boron', 'Boron', 'Carbon'])
    })
})