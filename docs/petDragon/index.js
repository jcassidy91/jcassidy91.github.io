var config = {
    apiKey: "AIzaSyAr4PE2kI87JwcC5C1UI-SDDNAin4ramdE",
    authDomain: "myawesomeproject-2784c.firebaseapp.com",
    databaseURL: "https://myawesomeproject-2784c.firebaseio.com",
    projectId: "myawesomeproject-2784c",
    storageBucket: "myawesomeproject-2784c.appspot.com",
    messagingSenderId: "265454730613"
  };
firebase.initializeApp(config);

var myDragon = {};
var database = firebase.database()
var db = database.ref("myDragon");

function feed(amount) {
    database.ref().update({"myDragon/food": myDragon.food + amount})
}

db.on("value", getStats);
function getStats(e) {
    myDragon = e.val();
    $('#food').html(myDragon.food);
    $('#mood').html(myDragon.mood);
    $('#name').html(myDragon.name);
}

checkHunger();
function checkHunger() {
    let amount = new Date().getTime()/1000 - myDragon.timeSinceHunger;
    if (amount > 5) {
        feed(-Math.floor(amount/5));
        database.ref().update({"myDragon/timeSinceHunger": new Date().getTime()/1000})
    }
    window.requestAnimationFrame(checkHunger);
}