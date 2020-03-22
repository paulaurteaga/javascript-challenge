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
   
    console.log(dateValue)
    //Once I have stored the varibles, I clear the boxes out 
    d3.select("#datetime").node().value = "";
   
    var filteredData=[]
    tbody.html(" ")
    
    filteredData = tableData.filter(data => data.datetime === dateValue);
      //For each filtered row, create a new Table Row and append all the values==colums
      filteredData.forEach((filter) => {
          var row = tbody.append("tr");
          Object.entries(filter).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
          });
      });
    }
)