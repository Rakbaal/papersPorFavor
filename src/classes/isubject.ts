import IObserver from "./iwatcher";

export default interface ISubject {
    attach(observer:IObserver):void
    notify():void
}