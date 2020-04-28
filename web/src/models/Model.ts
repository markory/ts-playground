interface ModelAttributes<T> {
    set(update:T):void;
}


interface Sync {}

interface Eventing {
    on(eventName: string, callback: () => void): void;
    trigger(eventName: string): void;
}


export class Model {
   
}
