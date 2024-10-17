var HotelRoom = /** @class */ (function () {
    function HotelRoom(id, price) {
        this.id = id;
        this.price = price;
        this.isAvailable = true;
    }
    return HotelRoom;
}());
var Hotel = /** @class */ (function () {
    function Hotel() {
        this.rooms = [];
    }
    Hotel.prototype.addRoom = function (room) {
        this.rooms.push(room);
    };
    Hotel.prototype.checkAvailability = function () {
        return this.rooms.filter(function (room) { return room.isAvailable; });
    };
    Hotel.prototype.bookRoom = function (roomId, nights) {
        var room = this.rooms.find(function (r) { return r.id === roomId; });
        if (room && room.isAvailable) {
            room.isAvailable = false;
            var totalCost = room.price * nights;
            return "Room booked! Total cost for ".concat(nights, " nights: $").concat(totalCost);
        }
        else {
            return "Room is not available.";
        }
    };
    return Hotel;
}());
// Example Usage
var hotel = new Hotel();
hotel.addRoom(new HotelRoom(101, 100));
hotel.addRoom(new HotelRoom(102, 150));
console.log(hotel.checkAvailability());
console.log(hotel.bookRoom(101, 3));
