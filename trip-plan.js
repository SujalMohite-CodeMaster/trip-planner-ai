// Step 1: Function to get predefined places for popular destinations
function getDestinationDetails(destination) {
  const destinations = {
    'Mumbai': ['Gateway of India', 'Marine Drive', 'Elephanta Caves', 'Juhu Beach', 'Chhatrapati Shivaji Maharaj Vastu Sangrahalaya', 'Sanjay Gandhi National Park', 'Haji Ali Dargah', 'Colaba Causeway', 'Bandra-Worli Sea Link', 'Chhatrapati Shivaji Terminus (CST)'],
    'Paris': ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral', 'Montmartre', 'Champs-Élysées'],
    'New York': ['Statue of Liberty', 'Times Square', 'Central Park', 'Empire State Building', 'Brooklyn Bridge'],
    'Pune': ['Shaniwar Wada','Aga Khan Palace','Sinhagad Fort','Osho Ashram','Pataleshwar Cave Temple','Dagdusheth Halwai Ganapati Temple','Pashan Lake','Khadakwasla Dam', 'Lal Mahal','Raja Dinkar Kelkar Museum'],
    'Aurangabad': ['Ajanta Caves', 'Ellora Caves','Bibi Ka Maqbara',  'Daulatabad Fort','Grishneshwar Temple','Aurangabad Caves','Panchakki','Siddharth Garden and Zoo'],
    'Nashik': ['Sula Vineyards', 'Trimbakeshwar Temple', 'Panchavati', 'Kalaram Temple', 'Pandav Leni Caves'],
    'Nagpur': ['Deekshabhoomi', 'Futala Lake', 'Seminary Hill', 'Raman Science Centre', 'Sitabuldi Fort'],
    'Kolhapur': ['Mahalaxmi Temple', 'Panhala Fort', 'Rankala Lake', 'Jyotiba Temple', 'New Palace Museum'],
    'Lonavala': ['Bhushi Dam', 'Tiger’s Leap', 'Lohagad Fort', 'Karla Caves', 'Rajmachi Fort'],
    'Shirdi': ['Shirdi Sai Baba Temple', 'Dwarkamai Mosque', 'Shani Shingnapur', 'Sai Heritage Village', 'Lendi Baug'],
    'Mahabaleshwar': ['Venna Lake', 'Pratapgad Fort', 'Arthur\'s Seat', 'Wilson Point', 'Mapro Garden'],
    'Alibaug': ['Alibaug Beach', 'Kolaba Fort', 'Murud-Janjira Fort', 'Kashid Beach', 'Varsoli Beach'],
    'Delhi': ['India Gate', 'Red Fort', 'Qutub Minar', 'Humayun\'s Tomb', 'Lotus Temple'],
    'Agra': ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri', 'Mehtab Bagh', 'Itmad-ud-Daulah\'s Tomb'],
    'Jaipur': ['Amber Fort', 'Hawa Mahal', 'City Palace', 'Jantar Mantar', 'Jal Mahal'],
    'Varanasi': ['Kashi Vishwanath Temple', 'Dashashwamedh Ghat', 'Assi Ghat', 'Sarnath', 'Ramnagar Fort'],
    'Kolkata': ['Victoria Memorial', 'Howrah Bridge', 'Dakshineswar Kali Temple', 'Belur Math', 'Indian Museum'],
    'Chennai': ['Marina Beach', 'Kapaleeshwarar Temple', 'Fort St. George', 'Santhome Cathedral', 'Government Museum'],
    'Bangalore': ['Bangalore Palace', 'Cubbon Park', 'Lalbagh Botanical Garden', 'Vidhana Soudha', 'Tipu Sultan\'s Palace'],
    'Hyderabad': ['Charminar', 'Golconda Fort', 'Ramoji Film City', 'Hussain Sagar Lake', 'Salar Jung Museum'],
    'Goa': ['Baga Beach', 'Calangute Beach', 'Basilica of Bom Jesus', 'Aguada Fort', 'Chapora Fort'],
    'Amritsar': ['Golden Temple', 'Jallianwala Bagh', 'Wagah Border', 'Akal Takht', 'Partition Museum'],
    'Udaipur': ['City Palace', 'Lake Pichola', 'Jag Mandir', 'Fateh Sagar Lake', 'Sajjangarh Palace'],
    'Mysore': ['Mysore Palace', 'Chamundi Hill', 'Brindavan Gardens', 'Jaganmohan Palace', 'Mysore Zoo'],
    'Rishikesh': ['Lakshman Jhula', 'Ram Jhula', 'Triveni Ghat', 'Parmarth Niketan', 'Beatles Ashram'],
    'Leh-Ladakh': ['Pangong Lake', 'Nubra Valley', 'Thiksey Monastery', 'Shanti Stupa', 'Hemis Monastery'],
    'Kerala': ['Fort Kochi', 'Munnar Tea Gardens', 'Eravikulam National Park', 'Alleppey Backwaters', 'Varkala Beach'],
    'Jodhpur': ['Mehrangarh Fort', 'Umaid Bhawan Palace', 'Jaswant Thada', 'Mandore Gardens', 'Kaylana Lake'],
    'Shimla': ['The Ridge', 'Mall Road', 'Jakhoo Temple', 'Kufri', 'Christ Church'],
    'Manali': ['Solang Valley', 'Rohtang Pass', 'Hidimba Devi Temple', 'Vashisht Springs', 'Old Manali']
  };

  // Return the destination places or default message if not found
  return destinations[destination] || ['Explore the city on your own!'];
}



