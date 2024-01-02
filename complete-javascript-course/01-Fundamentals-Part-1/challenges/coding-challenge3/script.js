const pointsDolphins = [97, 112, 101];
const pointsKoalas = [109, 95, 106];
const scoreDolphins = (pointsDolphins[0] + pointsDolphins[1] + pointsDolphins[2]) / 3;
const scoreKoalas = (pointsKoalas[0] + pointsKoalas[1] + pointsKoalas[2]) / 3;

console.log(`Dolphins score ${pointsDolphins[0]}, ${pointsDolphins[1]} and ${pointsDolphins[2]}. Koalas score ${pointsKoalas[0]}, ${pointsKoalas[1]} and ${pointsKoalas[2]}`)
if (scoreDolphins >= 100 && scoreKoalas >= 100) {
    if (scoreDolphins > scoreKoalas) {
        console.log("Dolphins win the trophy");
    } else if (scoreDolphins === scoreKoalas) {
        console.log("Both win the trophy");
    } else {
        console.log("Koalas win the trophy");
    }
} else {
    console.log("No team wins the trophy")
}



