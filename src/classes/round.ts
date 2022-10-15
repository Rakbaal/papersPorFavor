import Id from "./id";
import Immigrant from "./immigrant";
import names from "../const/names";
import IObserver from "./iwatcher";
import Game from "./game";

export default class Round implements IObserver {
    roundNumber: number
    immigrant: Immigrant
    id: Id
    focusOnImmigrant: boolean

    constructor() {
        this.immigrant = this.generateImmigrant()
        this.id = this.generateId(this.immigrant)
        this.focusOnImmigrant = true
    }

    update(subject: Game): void {
        this.roundNumber = this.roundNumber + 1
        this.immigrant = this.generateImmigrant()
        this.id = this.generateId(this.immigrant)
    }

    listRandomizer(array: Array<string>): string {
        const i: number = array.length
        const returned = array[Math.floor(Math.random() * i)]
        return returned
    }

    binaryRandomizer(): boolean {
        return Math.floor(Math.random() * 2) === 1
    }

    switchFocus() {
        this.focusOnImmigrant = !this.focusOnImmigrant
    }

    generateImmigrant(): Immigrant {
        const n = names
        const gender: boolean = this.binaryRandomizer()
        const firstName: string = this.listRandomizer(names["firstNames"][gender ? "female" : "male"])
        const lastName: string = this.listRandomizer(names["lastNames"])

        return new Immigrant(firstName, lastName, gender)
    }

    generateDifferentName(first: boolean, immigrant: Immigrant): string {
        let stocker = immigrant.getName(first)
        while (stocker === immigrant.getName(first)) {
            stocker = first ? this.listRandomizer(names["firstNames"][immigrant.getGender()]) : this.listRandomizer(names["lastNames"])
        }

        return stocker
    }

    generateId(immigrant: Immigrant): Id {
        let firstName: string = immigrant.getName(true)
        let lastName: string = immigrant.getName(false)
        let gender: boolean = immigrant.getGender() === "female"
        const forged: boolean = this.binaryRandomizer()

        if (forged) {
            const i = Math.floor(Math.random() * 3)
            switch (i) {
                case 0:
                    firstName = this.generateDifferentName(true, immigrant)
                    break
                case 1:
                    lastName = this.generateDifferentName(false, immigrant)
                    break
                case 2:
                    gender = !gender
                    break
            }
        }

        return new Id(forged, firstName, lastName, gender)
    }
}