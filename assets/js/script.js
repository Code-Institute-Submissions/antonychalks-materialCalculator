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
studWallForm.addEventListener('submit', studWall);

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
floorForm.addEventListener('submit', floor);

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
floorBoardForm.addEventListener('submit', floorBoard);

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
    let plasterboardTotal = document.getElementById("total-plasterboards");
    plasterboardTotal.innerHTML = totalBoard;
    //sets the span to correct amount of bags
    let multiBagTotal = document.getElementById("total-multi-bags");
    multiBagTotal.innerHTML = totalMultiFinish;
}
let plasteringWallForm = document.getElementById('plastering-wall');
plasteringWallForm.addEventListener('submit', wallPlaster);






