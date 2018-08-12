var friendList = require('../data/friends.js');

module.exports = function(app){
	app.get("/api/friends", function(req, res) {
	res.json(friendList);
});

app.post("/api/friends", function(req, res) {
	var newFriendScores = req.body.scores;
	var scoresArray = [];
	var friendCount = 0;
	var bestMatch = 0;

	//for loop runs through all current friends in the list
	for(var i = 0; i<friendList.length; i++){
		var scoresDiff = 0;
		//this will run the score to compare and contrast friends
		for(var j = 0; j< newFriendScores.length; j++){
			scoresDiff +=(Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
		}
		//this will push the results into scoresArray
		scoresArray.push(scoresDiff);
	}
	//after all friends are compared, find best match
	for(var i=0; i < scoresArray.length; i++){
		if(scoresArray[i] <= scoresArray[bestMatch]){
			bestMatch = i;
		}
	}
	//return bestMatch data
	var bff = friendList[bestMatch];
	res.json(bff);

	//pushes new submission into the friendsList array
	friendList.push(req.body);
	});

};