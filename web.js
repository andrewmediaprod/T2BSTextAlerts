var express = require('express'),
	http = require("http")
var app = express();

// Handle Default Route for Static Files
app.use("/", express.static(__dirname+"/static"));



/*******************
  Database Config
*******************/

// Mongo Database Name
var DB_NAME = 't2bs-textalerts';

// Mongoose Models
var phoneSchema = mongoose.Schema({
	name: String,
	phone: String,
	date: Date
});
var messageSchema = mongoose.Schema({
	msg: String,
	date: Date
});
var suggestionSchema = mongoose.Schema({
	name: String,
	date: Date
});
var PhoneRecord = mongoose.model("PhoneRecord", phoneSchema);
var MessageRecord = mongoose.model("MessageRecord", messageSchema);
var SuggestionRecord = mongoose.model("SuggestionRecord", suggestionSchema);

// Mongo Initialiation
var mongoUri = process.env.MONGOLAB_URI ||
	process.env.MONGOHQ_URL ||
	'mongodb://localhost/'+DB_NAME;
var mongo = require('mongodb');

// Connect to DB
var db; var dbError;
mongo.Db.connect(mongoUri, function (error, databaseConnection) {
	if (error) { dbError = error; }
	else { db = databaseConnection; }
});



/******************
   Custom Routes
******************/

// Populate Front-End with Recent Suggestions
app.get('/suggestions', function(req, res)) {

	// Get Recent Suggestions from DB

}


// Populates Admin Area with Stored Data
app.get('/admindata', function(req, res)) {

	// Check if User is Logged In

	// Get Recent Messages from DB
	
	// Get Registered Users from DB
	 
	// Get Suggestions from DB

}

// Submission of Suggestion on Front-End
app.post('/suggest', function(req, res)) {

	// Get Required Post Data

	// Check if Duplicate (Not Complex)
	
	// Insert into DB

}

// Submission of Phone Number Form on Front-End
app.post('/signup', function(req, res) {
	
	// Check if Duplicate Phone Number
	
	// Insert into DB

});

// Submission of Message Send Form on Admin Area
app.post('/send', function(req, res)) {

	// Check Authentication
	
	// Check Required Fields

	// Call Twilio Library to Send

	// Insert into DB

}

var server = app.listen(3000);