
// Ask user to enter his date of birth. Display the user's [astrological sign]
let astroSign = [
  "Aquarius",
  "Pisces",
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
];
let startDateRange = [
  "01-01",
  "01-20",
  "02-19",
  "03-21",
  "04-20",
  "05-21",
  "06-21",
  "07-23",
  "08-23",
  "09-23",
  "10-23",
  "11-22",
  "12-22",
  "12-31",
];
const sign = prompt("Enter date of birth in MM-DD format");
var Astrological_sign = "";
if (new Date(sign) >= new Date(startDateRange[0]) && new Date(sign) < new Date(startDateRange[1])) {
  Astrological_sign = astroSign[11];
} else if (new Date(sign) >= new Date(startDateRange[1]) && new Date(sign) < new Date(startDateRange[2])) {
  Astrological_sign = astroSign[0];
} else if (new Date(sign) >= new Date(startDateRange[2]) && new Date(sign) < new Date(startDateRange[3])) {
  Astrological_sign = astroSign[1];
} else if (new Date(sign) >= new Date(startDateRange[3]) && new Date(sign) < new Date(startDateRange[4])) {
  Astrological_sign = astroSign[2];
} else if (new Date(sign) >= new Date(startDateRange[4]) && new Date(sign) < new Date(startDateRange[5])) {
  Astrological_sign = astroSign[3];
} else if (new Date(sign) >= new Date(startDateRange[5]) && new Date(sign) < new Date(startDateRange[6])) {
  Astrological_sign = astroSign[4];
} else if (new Date(sign) >= new Date(startDateRange[6]) && new Date(sign) < new Date(startDateRange[7])) {
  Astrological_sign = astroSign[5];
} else if (new Date(sign) >= new Date(startDateRange[7]) && new Date(sign) < new Date(startDateRange[8])) {
  Astrological_sign = astroSign[6];
} else if (new Date(sign) >= new Date(startDateRange[8]) && new Date(sign) < new Date(startDateRange[9])) {
  Astrological_sign = astroSign[7];
} else if (new Date(sign) >= new Date(startDateRange[9]) && new Date(sign) < new Date(startDateRange[10])) {
  Astrological_sign = astroSign[8];
} else if (new Date(sign) >= new Date(startDateRange[10]) && new Date(sign) < new Date(startDateRange[11])) {
  Astrological_sign = astroSign[9];
} else if (new Date(sign) >= new Date(startDateRange[11]) && new Date(sign) < new Date(startDateRange[12])) {
  Astrological_sign = astroSign[10];
} else if (new Date(sign) >= new Date(startDateRange[12]) && new Date(sign) <= new Date(startDateRange[13])) {
  Astrological_sign = astroSign[11];
}

alert ("Your astrological sign is " + Astrological_sign);