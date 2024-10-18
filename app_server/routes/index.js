var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlothers = require('../controllers/others');
var ctrlmain = require('../controllers/main');

// Define routes
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location1', ctrlLocations.locationInfo1);
router.get('/location2', ctrlLocations.locationInfo2);
router.get('/location/review/new', ctrlLocations.addReview);
router.get('/review', ctrlLocations.addReview);

// Add search route
router.get('/search', ctrlLocations.searchLocations); // New search route

router.get('/about', ctrlothers.about);

router.get('/signin', ctrlmain.signin);
router.get('/register', function(req, res, next) {
    res.render('register', { title: 'register' });
});


module.exports = router;
