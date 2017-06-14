'use strict';

//constructore for the stores

function SetStore(name, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer) {
  this.name = name;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
}

// to get the number of cookies purchased per hour
SetStore.prototype.cookiesPurchased = function cookiesPurchased() {
  return Math.floor(this.avgCookiesPerCustomer * this.customersPerHour());
};

//to get the number of customers per hour
SetStore.prototype.customersPerHour = function customersPerHour() {
  return (Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers;
};


// adding the TOTAL number of cookies to an array
Location = [];
SetStore.prototype.locationCookies = function locationCookies() {
  for (var i = 0; i < 15; i++) {
    return Location.push(this.cookiesPurchased())[i];
  }
};

// Creating stores

var firstAndPike = new SetStore('First and Pike', 12, 45, 10);
var seatacAirport = new SetStore('Seatac Airport', 17, 33, 42);
var seattleCenter = new SetStore('Seattle Center', 23, 54, 36);
var capitolHill = new SetStore('Capitol Hill', 9, 54, 36);
var alki = new SetStore('Alki', 12, 41, 36);

console.log(firstAndPike);
console.log(seatacAirport);
console.log(seattleCenter);
console.log(capitolHill);
console.log(alki);

var storeNames = ['First And Pike', 'Seatac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];

parent = document.getElementById('firstLocation');

var table = document.createElement('table');
table.style.border = 'solid';

var row;
var td;
var obj = ''; // to set it to the emty table box at the begenning of the table

//making the header row
for (var i = 0; i < 16; i++) {
  if (i === 0) {
    var th = document.createElement('th');
    td = document.createElement('td');
    td.textContent = obj;
    th.appendChild(td);
    table.appendChild(th);
    parent.appendChild(table);
  } else {
    if (i < 7) {
      th = document.createElement('th');
      td = document.createElement('td');
      td.textContent = i + 5 + ' am';
      td.style.textAlign = 'center';
      th.appendChild(td);
      table.appendChild(th);
      parent.appendChild(table);
    } else if (i > 7) {
      if (i == 15) {
        th = document.createElement('th');
        td = document.createElement('td');
        td.textContent = 'Daily Location Total';
        td.style.textAlign = 'center';
        th.appendChild(td);
        table.appendChild(th);
        parent.appendChild(table);
      } else {
        th = document.createElement('th');
        td = document.createElement('td');
        td.textContent = i - 7 + ' pm';
        td.style.textAlign = 'center';
        th.appendChild(td);
        table.appendChild(th);
        parent.appendChild(table);
      }
    } else {
      th = document.createElement('th');
      td = document.createElement('td');
      td.textContent = i + 5 + ' pm';
      td.style.textAlign = 'center';
      th.appendChild(td);
      table.appendChild(th);
      parent.appendChild(table);
    }
  }
}
//making the left row for store names
for (i = 0; i < 5; i++) {
  row = document.createElement('tr');
  td = document.createElement('td');
  td.textContent = storeNames[i];
  td.style.textAlign = 'center';
  row.appendChild(td);
  table.appendChild(row);
  parent.appendChild(table);
//making the rest of the table
  var columns = 15;
  while (columns > 0) {
    td = document.createElement('td');
    td.style.border = 'solid';
    td.style.textAlign = 'center';
    td.textContent = firstAndPike.cookiesPurchased();
    row.appendChild(td);
    table.appendChild(row);
    parent.appendChild(table);
    columns--;
  }
}
