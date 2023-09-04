//Carpentry
function studWall(event){
    event.preventDefault();

    let height = document.getElementById("SW-Height").value;
    let width = document.getElementById("SW-Width").value;
    let studCenters = document.getElementById("SC").value;
    let studThickness = document.getElementById("ST").value;
    let nogginRows = document.getElementById("NR").value;

    let studHeight = height-studThickness*2;
    console.log("studHeight: ", studHeight)
    let numOfStuds = Math.floor(width/studCenters)+1;
    console.log("numOfStuds: ", numOfStuds)
    let nogginLength = studCenters-studThickness;
    console.log("nogginLength: ", nogginLength)

    let mmStudTotal = studHeight*numOfStuds;
    let mmNogginTotal = (nogginLength*numOfStuds)*nogginRows;
    let mmHeadSoleTotal = width*2;
    let mmTotal = mmStudTotal+mmNogginTotal+mmHeadSoleTotal;
    let total = mmTotal/1000;
    let studWallTimberLength = document.getElementById("SW-total-length");
    studWallTimberLength.innerHTML = total;

}


function floor(event) {
    event.preventDefault();

    let length = document.getElementById("FlL").value;
    let width = document.getElementById("FlW").value;
    let joistCenters = document.getElementById("JC").value;
    let joistThickness = document.getElementById("JT").value;
    let blockRows = document.getElementById("BR").value;

    let joistLength = length-(joistThickness*2);
    let numOfJoists = Math.floor(width /joistCenters) + 1;
    let blockLength = joistCenters-joistThickness;

    let mmTotal = (joistLength * numOfJoists) + (blockLength * numOfJoists * blockRows) + (width * 2);
    let total = mmTotal / 1000;
    let joistTimberLength = document.getElementById("f-total-length");
    joistTimberLength.innerHTML = total;

}


/*
*This function is used for calculating floor boards in a room
*/
function floorBoard(event) {
    event.preventDefault();

    let length = document.getElementById("FbL").value;
    let width = document.getElementById("FbW").value;
    let boardLength = document.getElementById("Board-Length").value;
    let boardwidth = document.getElementById("Board-Width").value;

    let areaOfRoom = length*width;
    let areaOfBoard = boardLength*boardwidth;
    
    let boardQty = areaOfRoom/areaOfBoard;
    let total = Math.ceil(boardQty)
    let fbTotal = document.getElementById("FB-total");
    fbTotal.innerHTML = total;

}

//Plastering
function wallPlaster(event) {
    event.preventDefault();

    let height = document.getElementById("PWH").value;
    let width = document.getElementById("PWW").value;
    let boardLength = document.getElementById("PBL").value;
    let boardWidth = document.getElementById("PBW").value;
    //works out plasterboard amount
    let areaOfWall = height * width;
    let areaOfBoard = boardLength * boardWidth;
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

let floorBoardForm = document.getElementById('floor-board');
let plasteringWallForm = document.getElementById('plastering-wall');
let floorForm = document.getElementById('floor');
let studWallForm = document.getElementById('stud-wall');

floorBoardForm.addEventListener('submit', floorBoard);
plasteringWallForm.addEventListener('submit', wallPlaster);
floorForm.addEventListener('submit', floor);
studWallForm.addEventListener('submit', studWall);
