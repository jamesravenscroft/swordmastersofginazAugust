//initialize firebase, set variables
$(document).ready(function(){
var config={
    apiKey:"",
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
// var morningTrain;
// var frequency = 0;
//clicky function
$("#add-user").on("click", function(){
    event.preventDefault();
    name=$("#user-name").val().trim();
    email= $("#email").val().trim();
//     morningTrain = $("#morning-train").val().trim();
//     frequency= $("#frequency").val().trim();
//addorama
database.ref().push({
    userName:userName,
    email: email,
//     morningTrain: morningTrain,
//     frequency: frequency,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
});
$("form")[0].reset();
});


database.ref().on("child_added", function(childSnapshot){
    var nextRank;
    var pointsAway;
    //append time
    var firstTrainNew = moment(childSnapshot.val().morningTrain, "hh:mm").subtract(1, "years");
    //difference between current and  morningTrain
    var diffTime= moment().diff(moment(firstTrainNew), "minutes");
    var remainder = diffTime % childSnapshot.val().frequency;
    var pointsAway = childSnapshot.val().frequency - remainder;
var nextTrain = moment().add(minsAway, "minutes");
nextTrain= moment(nextTrain).format("hh:mm");
//display infomania
$("#add-row").append("<tr><td>" + childSnapshot.val().name +
"</td><td>" + childSnapshot.val().destination +
"</td><td>" + childSnapshot.val().frequency +
"</td><td>" + nextTrain + 
"</td><td>" + minsAway + "</td></tr>");

// console log dem errors yo
}, function(errorObject) {
console.log("Errors handled: " + errorObject.code);
});


});
