class Theatre {
    seats: boolean[];

    constructor(totalSeats: number) {
        this.seats = Array(totalSeats).fill(false);
    }

    bookSeat(seatNumber: number) {
        if (!this.seats[seatNumber]) {
            this.seats[seatNumber] = true;
            console.log(`Seat ${seatNumber} booked.`);
        } else {
            console.log(`Seat ${seatNumber} is already booked.`);
        }
    }

    cancelSeat(seatNumber: number) {
        if (this.seats[seatNumber]) {
            this.seats[seatNumber] = false;
            console.log(`Seat ${seatNumber} cancelled.`);
        } else {
            console.log(`Seat ${seatNumber} is not booked.`);
        }
    }

    displaySeats() {
        console.log(this.seats.map((seat, index) => `Seat ${index}: ${seat ? 'Booked' : 'Available'}`).join('\n'));
    }
}

// Example Usage
const theatre = new Theatre(10);
theatre.bookSeat(3);
theatre.displaySeats();
theatre.cancelSeat(3);
theatre.displaySeats();


