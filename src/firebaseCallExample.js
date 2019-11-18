//initialize firebase, set variables
$(document).ready(function(){
var config={
    apiKey:"ad20580ede99d000a9d0eadfdf7d1af3175c58f8",
    authDomain:"swordmastersAugust",
    databaseURL: "https://swordmasters-august.firebaseio.com/",
    projectId: "swordmasters-august",
    storageBucket: "swordmasters-august",
    messagingSenderId:"2361693643"
};

firebase.initializeApp(config);
var database= firebase.database();
//clicky click variables
var userName;
var email;
var points;
var rank = 0;
//clicky function
$("#add-user").on("click", function(){
    event.preventDefault();
    name=$("#user-name").val().trim();
    email= $("#email").val().trim();
    points = $("#points").val().trim();
//     frequency= $("#frequency").val().trim();
//addorama
database.ref().push({
    userName:userName,
    email: email,
    points: points,
    rank: rank,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
});
$("form")[0].reset();
});


database.ref().on("child_added", function(childSnapshot){
    var nextRank;
    var pointsAway;
    //append time
    var currentRank = moment(childSnapshot.val().email, "hh:mm").subtract(1, "years");
    //difference between current and  morningTrain
    var diffPoints= moment().diff(moment(currentRank), "minutes");
    var remainder = diffTime % childSnapshot.val().rank;
    var pointsAway = childSnapshot.val().rank - remainder;
var nextRank = moment().add(pointsAway, "minutes");
next moment(nextRank).format("hh:mm");
//display infomania
$("#add-row").append("<tr><td>" + childSnapshot.val().name +
"</td><td>" + childSnapshot.val().email +
"</td><td>" + childSnapshot.val().rank +
"</td><td>" + nextRank + 
"</td><td>" + pointAway + "</td></tr>");

// console log dem errors yo
}, function(errorObject) {
console.log("Errors handled: " + errorObject.code);
});


});
