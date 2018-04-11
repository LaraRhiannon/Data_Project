$(function() {
  var myChart = Highcharts.chart('container', {
    chart: {
      type: 'column',
      backgroundColor: '#e9ecef'
    },

    title: {
      text: 'Average Times for each age category',
    },
    xAxis: {
      categories: ['18-39', '40-44', '45-49', '50-54', '55-59', '60-64', '65-69', '70+'], crosshair: true
    },
    yAxis: {
      floor: 3600000,
      title: {
        text: 'Median Finish Time',
      },
      type: 'datetime',
      dateTimeLabelFormats: {
                  millisecond: '%H:%M:%S.%L',
                  second: '%H:%M:%S',
                  minute: '%H:%M',
                  hour: '%H:%M',
                  day: '%e. %b',
                  week: '%e. %b',
                  month: '%b \'%y',
                  year: '%Y'
                },

    },
    plotOptions: {
        series: {
            color: ' #cc0000'
        }
    },
    series: [
      {
        name: 'Time',
        data: [16134000, 15586000, 15718000, 15803000, 16127000, 16545000, 17730000, 19151000],
      },
    ],
    tooltip: {
        formatter: function () {
            return 'The average time for <b>' + this.x +
                '</b> is <b>' + Highcharts.dateFormat('%H:%M:%S',(this.y)) + '</b>';
        }
      },
  });
});



var timedata = [
  ["al","1"  ],
  ["ad","1"  ],
  ["ar","19"  ],
  ["am","1"  ],
  ["au","148"  ],
  ["at","12"  ],
  ["be","84"  ],
  ["br","56"  ],
  ["ca","110"  ],
  ["cn","188"  ],
  ["ci","1"  ],
  ["co","8"  ],
  ["cy","8"  ],
  ["cz","10"  ],
  ["do","2"  ],
  ["ec","3"  ],
  ["eg","3"  ],
  ["es","218"  ],
  ["ee","6"  ],
  ["fi","26"  ],
  ["fk","1"  ],
  ["fr","546"  ],
  ["fo","2"  ],
  ["gb","35154"  ],
  ["gg","8"  ],
  ["gh","1"  ],
  ["gi","4"  ],
  ["gp","1"  ],
  ["hk","106"  ],
  ["hu","6"  ],
  ["im","9"  ],
  ["in","32"  ],
  ["ie","345"  ],
  ["is","13"  ],
  ["il","8"  ],
  ["it","382"  ],
  ["je","14"  ],
  ["jp","76"  ],
  ["ke","10"  ],
  ["kr","10"  ],
  ["li","1"  ],
  ["lt","6"  ],
  ["lu","5"  ],
  ["ma","6"  ],
  ["mx","61"  ],
  ["mk","2"  ],
  ["mt","6"  ],
  ["no","90"  ],
  ["nz","40"  ],
  ["pe","6"  ],
  ["pl","62"  ],
  ["qa","2"  ],
  ["re","1"  ],
  ["ro","8"  ],
  ["ru","34"  ],
  ["sm","1"  ],
  ["sk","11"  ],
  ["se","96"  ],
  ["th","7"  ],
  ["tl","1"  ],
  ["tr","2"  ],
  ["ua","5"  ],
  ["um","1"  ],
  ["us","655"  ],
  ["ve","5"  ]
]


