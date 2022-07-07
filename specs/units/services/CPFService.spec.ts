import { CPFService } from "../../../src/services/CPFService";

describe ("CPFService test, 100% coverage", () => {
    let service: CPFService

    it ("Deve iniciar corretamente a classe CPFService", () => {
        service = new CPFService()

        expect(service).toBeTruthy()
    })

    it ("Deve gerar corretamente CPFs válidos", () => {
        for (let index = 0; index < 30; index++) {
            const cpf = service.generateCPF() //999.999.999-99
            const cpfValido = service.checkCPF(cpf) // "Esse é um CPF válido." / "Esse é um CPF inválido!"
            
            expect(cpf).toHaveLength(14)
            expect(cpfValido).toStrictEqual("Esse é um CPF válido.")
        }
    })

    it.each([
        { cpf: '308.347.704-07', resultado: "Esse é um CPF válido." },
        { cpf: '30834770407', resultado: "Esse é um CPF válido." },
        { cpf: '849.828.930-05', resultado: "Esse é um CPF inválido!" },
        { cpf: '24686441315', resultado: "Esse é um CPF válido." },
        { cpf: 'awd.fwd.rwd-2d', resultado: "Esse é um CPF inválido!" },
        { cpf: '444.444.444-44', resultado: "Esse é um CPF inválido!" },
        { cpf: '849.828.930-0', resultado: "Esse é um CPF inválido!" },
        { cpf: '849.828.930-093', resultado: "Esse é um CPF inválido!" },
        { cpf: '246>561.495*94', resultado: "Esse é um CPF inválido!" }
      ])
      ('Deve retornar corretamente se o CPF é valido ou não $cpf', ({ cpf, resultado }) => {
        const cpfValido = service.checkCPF(cpf)
    
        expect(cpfValido).toStrictEqual(resultado)
      })
    
      it ('Não deve estourar erro ao executar o método de gerar CPF', () => {
        expect(() => service.generateCPF()).not.toThrow()
      })
      
      it.each([
        { cpf: '308.347.704-07', resultado: "Esse é um CPF válido." },
        { cpf: '30834770407', resultado: "Esse é um CPF válido." },
        { cpf: '849.828.930-05', resultado: "Esse é um CPF inválido!" },
        { cpf: '24686441315', resultado: "Esse é um CPF válido." },
        { cpf: 'awd.fwd.rwd-2d', resultado: "Esse é um CPF inválido!" },
        { cpf: '444.444.444-44', resultado: "Esse é um CPF inválido!" },
        { cpf: '849.828.930-0', resultado: "Esse é um CPF inválido!" },
        { cpf: '849.828.930-093', resultado: "Esse é um CPF inválido!" },
        { cpf: '246>561.495*94', resultado: "Esse é um CPF inválido!" },
        { cpf: '015.875.503-00', resultado: "Esse é um CPF válido." },
        { cpf: '545.353.105-30', resultado: "Esse é um CPF válido." }
      ])
      ('Não deve estourar erro ao executar o metodo de validar CPF', ({ cpf, resultado }) => {
        expect(() => service.checkCPF(cpf)).not.toThrow()
      })

      it ('Deve retornar erro, quando passada uma string vazia', () => {
        expect(() => service.checkCPF('')).toThrow('Não foi informado nenhum CPF!')
      })

})