export class Reservation{
    public promo:boolean;
    public guests: number;
    public startDate: Date;
    public endDate: Date;
    public days: number;
    public food: string;
    

    
    constructor(promo:boolean, guests:number, startDate:Date, endDate: Date, days:number, food: string ){
        this.promo = promo;
        this.guests = guests
        this.startDate = startDate
        this.endDate = endDate;
        this.days = days
        this.food = food

    }
}