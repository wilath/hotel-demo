export class Reservation {
  public promo: boolean;
  public guests: number;
  public startDate: Date;
  public endDate: Date;
  public days: number;
  public food: string;
  public finalPrice: number;
  public roomId?: number;
  public guestInfo?: GuestInfo;
  public resId?: number;
  

  constructor(
    promo: boolean,
    guests: number,
    startDate: Date,
    endDate: Date,
    days: number,
    food: string,
    finalPrice: number,
    roomId?: number,
    guestInfo?: GuestInfo,
    resId?: number,

  ) {
    this.promo = promo;
    this.guests = guests;
    this.startDate = startDate;
    this.endDate = endDate;
    this.days = days;
    this.food = food;
    this.roomId = roomId;
    this.finalPrice = finalPrice;
    this.guestInfo = guestInfo;
    this.resId = resId
  }
}

export class GuestInfo {
    public name: string;
    public surname: string;
    public title: string;
    public mail: string;
    public phone: string;

    constructor(name: string, surname: string, title: string, mail: string, phone: string) {
        this.name = name;
        this.surname = surname;
        this.title = title;
        this.mail= mail;
        this.phone = phone;

    }
}
