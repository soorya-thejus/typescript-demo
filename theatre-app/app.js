var Theatre = /** @class */ (function () {
    function Theatre(totalSeats) {
        this.seats = Array(totalSeats).fill(false);
    }
    Theatre.prototype.bookSeat = function (seatNumber) {
        if (!this.seats[seatNumber]) {
            this.seats[seatNumber] = true;
            console.log("Seat ".concat(seatNumber, " booked."));
        }
        else {
            console.log("Seat ".concat(seatNumber, " is already booked."));
        }
    };
    Theatre.prototype.cancelSeat = function (seatNumber) {
        if (this.seats[seatNumber]) {
            this.seats[seatNumber] = false;
            console.log("Seat ".concat(seatNumber, " cancelled."));
        }
        else {
            console.log("Seat ".concat(seatNumber, " is not booked."));
        }
    };
    Theatre.prototype.displaySeats = function () {
        console.log(this.seats.map(function (seat, index) { return "Seat ".concat(index, ": ").concat(seat ? 'Booked' : 'Available'); }).join('\n'));
    };
    return Theatre;
}());
// Example Usage
var theatre = new Theatre(10);
theatre.bookSeat(3);
theatre.displaySeats();
theatre.cancelSeat(3);
theatre.displaySeats();
