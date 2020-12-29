// from data.js
var tableData = data;

// get reference to table body
var tbody = d3.select("tbody");

// console.log data from data.js
console.log(tableData);

// Loop through data and console.log each ufo observation object
tableData.forEach(function(ufoSightings) {
    console.log(ufoSightings);
});

// append table row for each Object
tableData.forEach(function(ufoSightings) {
    console.log(ufoSightings);
    var row = tbody.append("tr");

});

// Use `Object.entries` to console.log each weather report value
tableData.forEach(function(ufoSightings) {
    console.log(ufoSightings);
    var row = tbody.append("tr");

    Object.entries(ufoSightings).forEach(function([key, value]) {
        console.log(key, value);
    });
});

// Use d3 to update each cell's text
tableData.forEach(function(ufoSightings) {
    console.log(ufoSightings);
    var row = tbody.append("tr");

    Object.entries(ufoSightings).forEach(function([key, value]) {
        console.log(key, value);

        var cell = row.append("td")
        cell.text(value);
    });
});
