import Identity from "./identity"

export default class Id extends Identity {
    forged:boolean

    constructor(forged:boolean, n1:string, n2:string, gnd:boolean) {
        super(n1, n2, gnd)
        this.forged = forged
    }

    isForged():boolean {
        return this.forged
    }
}