const imagesArray = document.getElementsByTagName("img"); //Stores the images hidden by divs
const  tilesArray = document.getElementsByTagName("div"); //Our div tiles are stored in this array
let scoreCount = document.getElementById("score");  //Stores the score
let failedAttemptsCount = document.getElementById("failedAttempts");//Store the number of failed attempts
let numOfFlippedTiles = 0;//tracks the number of flipped over tiles
let numOfDisabledTiles = 0;//Tracks the number of disabled tiles
let index1;
let index2;
const NUMBER_OF_IMAGES = imagesArray.length;

//Initialise the score to 0
scoreCount.value = 0;
//Initialise failed attempts to 0
failedAttemptsCount.value = 0;


/*Test if two images match*/

const isMatch = ()=> {

    //Sharing a class name makes the images match
    if(imagesArray[index1].className === imagesArray[index2].className){

        return true;
    }else{

        return false;
    }
}

/*Updates the board if there was a match*/
const updateForMatch = ()=>{
    //update the score
    scoreCount.value += 1;
    //Set the displays of the tiles to none and the images which matched
    imagesArray[index1].style.display = "none";
    tilesArray[index1].style.display = "none";
    imagesArray[index2].style.display = "none";
    tilesArray[index2].style.display = "none";
    //Reset the flipped tiles to zero
    numOfFlippedTiles = 0;
    //adjust number of disabled tiles
    numOfDisabledTiles += 2;

}

/*Updates the board when no match is found */
const updateForNoMatch = ()=>{

    //Update failed attempts
    failedAttemptsCount.value += 1;
    //Hide the images again
    imagesArray[index1].style.display = "none";
    imagesArray[index2].style.display = "none";
    //Reset the number of flipped tiles
    numOfFlippedTiles = 0;
}

/*This method is called when a tile is clicked and it will test the number of tiles clicked,
if the tiles match and whether to increment or decrement score and failedAttempts*/

const main = (index)=>{
    
    /*When the number of flipped tiles is less than two
    we can flip the actual tile selected */
    if(numOfFlippedTiles === 0){
        /*This means we are clicking the first tile to compare
        We flip it over and increment flipped tiles*/
        index1 = index; //Track first image
        imagesArray[index].style.display = "block";
        numOfFlippedTiles++;

    }else if(numOfFlippedTiles === 1){

        /*We have clicked the second tile to compare
        We want to flip this also */
        index2 = index;// Track second index
        imagesArray[index].style.display = "block";
        numOfFlippedTiles++;

        /*Do the images match*/
        if(isMatch()){
          
            updateForMatch();

        }else{
            
            updateForNoMatch();
        }

    }
 
}

/*The game should be played while we some tiles still have a block display
and not all are disabled */

do{

    for(let k = 0;k < NUMBER_OF_IMAGES;k++){

        tilesArray[k].onclick = ()=>{

            main(k);
        }
    }
}while(numOfDisabledTiles < NUMBER_OF_IMAGES );


