'use strict';

//constructore for the stores

function SetStore(name, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer) {
  this.name = name;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  // this.cookiesPurchased = function cookiesPurchased() {
  //   return Math.floor(this.avgCookiesPerCustomer * this.customersPerHour());
  // };
  // this.customersPerHour = function customersPerHour() {
  //   return (Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers;
  // };
  // this.locationCookies = function locationCookies() {
  //   for (var i = 0; i < 15; i++) {
  //     Location.push(this.cookiesPurchased())[i];
  //     totale += Location[i];
  //   }
  // };
}

// to get the number of cookies purchased per hour

SetStore.prototype.cookiesPurchased = function cookiesPurchased() {
  return Math.floor(this.avgCookiesPerCustomer * this.customersPerHour());
};

//to get the number of customers per hour

SetStore.prototype.customersPerHour = function customersPerHour() {
  return (Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers;
};


var total = 0;
Location = [];

// adding the TOTAL number of cookies to an array
SetStore.prototype.locationCookies = function locationCookies() {
  for (var i = 0; i < 15; i++) {
    Location.push(this.cookiesPurchased())[i];
    total += Location[i];
  }
};

// Creating stores

var firstAndPike = new SetStore('First and Pike', 12, 45, 10);
var seatacAirport = new SetStore('Seatac Airport', 12, 54, 36);
var seattleCenter = new SetStore('Seattle Center', 12, 54, 36);
var capitolHill = new SetStore('Capitol Hill', 12, 54, 36);
var alki = new SetStore('Alki', 12, 54, 36);

// console.log('==============');
// console.log(cloverdale.cookiesPurchased());

console.log('------------------------');
console.log(firstAndPike.locationCookies());

SetStore.prototype.render = function render() {
  var parentElement = document.getElementById('firstLocation');
  var article = document.createElement('article');
  parentElement.appendChild(article);
  var h1 = document.createElement('h1');
  h1.textContent = this.name;
  h1.style.color = 'blue';
  article.appendChild(h1);
  var ul = document.createElement('ul');
  article.appendChild(ul);
  for (var i = 0; i < Location.length; i++) {
    if (i < 6) {
      var li = document.createElement('li');
      li.textContent = i + 6 + ' am: ' + Location[i] + ' cookies.';
      ul.appendChild(li);
    } else if (i > 6) {
      li = document.createElement('li');
      li.textContent = i - 6 + ' pm: ' + Location[i] + ' cookies.';
      ul.appendChild(li);
    } else {
      li = document.createElement('li');
      li.textContent = i + 6 + ' pm: ' + Location[i] + ' cookies.';
      ul.appendChild(li);
    }
  }
  li = document.createElement('li');
  li.textContent = 'Total: ' + total + '.';
  ul.appendChild(li);
};

// Render stores
// firstAndPike.render();
// seatacAirport.render();
// seattleCenter.render();
// capitolHill.render();
// alki.render();

var storeNames = ['first And Pike', 'seatac Airport', 'seattle Center', 'capitol Hill', 'alki'];

//table

parent = document.getElementById('firstLocation');

var table = document.createElement('table');
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
    th = document.createElement('th');
    td = document.createElement('td');
    td.textContent = i + 6 + ' am';
    th.appendChild(td);
    table.appendChild(th);
    parent.appendChild(table);
  }
}
//making the left row for stores
for (i = 0; i < 5; i++) {
  row = document.createElement('tr');
  td = document.createElement('td');
  td.textContent = storeNames[i];
  row.appendChild(td);
  table.appendChild(row);
  parent.appendChild(table);
  var columns = 15;
  while (columns > 0) {
    td = document.createElement('td');
    td.textContent = firstAndPike.cookiesPurchased();
    row.appendChild(td);
    table.appendChild(row);
    parent.appendChild(table);
    columns--;
  }
}

//making columns
//
//
//
// while (rowNum > 0) {
//   row = document.createElement('tr');
//   for (tdNum = 0; tdNum < 16; tdNum++) {
//     td = document.createElement('td');
//     td.textContent = firstAndPike.cookiesPurchased();
//     row.appendChild(td);
//   }
//   table.appendChild(row);
//   parent.appendChild(table);
//   tdNum++;
//   rowNum--;
// }
