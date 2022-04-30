// Initializes the page with a default plot
function init() {
    d3.json("http://127.0.0.1:5000/get_data", function(response){
        rank = []
        rank2 = []
        rank3 = []
        rank4 = []
        rank5 = []
        rank6 = []
        rank7 = []
        rank8 = []
        artist_name = []
        artist_name2 = []
        artist_name3 = []
        artist_name4 = []
        artist_name5 = []
        artist_name6 = []
        artist_name7 = []
        artist_name8 = []
        bar = []
        console.log(response)

        d3.selectAll('div.panel-body').append('p').classed("mama", true).text('year: 2014')
        d3.selectAll('div.panel-body').append('p').classed("papa", true).text('x: rank')
        d3.selectAll('div.panel-body').append('p').classed("baby", true).text('y: artist names')

        for (let j=2014; j<=2021; j++){
            bar.push(j)
        }
        console.log(bar[7])

        function getyear(date) {
            return date["Year"] == bar[0]
        }
        let data = response.filter(getyear);
        for (let i=0; i<data.length; i++){
            rank.push(data[i]["Rank"])
            artist_name.push(data[i]["Artist Name"])
        }

        function getyear2(date) {
            return date["Year"] == bar[1]
        }
        let data2 = response.filter(getyear2);
        for (let j=0; j<data2.length; j++){
            rank2.push(data2[j]["Rank"])
            artist_name2.push(data2[j]["Artist Name"])
        }

        function getyear3(date) {
            return date["Year"] == bar[2]
        }
        let data3 = response.filter(getyear3);
        for (let k=0; k<data3.length; k++){
            rank3.push(data3[k]["Rank"])
            artist_name3.push(data3[k]["Artist Name"])
        }

        function getyear4(date) {
            return date["Year"] == bar[3]
        }
        let data4 = response.filter(getyear4);
        for (let k=0; k<data4.length; k++){
            rank4.push(data4[k]["Rank"])
            artist_name4.push(data4[k]["Artist Name"])
        }

        function getyear5(date) {
            return date["Year"] == bar[4]
        }
        let paimore = response.filter(getyear5);
        for (let k=0; k<paimore.length; k++){
            rank5.push(paimore[k]["Rank"])
            artist_name5.push(paimore[k]["Artist Name"])
        }

        function getyear6(date) {
            return date["Year"] == bar[5]
        }
        let spymon = response.filter(getyear6);
        for (let k=0; k<spymon.length; k++){
            rank6.push(spymon[k]["Rank"])
            artist_name6.push(spymon[k]["Artist Name"])
        }

        function getyear7(date) {
            return date["Year"] == bar[6]
        }
        let byemon = response.filter(getyear7);
        for (let k=0; k<byemon.length; k++){
            rank7.push(byemon[k]["Rank"])
            artist_name7.push(byemon[k]["Artist Name"])
        }

        function getyear8(date) {
            return date["Year"] == bar[7]
        }
        let paimon = response.filter(getyear8);
        for (let k=0; k<paimon.length; k++){
            rank8.push(paimon[k]["Rank"])
            artist_name8.push(paimon[k]["Artist Name"])
        }

    data = [{
      x: rank,
      y: artist_name,
    type: 'bar' }];
  
    Plotly.newPlot("lineplot", data);
    });
    d3.json("http://127.0.0.1:5000/singer_count", function(response){
        let artist = response.map(row => row['Artist Name'])
        let rank = response.map(row => row['Rank'])

        var trace1 = {
            x: artist,
            y: rank,
            type: 'scatter'
          };
        var data = [trace1];
        Plotly.newPlot('map', data);
        
    });
    d3.json("http://127.0.0.1:5000/pie", function(response){
        function find_singer(singer) {
            // return player.madeTeam == true;
            // A more concise way to express a boolean conditional
            return singer["Artist Name"] == "The Beatles";
          }
          
          // Call the custom function with filter()
          let singer_data = response.filter(find_singer);

          years = singer_data.map(song => song["Year"])
          songs = singer_data.map(song => song["Rank"])

          var data = [{
            values: songs,
            labels: years,
            type: 'pie'
          }];

          Plotly.newPlot('pie', data);
    });
}
  
  // Call updatePlotly() when a change takes place to the DOM
  d3.selectAll("#selDataset").on("change", updatePlotly);
  d3.selectAll("#pie_selector").on("change", updatePie);
  
  
  // This function is called when a dropdown menu item is selected
function updatePlotly() {
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");
    // Initialize x and y arrays
    var x = [];
    var y = [];
  
    if (dataset === '2014') {
      x = rank;
      y = artist_name;
      d3.selectAll('.mama').text('year: 2014')
      d3.selectAll('.papa').text()
      d3.selectAll('.baby').text()
    }

    else if (dataset === '2015') {
      x = rank2;
      y = artist_name2;
      d3.selectAll('.mama').text('year: 2015')
      d3.selectAll('.papa').text()
      d3.selectAll('.baby').text()
    }

    else if (dataset === '2016') {
        x = rank3;
        y = artist_name3;
        d3.selectAll('.mama').text('year: 2016')
        d3.selectAll('.papa').text()
        d3.selectAll('.baby').text()
    }

    else if (dataset === '2017') {
        x = rank4;
        y = artist_name4;
        d3.selectAll('.mama').text('year: 2017')
        d3.selectAll('.papa').text()
        d3.selectAll('.baby').text()
    }

    else if (dataset === '2018') {
        x = rank5;
        y = artist_name5;
        d3.selectAll('.mama').text('year: 2018')
        d3.selectAll('.papa').text()
        d3.selectAll('.baby').text()
    }

    else if (dataset === '2019') {
        x = rank6;
        y = artist_name6;
        d3.selectAll('.mama').text('year: 2019')
        d3.selectAll('.papa').text()
        d3.selectAll('.baby').text()
    }

    else if (dataset === '2020') {
        x = rank7;
        y = artist_name7;
        d3.selectAll('.mama').text('year: 2020')
      d3.selectAll('.papa').text()
      d3.selectAll('.baby').text()
    }

    else if (dataset === '2021') {
        x = rank8;
        y = artist_name8;
        d3.selectAll('.mama').text('year: 2021')
      d3.selectAll('.papa').text()
      d3.selectAll('.baby').text()
    }
  
    // Note the extra brackets around 'x' and 'y'
    Plotly.restyle("lineplot", "x", [x]);
    Plotly.restyle("lineplot", "y", [y]);

  }

  function updatePie(){
    d3.json("http://127.0.0.1:5000/pie", function(response){
        console.log(response)
        var dropdownMenu = d3.select("#pie_selector");
        var choice = dropdownMenu.property("value");
        

        function find_singer(singer) {
            // return player.madeTeam == true;
            // A more concise way to express a boolean conditional
            return singer["Artist Name"] == choice;
          }
          
          // Call the custom function with filter()
          let singer_data = response.filter(find_singer);
          console.log(singer_data)

          years = singer_data.map(song => song["Year"])
          songs = singer_data.map(song => song["Rank"])

          Plotly.restyle("pie", "values", [songs]);
          Plotly.restyle("pie", "labels", [years]);

        });
  }

  years = []
  songs = []

  init();










