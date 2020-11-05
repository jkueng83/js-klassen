export default class Engine{
    constructor(serialnumber, hp = 100){
        this.serialnumber = serialnumber;
        this.hp = hp;
    }

    go(){
        console.log("I am running! Serial number: " + this.serialnumber + " - hp: " + this.hp + " hp");
    }
}