const locations = [
    {
        name: 'Pasta Palace',
        address: '200 Main Street, Springfield, ST 12345',
        rating: 4,
        facilities: ['Italian cuisine', 'Takeout', 'Outdoor seating'],
        distance: '150m'
    },
    {
        name: 'Sushi Haven',
        address: '345 Elm Avenue, Springfield, ST 12345',
        rating: 5,
        facilities: ['Sushi', 'Sake', 'Outdoor seating'],
        distance: '250m'
    },
    {
        name: 'Taco Town',
        address: '678 Maple Drive, Springfield, ST 12345',
        rating: 3,
        facilities: ['Tacos', 'Takeout', 'Indoor seating'],
        distance: '300m'
    }
];

module.exports.homelist = function(req, res) {
    res.render('location-list', {
        title: 'Restaurant Finder - Searching for a Place to Eat?',
        pageHeader: {
            title: 'Restaurant Finder',
            strapline: 'Find great dining options near you!'
        },
        sidebar: "Looking for a delicious meal and a cozy atmosphere? Restaurant Finder helps you discover the best dining spots that offer great food and wifi. Enjoy your next meal with us! Don't miss the annual 'Taste of Springfield' festival this weekend, where local restaurants showcase their best dishes! Join us for food, fun, and music, and explore attractions like the Springfield Art Museum and Riverwalk Park while you're here!",
        locations: locations // Use the locations array
    });
};

module.exports.locationInfo = function(req, res){
    res.render('location-info', { title: 'Pasta Palace - Location Info' });
};

module.exports.locationInfo1 = function(req, res){
    res.render('locations-info2', { title: 'Sushi Haven - Location Info' });
};

module.exports.locationInfo2 = function(req, res){
    res.render('locations-info3', { title: 'Taco Town - Location Info' });
};

module.exports.addReview = function(req, res){
    res.render('locations-review-form', { title: 'Add Review' });
};

// Add the search function
module.exports.searchLocations = function(req, res) {
    const query = req.query.query || ''; // Get the search query
    const results = locations.filter(location => location.name.toLowerCase().includes(query.toLowerCase())); // Filter the locations based on the query

    res.render('location-list', {
        title: results.length ? 'Search Results' : 'No Results Found',
        pageHeader: {
            title: results.length ? 'Search Results' : 'No Results',
            strapline: results.length ? `Results for "${query}"` : `No locations found for "${query}". Please try another search.`
        },
        sidebar: "Looking for a delicious meal and a cozy atmosphere? Restaurant Finder helps you discover the best dining spots that offer great food and wifi.",
        locations: results // Render the filtered results
    });
};
