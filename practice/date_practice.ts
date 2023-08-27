let date_ob = new Date();

// current date
// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);

// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
let year = date_ob.getFullYear();

// current hours
let hours = date_ob.getHours();

// current minutes
let minutes = date_ob.getMinutes();

// current seconds
let seconds = date_ob.getSeconds();

// prints date in YYYY-MM-DD format
console.log(year + "-" + month + "-" + date);

// prints date & time in YYYY-MM-DD HH:MM:SS format
console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);

// prints time in HH:MM format
console.log(hours + ":" + minutes);

/*Getting Current Timestamp
To get the timestamp Date.now() method can be called. Note that this method returns the timestamp in milliseconds. To get the timestamp as seconds we can divide it by 1000. */




let ts = Date.now();

// timestamp in milliseconds
console.log("Timestamp in milliseconds",ts);

// timestamp in seconds
console.log("Timestamp in seconds",Math.floor(ts/1000));



// current timestamp in milliseconds
let ts_2 = Date.now();

let date_ob_2 = new Date(ts);
let date_2 = date_ob.getDate();
let month_2 = date_ob.getMonth() + 1;
let year_2 = date_ob.getFullYear();

// prints date & time in YYYY-MM-DD format
console.log(year_2 + "-" + month_2 + "-" + date_2); 