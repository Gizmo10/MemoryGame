const imagesArray = document.getElementsByTagName("img"); //Stores the images hidden by divs
const  tilesArray = document.getElementsByTagName("div"); //Our div tiles are stored in this array
let scoreCount = document.getElementById("score");  //Stores the score
let failedAttemptsCount = document.getElementById("failedAttempts");//Store the number of failed attempts

//Initialise the score to 0
scoreCount.value = 0;
//Initialise failed attempts to 0
failedAttemptsCount.value = 0;

