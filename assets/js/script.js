let title = document.getElementById("title").innerHTML;



//Carpentry
function lengthCal(num) {
    let timberLength = "";
    let maxTimberLength = document.getElementById("MTL").value - 300;
    let totalLength = num;
    let numOfLengths = Math.ceil(totalLength / maxTimberLength);
    let i = 1200;
    for (i = 1200; i < totalLength; i += 300) {
        if (i > maxTimberLength) {
            break;
        }
    }
    timberLength = [i, numOfLengths];
    return timberLength;
}

function studWall(event) {
    event.preventDefault();
    //Imports the elements from the DOM
    let height = document.getElementById("SW-Height").value;
    let width = document.getElementById("SW-Width").value;
    let studCenters = document.getElementById("SC").value;
    let studThickness = document.getElementById("ST").value;
    let nogginRows = document.getElementById("NR").value;
    let loadBearing = document.getElementById("LB");

    //Works out how high the studs are and how many studs are needed by dividing the rooms width by the stud centers then adding one at the end.
    let studHeight = height - studThickness * 2;
    let numOfStuds = Math.floor(width / studCenters) + 1;

    //If the wall is loadbearing it needs an extra header and sole plate + 2 extra studs.
    let numOfHeaderSole = 2;
    if (loadBearing.checked == true) {
        numOfHeaderSole = numOfHeaderSole * 2;
        numOfStuds = numOfStuds + 2;
    }

    //Works out the length of each noggin
    let nogginLength = (studCenters - studThickness) * nogginRows;

    //Works out what lengths of timber cover the studs+noggins
    let studNogginLength = studHeight + nogginLength;
    let studNogginTimberLength = lengthCal(studNogginLength)[0];
    numOfStuds = numOfStuds * lengthCal(studNogginLength)[1];

    //Works out what length of timber is needed for header and sole plate.
    let headerSoleTimberLength = lengthCal(width)[0];
    numOfHeaderSole = numOfHeaderSole * lengthCal(width)[1];



    //Works out the total of all lengths needed for studs and noggins.
    let mmStudNogginTotal = studNogginTimberLength * numOfStuds;

    //Works out the total length of the header and sole plate.
    let mmHeadSoleTotal = headerSoleTimberLength * numOfHeaderSole;

    //Works out the total length of timber in mm.
    let mmTotal = mmStudNogginTotal + mmHeadSoleTotal;

    //Works out the total length of timber in meters.
    let total = mmTotal / 1000;

    //Sets the inner html of SW-total-length to the amount of timber needed in meters so it is displayed to the user.
    let studWallTimberLength = document.getElementById("SW-total-length");
    studWallTimberLength.innerHTML = total;

    //Sets the inner HTML of number the number-of-studs Span to show how many studs are needed.
    let numOfStudsSpan = document.getElementById("num-of-studs");
    numOfStudsSpan.innerHTML = numOfStuds;

    //Sets the inner HTML of number the header-sole-timber-length Span to show what length timber is needed for the studs and noggins.
    let studNogginTimberLengthSpan = document.getElementById("stud-noggin-timber-length");
    studNogginTimberLengthSpan.innerHTML = studNogginTimberLength;

    //Sets the inner HTML of number the number-of-head-sole Span to show how many headers and sole plates are needed.
    let numOfHeaderSoleSpan = document.getElementById("num-of-header-sole");
    numOfHeaderSoleSpan.innerHTML = numOfHeaderSole;

    //Sets the inner HTML of number the header-sole-timber-length Span to show what length timber is needed for the header and sole plates.
    let headerSoleTimberLengthSpan = document.getElementById("header-sole-timber-length");
    headerSoleTimberLengthSpan.innerHTML = headerSoleTimberLength;


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
    let numOfJoists = Math.floor(width / joistCenters) + 1;
    let blockLength = joistCenters - joistThickness;



    //Works out what lengths of timber cover the studs+noggins
    let joistBlockLength = (length + blockLength) * blockRows;
    let joistBlockTimberLength = lengthCal(joistBlockLength)[0];
    numOfJoists = numOfJoists * lengthCal(joistBlockLength)[1];



    //Adds all the lengths of timber together.
    let mmTotal = joistBlockTimberLength;
    //Times by 1000 to convert from millimeters to meters
    let total = mmTotal / 1000;
    //Sets the inner html of f-total-length to the amount of timber needed in meters so it is displayed to the user.
    let joistTimberLength = document.getElementById("f-total-length");
    joistTimberLength.innerHTML = total;

    //Sets the inner HTML of number the number-of-studs Span to show how many studs are needed.
    let numOfJoistsSpan = document.getElementById("num-of-joists");
    numOfJoistsSpan.innerHTML = numOfJoists;

    //Sets the inner HTML of number the header-sole-timber-length Span to show what length timber is needed for the studs and noggins.
    let joistBlockTimberLengthSpan = document.getElementById("joist-block-timber-length");
    joistBlockTimberLengthSpan.innerHTML = joistBlockTimberLength;
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
    let areaOfRoom = length * width;
    let areaOfBoard = boardLength * boardwidth;

    //Works out how many boards are needed
    let boardQty = areaOfRoom / areaOfBoard;

    //Rounds it up as you can't purchase half of a board.
    let total = Math.ceil(boardQty);

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
    let metreSqAreaOfWall = (height / 1000) * (width / 1000);
    let multiFinishQty = metreSqAreaOfWall / 10;
    let metreSqAreaOfWallSpan = document.getElementById("metre-sq-area-of-wall");
    metreSqAreaOfWallSpan.innerHTML = metreSqAreaOfWall + "<sup>2</sup>";
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
    //Returns the value of the ceiling's m2
    let metreSqAreaOfCeilingSpan = document.getElementById("metre-sq-area-of-ceiling");
    metreSqAreaOfCeilingSpan.innerHTML = metreSqAreaOfCeiling;
}
let plasteringCeilingForm = document.getElementById('plastering-ceiling');

