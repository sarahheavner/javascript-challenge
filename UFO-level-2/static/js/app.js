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
    var inputElement = d3.select("#datetime");
    var inputElementCity = d3.select("#city");
    var inputElementState = d3.select("#state");
    var inputElementCountry = d3.select("#country");
    var inputElementShape = d3.select("#shape");

    // get the value property of the input element
    var inputValue = inputElement.property("value");
    var inputValueCity = inputElementCity.property("value");
    var inputValueState = inputElementState.property("value");
    var inputValueCountry = inputElementCountry.property("value");
    var inputValueShape = inputElementShape.property("value");

    // console.log input value and table data
    console.log(inputValue);
    console.log(tableData);

    // filter data by fields entered into form
    var filteredDate = tableData.filter(sighting => sighting.datetime === inputValue);
    var filteredCity = tableData.filter(sighting => sighting.city === inputValueCity);
    var filteredState = tableData.filter(sighting => sighting.state === inputValueState);
    var filteredCountry = tableData.filter(sighting => sighting.country === inputValueCountry);
    var filteredShape = tableData.filter(sighting => sighting.shape === inputValueShape)

    // console.log filtered data
    console.log(filteredDate);
    console.log(filteredCity);
    console.log(filteredState);
    console.log(filteredCountry);
    console.log(filteredShape);

    // select tbody 
    var tbody = d3.select("tbody");

    // clear tbody data
    tbody.html("");


    // Loop through filtered data.js, collect keys and values from each Object and append to table 
    filteredDate.forEach((ufoSightings) => {
        var row = tbody.append("tr");
        Object.entries(ufoSightings).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

    filteredCity.forEach((ufoSightings) => {
        var row = tbody.append("tr");
        Object.entries(ufoSightings).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

    filteredState.forEach((ufoSightings) => {
        var row = tbody.append("tr");
        Object.entries(ufoSightings).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

    filteredCountry.forEach((ufoSightings) => {
        var row = tbody.append("tr");
        Object.entries(ufoSightings).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

    filteredShape.forEach((ufoSightings) => {
        var row = tbody.append("tr");
        Object.entries(ufoSightings).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

    


};
