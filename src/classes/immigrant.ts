import Identity from "./identity"
import IDisplayer from "./idisplayer";
import display from "../const/display";

export default class Immigrant extends Identity implements IDisplayer{
    display(): void {
        const face:string = display["immigrant"][this.getGender()].join("\n")
        console.log(face);
    }
    
    introduction():void {
        this.display()
        console.log(`Hello !\n I am here for ${Math.floor(Math.random() * 2) === 1 ? "business" : "a little tourism"}.`);
    }

    tellGender():void {
        this.display()
        console.log(`I am a ${this.getGender()}`);
    }

    tellName():void {
        this.display()
        console.log(`I am ${this.getName(true)} ${this.getName(false)}.`);
    }

    isConfused():void {
        this.display()
        console.log(`Uhmmm... Sorry, I didn't understand... Could you repeat please ?`);
    }
}