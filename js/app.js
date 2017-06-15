'use strict';

//constructore for the stores

function SetStore(name, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer) {
  this.name = name;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.cookies = [];
}

// to get the number of cookies purchased per hour
SetStore.prototype.cookiesPurchased = function() {
  return Math.floor(this.avgCookiesPerCustomer * this.customersPerHour());
};

//to get the number of customers per hour
SetStore.prototype.customersPerHour = function() {
  return (Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers;
};

// adding the TOTAL number of cookies to an array
SetStore.prototype.locationCookies = function() {
  for (var i = 0; i < 15; i++) {
    this.cookies.push(this.cookiesPurchased())[i];
  }
};
// Creating stores

var firstAndPike = new SetStore('First and Pike', 12, 45, 10);
var seatacAirport = new SetStore('Seatac Airport', 17, 33, 42);
var seattleCenter = new SetStore('Seattle Center', 23, 54, 36);
var capitolHill = new SetStore('Capitol Hill', 9, 54, 36);
var alki = new SetStore('Alki', 12, 41, 36);

var storeNames = [firstAndPike, seatacAirport, seattleCenter, capitolHill, alki];

parent = document.getElementById('firstLocation');

var table = document.createElement('table');

table.style.border = 'solid';

var row;
var td;
var obj = ''; // to set it to the emty table box at the begenning of the table

//making the header row for the time

for (var i = 0; i < 16; i++) {
  if (i === 0) {
    var th = document.createElement('th');
    td = document.createElement('td');
    td.textContent = obj;
    th.appendChild(td);
    table.appendChild(th);
    parent.appendChild(table);
  } else {
    if (i < 7) { // until 11 am
      th = document.createElement('th');
      td = document.createElement('td');
      td.textContent = i + 5 + ' am';
      td.style.textAlign = 'center';
      th.appendChild(td);
      table.appendChild(th);
      parent.appendChild(table);
    } else if (i > 7) {
      if (i == 15) { // for the last box in the table: Daily Location Total
        th = document.createElement('th');
        td = document.createElement('td');
        td.textContent = 'Daily Location Total';
        td.style.textAlign = 'center';
        th.appendChild(td);
        table.appendChild(th);
        parent.appendChild(table);
      } else { // for boxes from 1pm to 7pm
        th = document.createElement('th');
        td = document.createElement('td');
        td.textContent = i - 7 + ' pm';
        td.style.textAlign = 'center';
        th.appendChild(td);
        table.appendChild(th);
        parent.appendChild(table);
      }
    } else { // for the box of 12 pm
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
var totalVertical = [];
var cases = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function render() {
  for (i = 0; i < storeNames.length; i++) {
    var sum = 0;
    storeNames[i].locationCookies(); //set up cookies total for each store.
    console.log('8888888888');
    console.log(firstAndPike.cookies);
    ///////////////////////////////////////////////
    for (var k = 0; k < storeNames[i].cookies; k++) {
      all(cases[k]).push(storeNames[i].cookies[k]);
    }

    //first column in the row: adding store name to the table
    row = document.createElement('tr');
    td = document.createElement('td');
    td.textContent = storeNames[i].name;
    console.log('=============');
    console.log(storeNames[i].name);
    row.appendChild(td);
    //rest of the columns excluding the total
    for (var j = 0; j < 14; j++) {
      td = document.createElement('td');
      td.textContent = storeNames[i].cookies[j]; //adding the number of cookies from the array
      totalVertical.push(storeNames[i].cookies[j]);
      sum += storeNames[i].cookies[j];
      console.log(sum);
      row.appendChild(td);
    }
    td = document.createElement('td');
    td.textContent = sum;
    row.appendChild(td);
    console.log(sum);
    table.appendChild(row);
  }
}
render();

var stores = ['first and pike', 'capitol hill', 'seattle center', 'seatac airport', 'alki'];

// event
var addStore = document.getElementById('storesForm');

addStore.addEventListener('submit', function(event) {

  event.preventDefault();
  var name = event.target.store.value;
  var minHourlyCustomers = event.target.minHourlyCustomers.value;
  var maxHourlyCustomers = event.target.maxHourlyCustomers.value;
  var avgCookiesPerCustomer = event.target.avgCookiesPerCustomer.value;

  var newStore = new SetStore(name, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer);
  //condition to not enter the same location twice
  if (stores.includes(name.toLowerCase())) {
    alert('This store is already in the database!');
  } else {
    storeNames = []; //make the array empty so it won't load the previous locations
    stores.push(name);
    storeNames.push(newStore);
    render();
  }
});
