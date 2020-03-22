// from data.js
var tableData = data;

// YOUR CODE HERE!
var table=d3.select('#ufo-table')
var tbody=d3.select('tbody')
var filterButton=d3.select('#filter-btn')


filterButton.on('click',function(){
   //Prevent the page from refreshing
    d3.event.preventDefault();
    //Grabbing the values of the input boxes
    var dateValue = d3.select("#datetime").node().value;
    var cityValue = d3.select("#city").node().value;
    var stateValue = d3.select("#state").node().value;
    var countryValue = d3.select("#country").node().value;
    var shapeValue = d3.select("#shape").node().value;
    console.log(dateValue)
    console.log(cityValue)
    console.log(stateValue)
    console.log(countryValue)
    console.log(shapeValue)
    //Once I have stored the varibles, I clear the boxes out 
    d3.select("#datetime").node().value = "";
    d3.select("#city").node().value = "";
    d3.select("#state").node().value = "";
    d3.select("#country").node().value = "";
    d3.select("#shape").node().value = "";
   
    var filteredData=[]
    tbody.html(" ")
    //Make sure they entered at least one filter
    if (dateValue !== "" || cityValue !== "" || stateValue !== "" || countryValue !== "" || shapeValue !== "") {
      // Build the table
      tableFill(dateValue, cityValue, stateValue, countryValue, shapeValue);
    }
    else{
      console.log('enter at least one filter');
    }
      function tableFill(dateValue,cityValue,stateValue,countryValue,shapeValue){
        
        
        if (dateValue !== ""){
          filteredData = tableData.filter(data => data.datetime === dateValue);
        }else{
          filteredData=tableData
        };
        
        if (cityValue !== ""){
          filteredData = filteredData.filter(data => data.city === cityValue);
        };
        if (stateValue !== ""){
          filteredData = filteredData.filter(data => data.state === stateValue);
          console.log(filteredData)
        };
        if (countryValue !== ""){
          filteredData = filteredData.filter(data => data.country === countryValue);
          console.log(filteredData)
        };
        if (shapeValue !== ""){
          
          filteredData = filteredData.filter(data => data.shape == shapeValue);
        };
        console.log(filteredData)
      //For each filtered row, create a new Table Row and append all the values==colums
      filteredData.forEach((filter) => {
          var row = tbody.append("tr");
          Object.entries(filter).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
          });
      });
    }
})