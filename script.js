let mikeAverage = (116 + 94 + 123) / 3;
let johnAverage = (89 + 120 + 103) / 3;
let maryAverage = (97 + 134 + 105) / 3;

if (mikeAverage > johnAverage && mikeAverage > maryAverage) {
  console.log(`Mike's team wins with '${mikeAverage}' points.`);
} else if (johnAverage > mikeAverage && johnAverage > maryAverage) {
  console.log(`John's team wins with '${johnAverage}' points.`);
} else if (maryAverage > mikeAverage && maryAverage > johnAverage) {
  console.log(`Mary's team wins with '${maryAverage}' points.`);
} else if (mikeAverage == johnAverage && maryAverage < johnAverage) {
  console.log(`Mike's and John's teams win with '${mikeAverage}' points.`);
} else if (mikeAverage == maryAverage && johnAverage < mikeAverage) {
  console.log(`Mike's and Mary's teams win with '${mikeAverage}' points.`);
} else if (maryAverage == johnAverage && mikeAverage < maryAverage) {
  console.log(`Mary's and John's teams win with '${maryAverage}' points.`);
} else {
  console.log(`There is a draw.`);
}
