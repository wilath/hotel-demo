export class Reservation {
  public promo: boolean;
  public guests: number;
  public startDate: Date;
  public endDate: Date;
  public days: number;
  public food: string;
  public roomId: number;
  public guestInfo?: GuestInfo;

  constructor(
    promo: boolean,
    guests: number,
    startDate: Date,
    endDate: Date,
    days: number,
    food: string,
    roomId: number,
    guestInfo?: GuestInfo,

  ) {
    this.promo = promo;
    this.guests = guests;
    this.startDate = startDate;
    this.endDate = endDate;
    this.days = days;
    this.food = food;
    this.roomId = roomId;
    this.guestInfo = guestInfo;
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
