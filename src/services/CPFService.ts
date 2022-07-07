export class CPFService {
    constructor() {}
    
    #deMask = (inputStr: string) => {
        const demasked = []
        demasked[0] = inputStr.charAt(0)
        demasked[1] = inputStr.charAt(1)
        demasked[2] = inputStr.charAt(2)
        demasked[3] = inputStr.charAt(4)
        demasked[4] = inputStr.charAt(5)
        demasked[5] = inputStr.charAt(6)
        demasked[6] = inputStr.charAt(8)
        demasked[7] = inputStr.charAt(9)
        demasked[8] = inputStr.charAt(10)
        demasked[9] = inputStr.charAt(12)
        demasked[10] = inputStr.charAt(13)
        return demasked.join('')
    }

    #toMask = (inputStr: string) => {
        const masked = []
        masked[0] = inputStr.charAt(0)
        masked[1] = inputStr.charAt(1)
        masked[2] = inputStr.charAt(2)
        masked[3] = '.'
        masked[4] = inputStr.charAt(3)
        masked[5] = inputStr.charAt(4)
        masked[6] = inputStr.charAt(5)
        masked[7] = '.'
        masked[8] = inputStr.charAt(6)
        masked[9] = inputStr.charAt(7)
        masked[10] = inputStr.charAt(8)
        masked[11] = '-'
        masked[12] = inputStr.charAt(9)
        masked[13] = inputStr.charAt(10)
        return masked.join('')
    }
    
    #inputToNumber = (inputStr: string) => {
        const numberArray = []
        numberArray[0] = Number(inputStr.charAt(0))
        numberArray[1] = Number(inputStr.charAt(1))
        numberArray[2] = Number(inputStr.charAt(2))
        numberArray[3] = Number(inputStr.charAt(4))
        numberArray[4] = Number(inputStr.charAt(5))
        numberArray[5] = Number(inputStr.charAt(6))
        numberArray[6] = Number(inputStr.charAt(8))
        numberArray[7] = Number(inputStr.charAt(9))
        numberArray[8] = Number(inputStr.charAt(10))
        numberArray[9] = Number(inputStr.charAt(12))
        numberArray[10] = Number(inputStr.charAt(13))
        return numberArray
    }

    #allTheSameCheck = (inputStr: string) => {
        let failed = true
        for (let i = 0; i < inputStr.length; i++) {
            if (inputStr.charAt(0) != inputStr.charAt(i)) {
                failed = false
                break
            } 
        }
        return failed
    }
    
    checkCPF = (inputStr: string) => {
        if (!inputStr) {
            throw new Error('Não foi informado nenhum CPF!')
        }
        
        const sLength = inputStr.length

        if (sLength != 11 && sLength != 14) {
            return 'Esse é um CPF inválido!'
        }

        if (sLength == 14) {
            if (inputStr.charAt(3) != '.' ||
                inputStr.charAt(7) != '.' ||
                inputStr.charAt(11) != '-') {
                return 'Esse é um CPF inválido!'
            }
        }

        const numberEq = (sLength == 14 ? 
            this.#inputToNumber(inputStr) : 
            this.#inputToNumber(this.#toMask(inputStr)))

        const deMaskedEq = (
            sLength == 14 ?
            this.#deMask(inputStr) :
            inputStr
            )
        
        const tempVD1 = (
            numberEq[0] * 10 + numberEq[1] * 9 + numberEq[2] * 8 + numberEq[3] * 7 +
            numberEq[4] * 6 + numberEq[5] * 5 + numberEq[6] * 4 + numberEq[7] * 3 +
            numberEq[8] * 2
        ) * 10 % 11

        const firstVD = (tempVD1 === 10 ? 0 : tempVD1)

        const tempVD2 = (
            numberEq[0] * 11 + numberEq[1] * 10 + numberEq[2] * 9 + numberEq[3] * 8 +
            numberEq[4] * 7 + numberEq[5] * 6 + numberEq[6] * 5 + numberEq[7] * 4 +
            numberEq[8] * 3 + firstVD * 2
        ) * 10 % 11
        
        const secondVD = (tempVD2 === 10 ? 0 : tempVD2)
            
        if (numberEq[9] === firstVD &&
            numberEq[10] === secondVD &&
            !this.#allTheSameCheck(deMaskedEq)) {
            return 'Esse é um CPF válido.'
        }
        return 'Esse é um CPF inválido!'
    }
    #randomIntD = () => {
        return Math.floor(Math.random() * 10)
    }

    generateCPF = () => {
        const generated = []
        generated[0] = this.#randomIntD()
        generated[1] = this.#randomIntD()
        generated[2] = this.#randomIntD()
        generated[3] = '.'
        generated[4] = this.#randomIntD()
        generated[5] = this.#randomIntD()
        generated[6] = this.#randomIntD()
        generated[7] = '.'
        generated[8] = this.#randomIntD()
        generated[9] = this.#randomIntD()
        generated[10] = this.#randomIntD()
        generated[11] = '-'

        const tempGenerated12 = (
            generated[0] * 10 + generated[1] * 9 + generated[2] * 8 + generated[4] * 7 +
            generated[5] * 6 + generated[6] * 5 + generated[8] * 4 + generated[9] * 3 +
            generated[10] * 2
        ) * 10 % 11
        generated[12] =(tempGenerated12 === 10 ? 0 : tempGenerated12)

        const tempGenerated13 = (
            generated[0] * 11 + generated[1] * 10 + generated[2] * 9 + generated[4] * 8 +
            generated[5] * 7 + generated[6] * 6 + generated[8] * 5 + generated[9] * 4 +
            generated[10] * 3 + generated[12] * 2
        ) * 10 % 11
        generated[13] = (tempGenerated13 === 10 ? 0 : tempGenerated13)
        
        const CPF = generated.join('')
        return CPF
    }
}