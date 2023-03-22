function calcdemeritPoints(carSpeed){

const speedLimit = 70;

let demeritPoints = 0;
if (carSpeed > speedLimit) {
    demeritPoints = Math,floor((carSpeed - speedLimit) / 5);
}

if (demeritPoints > 12) {
    console.log("License suspended");
} else {
    console.log(`Points: ${demeritPoints}`);
}
}