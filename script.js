
const cardElements = document.querySelectorAll('.card');

fetch('hotels.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // Loop through the hotel data
    for (let i = 0; i < data.hotels.length; i++) {
      let hotel = data.hotels[i];
      
      // Create the hotel data elements
      let div = document.createElement("div");
      div.innerHTML = '<h4>' + hotel.name + '</h4>';
      for (let j = 0; j < hotel.rooms.length; j++) {
        let room = hotel.rooms[j];
        let roomDiv = document.createElement("div");
        roomDiv.innerHTML = '<h5>' + room.name + '</h5>' +
                             '<p>Size: ' + room.size + ' sqm</p>' +
                             '<p>Facilities: ' + room.facilities.join(', ') + '</p>' +
                             '<p>Capacity: ' + room.capacity + ' person(s)</p>' +
                             '<p>Description: ' + room.description + '</p>';
        div.appendChild(roomDiv);
      }
      
      // Append the hotel data to the card element
      cardElements[i].querySelector('.card-body').appendChild(div);
    }
  })
  .catch(function (err) {
    console.log('error: ' + err);
  });

 // Add form logic 
const hotelSelect = document.getElementById('hotel-select');
const roomSelect = document.getElementById('room-select');

hotelSelect.addEventListener('change', () => {

    // Add new options based on the selected hotel
    if (hotelSelect.value === 'Hotel A') {
      roomSelect.innerHTML = '<option value="Standard Room">Standard Room</option>';
    } else if (hotelSelect.value === 'Hotel B') {
      roomSelect.innerHTML = '<option value="Deluxe Room">Deluxe Room</option>';
    } else if (hotelSelect.value === 'Hotel C') {
      roomSelect.innerHTML = '<option value="Suite Room">Suite Room</option>';
    }
  });

