import React, { useState } from 'react';

const SEAT_TYPES = {
  AVAILABLE: 'available',
  SELECTED: 'selected',
  BOOKED: 'booked',
  DISABLED: 'disabled',
  FEMALE_ONLY: 'female_only'
};

const SEAT_CLASSES = {
  ECONOMY: 'economy',
  BUSINESS: 'business',
  FIRST: 'first'
};

const PlaneBookingSystem = () => {
  // Initialize seats with different types
  const initializeSeats = () => {
    const seats = [];
    
    // First Class (rows 1-3, 4 seats per row)
    for (let row = 1; row <= 3; row++) {
      ['A', 'B', 'C', 'D'].forEach(letter => {
        const seatId = `${row}${letter}`;
        let type = SEAT_TYPES.AVAILABLE;
        
        // Some pre-booked seats
        if (['1A', '2C', '3B'].includes(seatId)) {
          type = SEAT_TYPES.BOOKED;
        }
        // Female only seats
        if (['1C', '1D', '2A', '2B'].includes(seatId)) {
          type = SEAT_TYPES.FEMALE_ONLY;
        }
        
        seats.push({
          id: seatId,
          row,
          letter,
          type,
          class: SEAT_CLASSES.FIRST,
          price: 2500
        });
      });
    }
    
    // Business Class (rows 4-8, 4 seats per row)
    for (let row = 4; row <= 8; row++) {
      ['A', 'B', 'C', 'D'].forEach(letter => {
        const seatId = `${row}${letter}`;
        let type = SEAT_TYPES.AVAILABLE;
        
        // Some pre-booked seats
        if (['4A', '5C', '6B', '7D', '8A'].includes(seatId)) {
          type = SEAT_TYPES.BOOKED;
        }
        // Female only seats
        if (['4C', '4D', '5A', '5B', '6C', '6D'].includes(seatId)) {
          type = SEAT_TYPES.FEMALE_ONLY;
        }
        // Some disabled seats (maintenance)
        if (['7A', '8B'].includes(seatId)) {
          type = SEAT_TYPES.DISABLED;
        }
        
        seats.push({
          id: seatId,
          row,
          letter,
          type,
          class: SEAT_CLASSES.BUSINESS,
          price: 1500
        });
      });
    }
    
    // Economy Class (rows 9-20, 6 seats per row)
    for (let row = 9; row <= 20; row++) {
      ['A', 'B', 'C', 'D', 'E', 'F'].forEach(letter => {
        const seatId = `${row}${letter}`;
        let type = SEAT_TYPES.AVAILABLE;
        
        // More pre-booked seats in economy
        const bookedSeats = ['9A', '10C', '11F', '12B', '13E', '14A', '15D', '16C', '17F', '18B', '19E', '20A'];
        if (bookedSeats.includes(seatId)) {
          type = SEAT_TYPES.BOOKED;
        }
        
        // Female only sections
        if (['9D', '9E', '9F', '10D', '10E', '10F', '11A', '11B', '11C', '12D', '12E', '12F'].includes(seatId)) {
          type = SEAT_TYPES.FEMALE_ONLY;
        }
        
        // Some disabled seats
        if (['13A', '14F', '19A'].includes(seatId)) {
          type = SEAT_TYPES.DISABLED;
        }
        
        seats.push({
          id: seatId,
          row,
          letter,
          type,
          class: SEAT_CLASSES.ECONOMY,
          price: 500
        });
      });
    }
    
    return seats;
  };

  const [seats, setSeats] = useState(initializeSeats());
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [passengerGender, setPassengerGender] = useState('male');
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSeatClick = (seatId) => {
    const seat = seats.find(s => s.id === seatId);
    
    if (seat.type === SEAT_TYPES.BOOKED || seat.type === SEAT_TYPES.DISABLED) {
      return; // Can't select booked or disabled seats
    }
    
    if (seat.type === SEAT_TYPES.FEMALE_ONLY && passengerGender !== 'female') {
      alert('This seat is reserved for female passengers only.');
      return;
    }

    setSeats(prevSeats => 
      prevSeats.map(s => {
        if (s.id === seatId) {
          const isCurrentlySelected = selectedSeats.includes(seatId);
          const newType = isCurrentlySelected ? 
            (s.type === SEAT_TYPES.FEMALE_ONLY ? SEAT_TYPES.FEMALE_ONLY : SEAT_TYPES.AVAILABLE) : 
            SEAT_TYPES.SELECTED;
          
          return { ...s, type: newType };
        }
        return s;
      })
    );

    setSelectedSeats(prev => {
      if (prev.includes(seatId)) {
        return prev.filter(id => id !== seatId);
      } else {
        return [...prev, seatId];
      }
    });
  };

  const getSeatColor = (seat) => {
    switch (seat.type) {
      case SEAT_TYPES.AVAILABLE:
        return 'bg-green-100 hover:bg-green-200 border-green-300 text-green-800';
      case SEAT_TYPES.SELECTED:
        return 'bg-blue-500 border-blue-600 text-white';
      case SEAT_TYPES.BOOKED:
        return 'bg-red-100 border-red-300 text-red-800 cursor-not-allowed';
      case SEAT_TYPES.DISABLED:
        return 'bg-gray-100 border-gray-300 text-gray-500 cursor-not-allowed';
      case SEAT_TYPES.FEMALE_ONLY:
        return passengerGender === 'female' 
          ? 'bg-pink-100 hover:bg-pink-200 border-pink-300 text-pink-800'
          : 'bg-pink-50 border-pink-200 text-pink-400 cursor-not-allowed';
      default:
        return 'bg-gray-100';
    }
  };

  const getSeatDisplay = (seat) => {
    switch (seat.type) {
      case SEAT_TYPES.SELECTED:
        return '✓';
      case SEAT_TYPES.BOOKED:
        return '✗';
      case SEAT_TYPES.DISABLED:
        return 'X';
      case SEAT_TYPES.FEMALE_ONLY:
        return '♀';
      default:
        return seat.letter;
    }
  };

  const getTotalPrice = () => {
    return selectedSeats.reduce((total, seatId) => {
      const seat = seats.find(s => s.id === seatId);
      return total + (seat ? seat.price : 0);
    }, 0);
  };

  const handleBooking = () => {
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat.');
      return;
    }
    setShowBookingForm(true);
  };

  const confirmBooking = () => {
    if (!bookingDetails.name || !bookingDetails.email || !bookingDetails.phone) {
      alert('Please fill in all booking details.');
      return;
    }

    // Mark selected seats as booked
    setSeats(prevSeats => 
      prevSeats.map(s => 
        selectedSeats.includes(s.id) 
          ? { ...s, type: SEAT_TYPES.BOOKED }
          : s
      )
    );

    alert(`Booking confirmed for ${selectedSeats.join(', ')}! Total: ₹${getTotalPrice()}`);
    setSelectedSeats([]);
    setShowBookingForm(false);
    setBookingDetails({ name: '', email: '', phone: '' });
  };

  const renderSeatMap = () => {
    const seatsByRow = seats.reduce((acc, seat) => {
      if (!acc[seat.row]) acc[seat.row] = [];
      acc[seat.row].push(seat);
      return acc;
    }, {});

    return Object.entries(seatsByRow).map(([row, rowSeats]) => {
      const sortedSeats = rowSeats.sort((a, b) => a.letter.localeCompare(b.letter));
      const isFirstClass = sortedSeats[0].class === SEAT_CLASSES.FIRST;
      const isBusinessClass = sortedSeats[0].class === SEAT_CLASSES.BUSINESS;
      
      return (
        <div key={row} className="flex items-center justify-center mb-2">
          <div className="w-8 text-center text-sm font-bold text-gray-700 mr-4">
            {row}
          </div>
          <div className="flex gap-1">
            {sortedSeats.map((seat, index) => {
              const isAisle = (isFirstClass || isBusinessClass) 
                ? index === 1 
                : index === 2;
              
              return (
                <React.Fragment key={seat.id}>
                  <button
                    onClick={() => handleSeatClick(seat.id)}
                    className={`w-12 h-12 border-2 rounded-lg transition-all duration-200 text-sm font-bold flex items-center justify-center relative ${getSeatColor(seat)}`}
                    disabled={seat.type === SEAT_TYPES.BOOKED || seat.type === SEAT_TYPES.DISABLED || (seat.type === SEAT_TYPES.FEMALE_ONLY && passengerGender !== 'female')}
                    title={`Seat ${seat.id} - ${seat.class} - ₹${seat.price}`}
                  >
                    {seat.class === SEAT_CLASSES.FIRST && (
                      <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                        ★
                      </div>
                    )}
                    <span className="text-lg">{getSeatDisplay(seat)}</span>
                  </button>
                  {isAisle && <div className="w-6"></div>}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">✈️ Flight Booking System</h1>
              <p className="text-gray-600 mt-1">Flight AI-101 | Mumbai → Delhi | 14:30 - 16:45</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600 mb-2">Passenger Gender</p>
              <select 
                value={passengerGender} 
                onChange={(e) => setPassengerGender(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Seat Map */}
          <div className="lg:col-span-3 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-6 text-center">Select Your Seats</h2>
            
            {/* Class Headers */}
            <div className="mb-6 text-center space-y-2">
              <div className="inline-block bg-yellow-100 px-4 py-2 rounded-lg border border-yellow-300 mx-1">
                <span className="text-sm font-bold text-yellow-800">★ First Class (Rows 1-3) - ₹2,500</span>
              </div>
              <div className="inline-block bg-purple-100 px-4 py-2 rounded-lg border border-purple-300 mx-1">
                <span className="text-sm font-bold text-purple-800">Business Class (Rows 4-8) - ₹1,500</span>
              </div>
              <div className="inline-block bg-blue-100 px-4 py-2 rounded-lg border border-blue-300 mx-1">
                <span className="text-sm font-bold text-blue-800">Economy Class (Rows 9-20) - ₹500</span>
              </div>
            </div>

            {/* Seat Map */}
            <div className="bg-gray-50 p-6 rounded-lg overflow-y-auto max-h-96">
              {renderSeatMap()}
            </div>

            {/* Legend */}
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-100 border border-green-300 rounded flex items-center justify-center text-green-800 font-bold">A</div>
                <span>Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 border border-blue-600 rounded flex items-center justify-center text-white font-bold">✓</div>
                <span>Selected</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-red-100 border border-red-300 rounded flex items-center justify-center text-red-800 font-bold">✗</div>
                <span>Booked</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-pink-100 border border-pink-300 rounded flex items-center justify-center text-pink-800 font-bold">♀</div>
                <span>Female Only</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-100 border border-gray-300 rounded flex items-center justify-center text-gray-500 font-bold">X</div>
                <span>Disabled</span>
              </div>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-4">Booking Summary</h3>
              
              {selectedSeats.length > 0 ? (
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Selected Seats:</p>
                    <div className="space-y-1">
                      {selectedSeats.map(seatId => {
                        const seat = seats.find(s => s.id === seatId);
                        return (
                          <div key={seatId} className="bg-blue-50 text-blue-800 px-3 py-2 rounded text-sm flex justify-between">
                            <span>{seatId}</span>
                            <span>₹{seat?.price}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-bold">Total Price:</span>
                      <span className="font-bold text-xl text-blue-600">₹{getTotalPrice()}</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={handleBooking}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                  >
                    Book Now
                  </button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No seats selected</p>
                  <p className="text-sm text-gray-400 mt-2">Click on available seats to select</p>
                </div>
              )}
            </div>

            {/* Pricing Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-4">Seat Pricing</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="flex items-center">
                    <span className="text-yellow-600 mr-2">★</span>
                    First Class
                  </span>
                  <span className="font-bold">₹2,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Business Class</span>
                  <span className="font-bold">₹1,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Economy Class</span>
                  <span className="font-bold">₹500</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Form Modal */}
        {showBookingForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h3 className="text-xl font-bold mb-4">Complete Your Booking</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text"
                    value={bookingDetails.name}
                    onChange={(e) => setBookingDetails({...bookingDetails, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                  <input 
                    type="email"
                    value={bookingDetails.email}
                    onChange={(e) => setBookingDetails({...bookingDetails, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
                  <input 
                    type="tel"
                    value={bookingDetails.phone}
                    onChange={(e) => setBookingDetails({...bookingDetails, phone: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Seats:</span>
                    <span>{selectedSeats.join(', ')}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span className="text-blue-600">₹{getTotalPrice()}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3 mt-6">
                <button 
                  onClick={() => setShowBookingForm(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button 
                  onClick={confirmBooking}
                  className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors duration-200"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlaneBookingSystem;