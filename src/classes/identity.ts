export default abstract class Identity {
    private firstName:string
    private lastName:string
    private gender:string
    
    constructor(n1:string, n2:string, gnd:boolean) {
        this.firstName = n1
        this.lastName = n2
        this.gender = gnd ? "female" : "male"
    }

    setName(first:boolean, str:string) {
        first ? this.firstName = str : this.lastName = str
    }

    getName(first:boolean):string {
        return first ? this.firstName : this.lastName
    }

    setGender(gnd:boolean) {
        this.gender = gnd ? "female" : "male"
    }

    getGender():string {
        return this.gender
    }
}