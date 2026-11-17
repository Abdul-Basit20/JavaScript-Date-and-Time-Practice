// Date & time
// allows to work with dates and times

// Current Date & Time
const currentDate = new Date();
console.log(currentDate);

// Creating a Specific Date
const myDate = new Date("2024-08-19");
console.log(myDate);

// Creating Date With Time
const dateTime = new Date("2025-09-16T10:09:08");
console.log(dateTime);

// Getter Methods: "used to retrieve specific information from an existing Date"

// Getting Date values
// get the year:
const year = currentDate.getFullYear();
console.log("Current Year: ", year);

// Get the Month:
const month = currentDate.getMonth() + 1;
console.log("Current Month: ", month);

// get the Date:
const date = currentDate.getDate();
console.log("Current Date: ", date);

// Get the Day:
const day = currentDate.getDay();
console.log("Current Day: ", day);

// Getting Time values
// get the hours:
const hour = currentDate.getHours();
console.log("Current Hour: ", hour);

// Get the Minutes:
const minutes = currentDate.getMinutes();
console.log("Current Minutes: ", minutes);

// get the Seconds:
const seconds = currentDate.getSeconds();
console.log("Current Seconds: ", seconds);

// Get Milliseconds:
const milliseconds = currentDate.getMilliseconds();
console.log("Milliseconds: ", milliseconds);

// Setter Methods: "used to modify or change specific values of an existing Date"
const changeDate = new Date("2024-09-18");
console.log(changeDate);

// Change the Year:
changeDate.setFullYear("2026");
console.log("Updated year is: ", changeDate);

// Change the Month:
changeDate.setMonth("3");
console.log("Updated month is: ", changeDate);

// Change the Date of the Month:
changeDate.setDate("10");
console.log("Updated day: ", changeDate);

// change the hour:
changeDate.setHours("12");
console.log("Updated hours is: ", changeDate);

// Change the Minutes:
changeDate.setMinutes("15");
console.log("Updated minutes is: ", changeDate);

// change the seconds:
changeDate.setSeconds("30");
console.log("Updated seconds is: ", changeDate);

// Date Formatting: "converting a Date object into a readable string"
const formattedDate = new Date("2025-06-10T08:30:00");

// Display Only the Date:
console.log("Appointment Date: ", formattedDate.toDateString());

// Display only the time:
console.log("Appointment Time: ", formattedDate.toTimeString());

// Format Date According to Locale:
console.log(formattedDate.toLocaleDateString());

// Format Time According to Locale:
console.log(formattedDate.toLocaleTimeString());

// Display Both Date & Time:
console.log(formattedDate.toLocaleString());

// Convert Date Into ISO Format:
console.log(formattedDate.toISOString());

// Customize Time:
let mainDate = new Date("2025-09-16T14:30:45");

let formatter = new Intl.DateTimeFormat({
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});

console.log(formatter.format(mainDate));