// Step 2: Modify the generateItinerary function to use different places for each day
function generateItinerary() {
  // Get form data
  const destination = document.getElementById('destination').value;
  const numDays = parseInt(document.getElementById('numDays').value);

  // Get destination details (places to visit)
  const placesToVisit = getDestinationDetails(destination);

  // Clear the previous itinerary
  const itineraryContent = document.getElementById('itineraryContent');
  itineraryContent.innerHTML = '';  // Clear previous content
  
  // Generate day-wise itinerary
  for (let day = 1; day <= numDays; day++) {
      // Create a new day div
      const dayDiv = document.createElement('div');
      dayDiv.classList.add('itinerary-day');
      
      // Add day title
      const dayTitle = document.createElement('h3');
      dayTitle.textContent = `Day ${day}: Explore ${destination}`;
      dayDiv.appendChild(dayTitle);
      
      // Pick a place to visit for the day (rotate through places if more days than places)
      const placeForTheDay = placesToVisit[(day - 1) % placesToVisit.length];  // Rotates through places
      const placeVisit = document.createElement('div');
      placeVisit.classList.add('itinerary-details');
      placeVisit.innerHTML = `<span><strong>Place to Visit:</strong> ${placeForTheDay}</span>`;
      dayDiv.appendChild(placeVisit);

      // Add meal plan (dynamic for each day)
      const mealPlan = document.createElement('div');
      mealPlan.classList.add('itinerary-details');
      mealPlan.innerHTML = `
        <span><strong>Breakfast:</strong> Enjoy a nice breakfast near ${placeForTheDay}.</span>
        <span><strong>Lunch:</strong> Try local cuisine at a nearby restaurant near ${placeForTheDay}.</span>
        <span><strong>Dinner:</strong> Dine at a popular place in ${destination} after exploring ${placeForTheDay}.</span>
      `;
      dayDiv.appendChild(mealPlan);

      // Add a notes section
      const notes = document.createElement('div');
      notes.classList.add('itinerary-details');
      notes.innerHTML = `<span><strong>Notes:</strong> Don't forget to take pictures at ${placeForTheDay}!</span>`;
      dayDiv.appendChild(notes);

      // Append the day's itinerary to the content area
      itineraryContent.innerHTML += dayDiv.outerHTML;
  }
}