Highcharts.mapChart('mapdata', {
    chart: {
        map: 'custom/world-highres'
    },
     title: {
        text: "Who runs the London Marathon?"
    },

    subtitle: {
        text: 'People from all over the world race the London marathon.'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

colors: ['#ffcccc', '#ff6666', '#ff1a1a',
                '#cc0000', '#990000', '#4d0000'],
            colorAxis: {
              dataClassColor: 'category',
            dataClasses: [{
                    to: 20
                }, {
                    from: 20,
                    to: 50
                }, {
                    from: 50,
                    to: 100
                }, {
                    from: 100,
                    to: 400
                }, {
                    from: 400,
                    to: 1000
                },  {
                    from: 1000
                }]
            },
        

    series: [{
        data: timedata,
        name: 'Runners',
        joinby: 'hc-key',
        mapData: Highcharts.maps['custom/world'],
        states: {
            hover: {
                color: '#cc0000'
            }
        },
        
    }]

});


function message() {
   var whichAge = document.getElementById("exampleSelect1");
   var age = whichAge.options[whichAge.selectedIndex].value;

   if(age == "1") {

    document.getElementById("70+").className = "hidden";
    document.getElementById("65-69").className = "hidden";
    document.getElementById("60-64").className = "hidden";
    document.getElementById("55-59").className = "hidden";
    document.getElementById("50-54").className = "hidden";
    document.getElementById("45-49").className = "hidden";
    document.getElementById("40-44").className = "hidden";
    document.getElementById("18-39").className = "show";
    document.getElementById("all").className = "hidden";
   }

   if(age == "2") {

    document.getElementById("70+").className = "hidden";
    document.getElementById("65-69").className = "hidden";
    document.getElementById("60-64").className = "hidden";
    document.getElementById("55-59").className = "hidden";
    document.getElementById("50-54").className = "hidden";
    document.getElementById("45-49").className = "hidden";
    document.getElementById("40-44").className = "show";
    document.getElementById("18-39").className = "hidden";
    document.getElementById("all").className = "hidden";
   }

if(age == "3") {

    document.getElementById("70+").className = "hidden";
    document.getElementById("65-69").className = "hidden";
    document.getElementById("60-64").className = "hidden";
    document.getElementById("55-59").className = "hidden";
    document.getElementById("50-54").className = "hidden";
    document.getElementById("45-49").className = "show";
    document.getElementById("40-44").className = "hidden";
    document.getElementById("18-39").className = "hidden";
    document.getElementById("all").className = "hidden";
   }

   if(age == "4") {

    document.getElementById("70+").className = "hidden";
    document.getElementById("65-69").className = "hidden";
    document.getElementById("60-64").className = "hidden";
    document.getElementById("55-59").className = "hidden";
    document.getElementById("50-54").className = "show";
    document.getElementById("45-49").className = "hidden";
    document.getElementById("40-44").className = "hidden";
    document.getElementById("18-39").className = "hidden";
    document.getElementById("all").className = "hidden";
   }

   if(age == "5") {

    document.getElementById("70+").className = "hidden";
    document.getElementById("65-69").className = "hidden";
    document.getElementById("60-64").className = "hidden";
    document.getElementById("55-59").className = "show";
    document.getElementById("50-54").className = "hidden";
    document.getElementById("45-49").className = "hidden";
    document.getElementById("40-44").className = "hidden";
    document.getElementById("18-39").className = "hidden";
    document.getElementById("all").className = "hidden";
   }

   if(age == "6") {

    document.getElementById("70+").className = "hidden";
    document.getElementById("65-69").className = "hidden";
    document.getElementById("60-64").className = "show";
    document.getElementById("55-59").className = "hidden";
    document.getElementById("50-54").className = "hidden";
    document.getElementById("45-49").className = "hidden";
    document.getElementById("40-44").className = "hidden";
    document.getElementById("18-39").className = "hidden";
    document.getElementById("all").className = "hidden";
   }

   if(age == "7") {

    document.getElementById("70+").className = "hidden";
    document.getElementById("65-69").className = "show";
    document.getElementById("60-64").className = "hidden";
    document.getElementById("55-59").className = "hidden";
    document.getElementById("50-54").className = "hidden";
    document.getElementById("45-49").className = "hidden";
    document.getElementById("40-44").className = "hidden";
    document.getElementById("18-39").className = "hidden";
    document.getElementById("all").className = "hidden";
   }

   if(age == "8") {

    document.getElementById("70+").className = "show";
    document.getElementById("65-69").className = "hidden";
    document.getElementById("60-64").className = "hidden";
    document.getElementById("55-59").className = "hidden";
    document.getElementById("50-54").className = "hidden";
    document.getElementById("45-49").className = "hidden";
    document.getElementById("40-44").className = "hidden";
    document.getElementById("18-39").className = "hidden";
    document.getElementById("all").className = "hidden";
   }

}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} 



$(function() {
  var myChart = Highcharts.chart('countryspeed', {
    chart: {
      type: 'column',
    },

    xAxis: {
      categories: ["Austria", "Poland", "Spain", "Brazil", "Finland", "Slovakia", "Ireland", "Russia", "Iceland", "Czechia"]
  },

    title: {
      text: 'The Fastest and Slowest Countries',
    },

    series: [{
      name: "Time",
      data: [12767000, 12854000, 13404000, 13512000, 13522000, 13827000, 13889000, 13960000, 13968000, 13998000]

    }],


    yAxis: {
      floor: 0,
      title: {
        text: 'Median Finish Time',
      },
      type: 'datetime',
      dateTimeLabelFormats: {
                  millisecond: '%H:%M:%S.%L',
                  second: '%H:%M:%S',
                  minute: '%H:%M',
                  hour: '%H:%M',
                  day: '%e. %b',
                  week: '%e. %b',
                  month: '%b \'%y',
                  year: '%Y'
                },

    },
    plotOptions: {
        series: {
            color: ' #cc0000'
        }
    },
    
     tooltip: {
        formatter: function () {
            return 'The average time for <b>' + this.x +
                '</b> is <b>' + Highcharts.dateFormat('%H:%M:%S',(this.y)) + '</b>';
        }
      },
  });
});

$(function() {
  var myChart = Highcharts.chart('countryslow', {
    chart: {
      type: 'column',
    },

    xAxis: {
      categories: ["South Korea", "China", "New Zealand", "Great Britain", "USA", "Norway", "India", "Jersey", "Canada", "Hong Kong"]
  },

    title: {
      text: 'The Fastest and Slowest Countries',
    },

    series: [{
      name: "Time",
      data: [17817000, 16570000, 16336000, 16163000, 15908000, 15596000, 15545000, 15360000, 15216000, 15216000]
    }],


    yAxis: {
      floor: 0,
      title: {
        text: 'Median Finish Time',
      },
      type: 'datetime',
      dateTimeLabelFormats: {
                  millisecond: '%H:%M:%S.%L',
                  second: '%H:%M:%S',
                  minute: '%H:%M',
                  hour: '%H:%M',
                  day: '%e. %b',
                  week: '%e. %b',
                  month: '%b \'%y',
                  year: '%Y'
                },

    },

    plotOptions: {
        series: {
            color: '#000099'
        }
    },
    
     tooltip: {
        formatter: function () {
            return 'The average time for <b>' + this.x +
                '</b> is <b>' + Highcharts.dateFormat('%H:%M:%S',(this.y)) + '</b>';
        }
      },
  });
});


var fastGraph = document.getElementById('countryspeed');

// Get the button that opens the modal
var fastbtn = document.getElementById("fast");

var slowGraph = document.getElementById('countryslow');

// Get the button that opens the modal
var slowbtn = document.getElementById("slow");

fastbtn.onclick = function() {
     document.getElementById("countryspeed").className = "show";
    document.getElementById("countryslow").className = "hidden";
}

slowbtn.onclick = function() {
    document.getElementById("countryslow").className = "show";
    document.getElementById("countryspeed").className = "hidden";
}