//Decorating
function paint(event) {
    event.preventDefault();
    //Imports the elements from the DOM
    let length = document.getElementById("PL").value;
    let width = document.getElementById("PW").value;
    let paintColor = document.getElementById("PC").value;

    //works out the area of the space that needs painting.
    let mmArea = length * width;
    let area = mmArea / 1000;

    let mlPaintAmount = area * 100;
    let paintAmount = mlPaintAmount / 1000;

    //rounds up as you can only buy whole products.
    let totalPaint = Math.ceil(paintAmount);
    //sets the span to correct amount of boards
    let paintTotal = document.getElementById("total-paint");
    paintTotal.innerHTML = totalPaint;
    //sets the span to correct amount of bags
    let paintColorSpan = document.getElementById("PC-span");
    paintColorSpan.innerHTML = paintColor;
}
let paintForm = document.getElementById('paint');

function wallpaper(event) {
    event.preventDefault();
    //Imports the elements from the DOM
    let length = document.getElementById("WpL").value;
    let width = document.getElementById("WpW").value;

    //works out the area of the space that needs wallpapering.
    let mmArea = length * width;
    let area = mmArea / 1000;

    let mmRollArea = 10000 * 530;
    let rollArea = mmRollArea / 1000;

    //rounds up as you can only buy whole products.
    let totalRolls = Math.ceil(area / rollArea);

    //Working out how much paste is needed
    let paste = Math.ceil(totalRolls / 3) * 2.5;
    //sets the span to correct amount of boards
    let wallpaperTotal = document.getElementById("total-wallpaper");
    wallpaperTotal.innerHTML = totalRolls;
    //sets the span to correct amount of bags
    let pasteTotal = document.getElementById("wallpaper-paste");
    pasteTotal.innerHTML = paste;
}
let wallpaperForm = document.getElementById('wallpaper');

if (title === "Carpentry") {
    floorBoardForm.addEventListener('submit', floorBoard);
    floorForm.addEventListener('submit', floor);
    studWallForm.addEventListener('submit', studWall);
} else if (title === "Plastering") {
    plasteringWallForm.addEventListener('submit', wallPlaster);
    plasteringCeilingForm.addEventListener('submit', ceilingPlaster);
} else if (title === "Decorating") {
    paintForm.addEventListener('submit', paint);
    wallpaperForm.addEventListener('submit', wallpaper);
}









