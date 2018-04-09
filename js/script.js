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

    colorAxis: {
            min: 1,
            max: 35154,
            type: 'logarithmic',
            maxColor: '#b30000',
            minColor: '#ffb3b3',
        },

    series: [{
        data: timedata,
        name: 'Time',
        joinby: 'hc-key',
        mapData: Highcharts.maps['custom/world'],
        states: {
            hover: {
                color: '#cc0000'
            }
        },
        
    }]
});
