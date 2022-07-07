export class LoremService {
    wordsRep: string[]
    constructor() {
    this.wordsRep = ['chiwetel', 'ejiofor', 'mahershala', 'ali', 'chadwick', 'boseman', 'forest',
    'whitaker','idris', 'elba', 'djimon', 'hounsou', 'omar', 'epps', 'laurence', 'fishburne',
    'tyrese', 'gibson', 'james','earl', 'jones']
    }

    addWord = (array: string[]) => {
        if (array.length == 0) {
            const idx = Math.floor(Math.random() * (this.wordsRep.length))
            return this.wordsRep[idx]
        }
        const last = array[(array.length - 1)]
        const bank = this.wordsRep.filter(nome => nome != last)
        const idx = Math.floor(Math.random() * (bank.length))
        return bank[idx]
    }

    getPunctuation = (array: string[]) => {
        let targetLength = array.length
        while (targetLength > 0) {
            targetLength -= Math.floor(Math.random() * (8 - 1 + 1) + 1)
            if (targetLength < 0) break
            array[targetLength] = array[targetLength] + '.'
        }
        if (!array[array.length - 1].includes('.')) {
            array[array.length - 1] = array[array.length - 1] + '.'
        }
        return array
    }

    getFirstUpper = (array: string[]) => {
        array[0] = array[0].charAt(0).toUpperCase() + array[0].slice(1);
    }

    getCorrectUppers = (array: string[]) => {
        for (let i = 1; i < array.length - 1 ; i++) {
            if (array[i - 1].includes('.')) {
                array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
            }
        }
        return array
    }
    
    getLorem = (totalWords: number) => {
        if (totalWords <= 0) {
            return 'You don\'t need our services.'
        }
        let result: string[] = []
        for (let i = 0; i < totalWords; i++) {
            result.push(this.addWord(result))
        }
        this.getPunctuation(result)
        this.getFirstUpper(result)
        this.getCorrectUppers(result)
        
        return result.join(' ')
    }
}
