
let year = prompt("What year where you born?");

let statement = ("You were born the year of the "); 

let rat = [
    "1924",
    "1936",
    "1948",
    "1960",
    "1972",
    "1984",
    "1996",
    "2008",
    "2020",
    "2032",
];

let ox = [
    "1925", 
    "1937",
    "1949",
    "1961",
    "1973",
    "1984",
    "1997",
    "2009",
    "2021",
    "2032",
];

let tiger = [
    "1926", 
    "1938",
    "1950",
    "1962",
    "1974",
    "1985",
    "1998",
    "2010",
    "2022",
    "2033",
];

let rabbit = [
    "1927", 
    "1939",
    "1951",
    "1963",
    "1975",
    "1986",
    "1999",
    "2011",
    "2023",
    "2034",
];

let dragon = [
    "1928", 
    "1940",
    "1953",
    "1964",
    "1976",
    "1987",
    "2000",
    "2012",
    "2024",
    "2035",
];

let snake = [
    "1929", 
    "1941",
    "1954",
    "1965",
    "1977",
    "1988",
    "2001",
    "2013",
    "2025",
    "2036",
];

let horse = [
    "1930", 
    "1942",
    "1955",
    "1966",
    "1978",
    "1989",
    "2002",
    "2014",
    "2026",
    "2037",
];

let sheep = [
    "1931", 
    "1943",
    "1956",
    "1967",
    "1979",
    "1990",
    "2003",
    "2015",
    "2027",
    "2038",
];

let monkey = [
    "1932", 
    "1944",
    "1957",
    "1968",
    "1980",
    "1991",
    "2004",
    "2016",
    "2028",
    "2039",
];

let rooster = [
    "1933", 
    "1945",
    "1958",
    "1967",
    "1981",
    "1992",
    "2005",
    "2017",
    "2029",
    "2040",
];

let dog = [
    "1934", 
    "1945",
    "1959",
    "1968",
    "1982",
    "1993",
    "2006",
    "2018",
    "2030",
    "2041",
];

let pig = [
    "1935", 
    "1946",
    "1960",
    "1969",
    "1983",
    "1994",
    "2007",
    "2019",
    "2031",
    "2042",
];



if (rat.includes(year)) {
    alert (statement + "Rat");
} else if (ox.includes(year))  {
    alert (statement + "Ox");
} else if (tiger.includes(year))  {
    alert (statement + "Tiger");
} else if (rabbit.includes(year))  {
    alert (statement + "Rabbit");
} else if (dragon.includes(year))  {
    alert (statement + "Dragon");
} else if (snake.includes(year))  {
    alert (statement + "Snake");
} else if (horse.includes(year))  {
    alert (statement + "Horse");
} else if (monkey.includes(year))  {
    alert (statement + "Monkey");
} else if (rooster.includes(year))  {
    alert (statement + "Rooster");
} else if (dog.includes(year))  {
    alert (statement + "Dog");
} else if (pig.includes(year))  {
    alert (statement + "Pig");
}