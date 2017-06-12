'use strict';

//first location first and pike

var firstAndPike = {
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiesPerCustomer: 6.3,
  cookiesPurchased: function() {
    return Math.floor(this.avgCookiesPerCustomer * this.customersPerHour());
  },
  customersPerHour: function() {
    return (Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers;
  }
};

//test random customers per hour
var firstAndPikeCustomers = firstAndPike.customersPerHour();
console.log(firstAndPikeCustomers);

//test number of cookies purchased
var firstAndPikeCookies = firstAndPike.cookiesPurchased();
console.log(firstAndPikeCookies);

//array of number of cookies

var firstLocation = [];

var total = 0;

for (var i = 0; i < 15; i++) {
  // firstAndPike.cookiesPurchased();
  firstLocation.push(firstAndPike.cookiesPurchased())[i];
  total += firstLocation[i];
}

console.log(firstLocation);

var parentElement = document.getElementById('firstLocation');

var article = document.createElement('article');

parentElement.appendChild(article);

var h1 = document.createElement('h1');

h1.textContent = '1st and pike';
h1.style.color = 'blue';

article.appendChild(h1);

var ul = document.createElement('ul');

article.appendChild(ul);

for (i = 0; i < firstLocation.length; i++) {
  if (i < 6) {
    var li = document.createElement('li');
    li.textContent = i + 6 + ' am: ' + firstLocation[i] + ' cookies.';
    ul.appendChild(li);
  } else if (i > 6) {
    li = document.createElement('li');
    li.textContent = i - 6 + ' pm: ' + firstLocation[i] + ' cookies.';
    ul.appendChild(li);
  } else {
    li = document.createElement('li');
    li.textContent = i + 6 + ' pm: ' + firstLocation[i] + ' cookies.';
    ul.appendChild(li);
  }
}

li = document.createElement('li');
li.textContent = 'Total: ' + total + '.';
ul.appendChild(li);
