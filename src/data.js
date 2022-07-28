let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
let d = new Date(Date.now());
let dayName = days[d.getDay()+ 2];

let week = days.slice(d.getDay());
week = week.concat(days.slice(0,d.getDay()));

console.log(week);

// console.log(d.getDay())