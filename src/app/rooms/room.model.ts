export class Room{
    public name:string;
    public capacity: number;
    public facilities: Array<string>
    public imagePath:string;
    public area: number;
    public price;

    
    constructor(name:string, capacity:number,facilities:Array<string>, imagePath:string, area:number, price:number){
        this.name = name;
        this.capacity = capacity
        this.facilities = facilities
        this.imagePath = imagePath;
        this.area = area
        this.price = price

    }
}