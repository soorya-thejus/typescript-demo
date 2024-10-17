class HotelRoom {
    id: number;
    price: number;
    isAvailable: boolean;

    constructor(id: number, price: number) {
        this.id = id;
        this.price = price;
        this.isAvailable = true;
    }
}

class Hotel {
    rooms: HotelRoom[];

    constructor() {
        this.rooms = [];
    }

    addRoom(room: HotelRoom) {
        this.rooms.push(room);
    }

    checkAvailability(): HotelRoom[] {
        return this.rooms.filter(room => room.isAvailable);
    }

    bookRoom(roomId: number, nights: number): string {
        const room = this.rooms.find(r => r.id === roomId);
        if (room && room.isAvailable) {
            room.isAvailable = false;
            const totalCost = room.price * nights;
            return `Room booked! Total cost for ${nights} nights: $${totalCost}`;
        } else {
            return "Room is not available.";
        }
    }
}

// Example Usage
const hotel = new Hotel();
hotel.addRoom(new HotelRoom(101, 100));
hotel.addRoom(new HotelRoom(102, 150));

console.log(hotel.checkAvailability());
console.log(hotel.bookRoom(101, 3));
console.log(hotel.checkAvailability());
