// from data.js
var tableData = data;

// get reference to table body
var tbody = d3.select("tbody");


// Loop through data.js, collect keys and values from each Object and append to table 
tableData.forEach((ufoSightings) => {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(([key, value]) => {
        console.log(key, value);

        var cell = row.append("td");
        cell.text(value);   
    });
}); 

// select button
var button = d3.select("#button");

// select form
var form = d3.select("#form");

// create event handlers
button.on("click", runEnter);
form.on("submit",runEnter);

// complete event handler function for form 
function runEnter() {

    // prevent the page from refreshing
    d3.event.preventDefault();

    // select the input element and get the raw HTML node
    var inputElement = d3.select("#datesearch");

    // get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredData);
}
