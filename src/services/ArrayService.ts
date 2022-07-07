export class ArrayService {
    constructor() {}
  
    getSortedArray = (text: Array<string>, dec: boolean, noDupes: boolean) => {
        let preliminaryText = text
        if (noDupes) {
            preliminaryText = [...new Set(text)]
        }
        preliminaryText = preliminaryText.sort()
        
        if  (dec) {
            preliminaryText = preliminaryText.reverse()
        }
        return preliminaryText
    };
}