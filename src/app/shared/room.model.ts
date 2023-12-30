export class Room{
    public id: number;
    public name:string;
    public capacity: number;
    public facilities: Array<string>
    public imagePath:string;
    public area: number;
    public price: number;
    public quantity: number;
    public taken: number;

    
    constructor(id:number, name:string, capacity:number,facilities:Array<string>, imagePath:string, area:number, price:number, quantity: number, taken: number){
        this.id = id
        this.name = name;
        this.capacity = capacity
        this.facilities = facilities
        this.imagePath = imagePath;
        this.area = area
        this.price = price
        this.quantity = quantity
        this.taken = taken

    }
}