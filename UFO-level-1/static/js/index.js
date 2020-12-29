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
