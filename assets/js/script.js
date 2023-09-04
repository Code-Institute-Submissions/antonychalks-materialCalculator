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
    let total = mmTotal/100;
    let studWallTimberLength = document.getElementById("SW-total-length");
    studWallTimberLength.innerHTML = total;

}
let studWallForm = document.getElementById('stud-wall');
studWallForm.addEventListener('submit', studWall);

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
    let total = mmTotal / 100;
    let joistTimberLength = document.getElementById("f-total-length");
    joistTimberLength.innerHTML = total;

}
let floorForm = document.getElementById('floor');
floorForm.addEventListener('submit', floor);


