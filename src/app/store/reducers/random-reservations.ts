import { GuestInfo, Reservation } from "src/app/shared";

const randomFirstNames = [
    "Liam",
    "Olivia",
    "Noah",
    "Emma",
    "Oliver",
    "Ava",
    "Isabella",
    "Sophia",
    "Jackson",
    "Lucas",
    "Mia",
    "Charlotte",
    "Aiden",
    "Amelia",
    "Caden",
    "Harper",
    "Elijah",
    "Abigail",
    "Mason",
    "Ella",
    "Logan",
    "Avery",
    "Ethan",
    "Scarlett",
    "Muhammad",
    "Grace",
    "James",
    "Chloe",
    "Alexander",
    "Lily",
    "Benjamin",
    "Evelyn",
    "Sebastian",
    "Zoe",
    "Henry",
    "Layla",
    "Carter",
    "Aria",
    "Matthew",
    "Riley",
    "Wyatt",
    "Leah",
    "Jayden",
    "Nora",
    "David",
    "Zara",
    "John",
    "Sofia",
  ];
  
  const randomLastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Jones",
    "Brown",
    "Davis",
    "Miller",
    "Wilson",
    "Moore",
    "Taylor",
    "Anderson",
    "Thomas",
    "Jackson",
    "White",
    "Harris",
    "Martin",
    "Thompson",
    "Garcia",
    "Martinez",
    "Robinson",
    "Clark",
    "Rodriguez",
    "Lewis",
    "Lee",
    "Walker",
    "Hall",
    "Allen",
    "Young",
    "Hernandez",
    "King",
    "Wright",
    "Lopez",
    "Hill",
    "Scott",
    "Green",
    "Adams",
    "Baker",
    "Gonzalez",
    "Nelson",
    "Carter",
    "Mitchell",
    "Perez",
    "Roberts",
    "Turner",
    "Phillips",
    "Campbell",
    "Parker",
    "Evans",
  ];
  
  // Przykładowe użycie
  const randomFirstName = randomFirstNames[Math.floor(Math.random() * randomFirstNames.length)];
  const randomLastName = randomLastNames[Math.floor(Math.random() * randomLastNames.length)];
  
  console.log("Losowe imię:", randomFirstName);
  console.log("Losowe nazwisko:", randomLastName);
  
  function getRandomElement(array: Array<any>) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  function getRandomDate() {
    const today = new Date();
    const futureDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + Math.floor(Math.random() * 365));
    return futureDate;
  }
  
  function getRandomNumber(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function generateRandomReservation() {
    const promo = Math.random() < 0.5; // 50% szans na promocję
    const guests = getRandomNumber(1, 4); // Od 1 do 4 gości
    const startDate = getRandomDate();
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + getRandomNumber(1, 14)); // Odległość od 1 do 14 dni od daty zakwaterowania
    const days = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    const cateringOptions = ['all', 'none', 'breakfast'];
    const food = getRandomElement(cateringOptions);
    const roomId = getRandomNumber(1, 5); // Od 1 do 5
    const titles = ['Mr', 'Mrs'];
    const title = getRandomElement(titles);
    const firstName = getRandomElement(randomFirstNames);
    const lastName = getRandomElement(randomLastNames);
    const email = `${firstName.toLowerCase()}@ex.com`;
    const phoneNumber = getRandomNumber(100000000, 999999999).toString();
  
    const guestInfo = new GuestInfo(firstName, lastName, title, email, phoneNumber);
  
    return new Reservation(promo, guests, startDate, endDate, days, food, roomId, guestInfo);
  }