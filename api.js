// Add an event listener to the search bar for input changes
document.getElementById('searchBar').addEventListener('input', function() {
    const query = this.value;  // Get the user's input

    // Only trigger search if input length is 3 or more characters
    if (query.length < 3) {
        document.getElementById('suggestions').innerHTML = '';  // Clear suggestions if input is less than 3 characters
        return;
    }

    // Your API key and the URL to make the request
    const apiKey = 'AlzaSynI1AQ5oCLDVZIfDcXttuOpnrv4SAd_icY';
    const apiUrl = `https://maps.gomaps.pro/maps/api/place/autocomplete/json?input=${query}&key=${apiKey}`;

    // Fetch data from the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const suggestionsDiv = document.getElementById('suggestions');
            suggestionsDiv.innerHTML = '';  // Clear previous suggestions

            // Check if we got predictions from the API
            if (data.predictions && data.predictions.length > 0) {
                data.predictions.forEach(prediction => {
                    // Create a div for each suggestion
                    const suggestion = document.createElement('div');
                    suggestion.classList.add('suggestion');
                    suggestion.textContent = prediction.description;

                    // When a suggestion is clicked, populate the search bar and clear suggestions
                    suggestion.addEventListener('click', function() {
                        document.getElementById('searchBar').value = prediction.description;
                        suggestionsDiv.innerHTML = '';  // Clear suggestions
                    });

                    suggestionsDiv.appendChild(suggestion);  // Add the suggestion to the container
                });
            } else {
                suggestionsDiv.innerHTML = '<div class="suggestion">No results found</div>';  // Show message if no results
            }
        })
        .catch(error => {
            console.error('Error fetching autocomplete data:', error);
        });
});
