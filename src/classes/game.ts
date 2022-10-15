import ISubject from "./isubject"
import IObserver from "./iwatcher"
import Round from "./round"
import * as readline from 'node:readline'
import {stdin, stdout} from 'process'
import { isShorthandPropertyAssignment } from "typescript"

export default class Game implements ISubject{
    private progress:number
    private maxRound:number
    private score:number
    private observer:IObserver

    attach(observer: IObserver): void {
        this.observer = observer
    }

    notify(): void {
        this.observer.update(this)
    }

    constructor() {
        this.progress = 1
        this.maxRound = 5
        this.score = 0
    }

    introduction():void {
        console.log("Welcome !\n In this game, you are a customs officer.");
        console.log("Your goal is to wether the immigrants passing by your office have genuine papers in accordance with their identity.");
        console.log("To do so, you will be able to ask their papers to the immigrants and ask them the following questions :");
        console.log("- first name ?\n- last name ?\n- gender ?");
        console.log("If you ever find that the information given by the immigrant aren't exactly the same in the id, then you'll have to refuse them the entrance. (command: refuse)");
        console.log("In the other case, your will have to allow them the entrance. (command: accept)");

        const rl = readline.createInterface({
            input: stdin,
            output: stdout
        })

        rl.question("Ready ? (yes, no)\n", function ask(answer: string) {
            if (answer === "yes") {
                rl.close()
            }  
            else {
                ask(answer)
            }
        })
    }

    startGame() {
        
    }

    endGame() {
        console.log(`End of the game.\nYour score : ${this.getScore()}`);
    }

    getScore():number {
        return this.score
    }

    scoreIncrease():void {
        this.score = this.score + 1
    }

    getRoundNumber():number {
        return this.progress
    }

    newRound(oldRound:Round):void {
        this.notify()
    }

    getMaxRound():number {
        return this.maxRound
    }

    getProgress():number {
        return this.progress
    }
}