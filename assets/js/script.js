let title = document.getElementById("title").innerHTML;

function onLoad(){
    console.log(title);
}
//Carpentry
function studWall(event){
    event.preventDefault();
    //Imports the elements from the DOM
    let height = document.getElementById("SW-Height").value;
    let width = document.getElementById("SW-Width").value;
    let studCenters = document.getElementById("SC").value;
    let studThickness = document.getElementById("ST").value;
    let nogginRows = document.getElementById("NR").value;
    //Works out how high the studs are and how many studs are needed by dividing the rooms width by the stud centers then adding one at the end.
    let studHeight = height-studThickness*2;
    let numOfStuds = Math.floor(width/studCenters)+1;
    //Works out the length of each noggin
    let nogginLength = studCenters-studThickness;
    //Works out the total length of all the studs.
    let mmStudTotal = studHeight*numOfStuds;
    //Works out the total length of all the noggins.
    let mmNogginTotal = (nogginLength*numOfStuds)*nogginRows;
    //Works out the total length of the header and sole plate.
    let mmHeadSoleTotal = width*2;
    //Works out the total length of timber in mm.
    let mmTotal = mmStudTotal+mmNogginTotal+mmHeadSoleTotal;
    //Works out the total length of timber in meters.
    let total = mmTotal/1000;
    //Sets the inner html of SW-total-length to the amount of timber needed in meters so it is displayed to the user.
    let studWallTimberLength = document.getElementById("SW-total-length");
    studWallTimberLength.innerHTML = total;

}
let studWallForm = document.getElementById('stud-wall');


function floor(event) {
    event.preventDefault();
    //Imports the elements from the DOM
    let length = document.getElementById("FlL").value;
    let width = document.getElementById("FlW").value;
    let joistCenters = document.getElementById("JC").value;
    let joistThickness = document.getElementById("JT").value;
    let blockRows = document.getElementById("BR").value;
    //Works out how many joists are needed by dividing the rooms width by the joist centers then adding one at the end.
    let numOfJoists = Math.floor(width /joistCenters) + 1;
    let blockLength = joistCenters-joistThickness;
    //Adds all the lengths of timber together.
    let mmTotal = (length * numOfJoists) + (blockLength * numOfJoists * blockRows) + (width * 2);
    //Times by 1000 to convert from millimeters to meters
    let total = mmTotal / 1000;
    //Sets the inner html of f-total-length to the amount of timber needed in meters so it is displayed to the user.
    let joistTimberLength = document.getElementById("f-total-length");
    joistTimberLength.innerHTML = total;

}
let floorForm = document.getElementById('floor');


/*
*This function is used for calculating floor boards in a room
*/
function floorBoard(event) {
    event.preventDefault();
    //Imports the elements from the DOM
    let length = document.getElementById("FbL").value;
    let width = document.getElementById("FbW").value;
    let boardLength = document.getElementById("Board-Length").value;
    let boardwidth = document.getElementById("Board-Width").value;

    //works out the area of the room and board
    let areaOfRoom = length*width;
    let areaOfBoard = boardLength*boardwidth;
    //Works out how many boards are needed
    let boardQty = areaOfRoom/areaOfBoard;
    //Rounds it up as you can't purchase half of a board.
    let total = Math.ceil(boardQty)
    //Sets the inner html of FB-total to the number of boards so it is displayed to the user.
    let fbTotal = document.getElementById("FB-total");
    fbTotal.innerHTML = total;

}
let floorBoardForm = document.getElementById('floor-board');


//Plastering
function wallPlaster(event) {
    event.preventDefault();
    //Imports the elements from the DOM
    let height = document.getElementById("PWH").value;
    let width = document.getElementById("PWW").value;
    let boardLength = document.getElementById("PBL").value;
    let boardWidth = document.getElementById("PBW").value;
    //works out the area of the room and board
    let areaOfWall = height * width;
    let areaOfBoard = boardLength * boardWidth;
    //works out plasterboard amount
    let boardQty = areaOfWall / areaOfBoard;
    //works out bags of plaster
    let metreSqAreaOfWall = (height/1000)*(width/1000);
    let multiFinishQty = metreSqAreaOfWall/10;

    //rounds up as you can only buy whole products.
    let totalBoard = Math.ceil(boardQty);
    let totalMultiFinish = Math.ceil(multiFinishQty);
    //sets the span to correct amount of boards
    let plasterboardTotal = document.getElementById("w-total-plasterboards");
    plasterboardTotal.innerHTML = totalBoard;
    //sets the span to correct amount of bags
    let multiBagTotal = document.getElementById("w-total-multi-bags");
    multiBagTotal.innerHTML = totalMultiFinish;
}
let plasteringWallForm = document.getElementById('plastering-wall');

function ceilingPlaster(event) {
    event.preventDefault();
    //Imports the elements from the DOM
    let length = document.getElementById("PCL").value;
    let width = document.getElementById("PCW").value;
    let boardLength = document.getElementById("CPBL").value;
    let boardWidth = document.getElementById("CPBW").value;
    let coving = document.getElementById("coving");
    console.log(length, width, boardLength, boardWidth)

    //works out the area of the room and board
    let areaOfCeiling = length * width;
    let areaOfBoard = boardLength * boardWidth;
    //works out plasterboard amount
    let boardQty = areaOfCeiling / areaOfBoard;
    //works out bags of plaster
    let metreSqAreaOfCeiling = (length / 1000) * (width / 1000);
    let multiFinishQty = metreSqAreaOfCeiling / 10;
    //coving if statement
    if (coving.checked == true) {
        let covingBox = document.getElementById("coving-box");
        let covingSpan = document.getElementById("coving-span");
        covingBox.removeAttribute("class");
        let perimeter = ((length * 2) + (width * 2)) / 1000;
        covingSpan.innerHTML = `Coving: ${perimeter}m`;
    } else {
        let covingBox = document.getElementById("coving-box");
        let covingSpan = document.getElementById("coving-span");
        covingBox.setAttribute("class", "unstyled");
        covingSpan.innerHTML = "";
    }

    //rounds up as you can only buy whole products.
    let totalBoard = Math.ceil(boardQty);
    let totalMultiFinish = Math.ceil(multiFinishQty);
    //sets the span to correct amount of boards
    let plasterboardTotal = document.getElementById("c-total-plasterboards");
    plasterboardTotal.innerHTML = totalBoard;
    //sets the span to correct amount of bags
    let multiBagTotal = document.getElementById("c-total-multi-bags");
    multiBagTotal.innerHTML = totalMultiFinish;
}
let plasteringCeilingForm = document.getElementById('plastering-ceiling');



if (title === "Carpentry"){
    floorBoardForm.addEventListener('submit', floorBoard);
    floorForm.addEventListener('submit', floor);
    studWallForm.addEventListener('submit', studWall);
} else if (title === "Plastering"){
    plasteringWallForm.addEventListener('submit', wallPlaster);
    plasteringCeilingForm.addEventListener('submit', ceilingPlaster);
}






