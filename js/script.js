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



$(function() {
  var scatterChart = Highcharts.chart('scatter', {
    chart: {
      type: 'scatter',
    },
    title: {
      text: 'scatterplot chart',
    },
    xAxis: {
      //categories: ['Apples', 'Bananas', 'Oranges'],
    },
    yAxis: {
      // title: {
      //   text: 'Fruit eaten',
      // },
    },
    series: [
      {
        data: [
          [29.87, 29.87],
          [24.27, 24.27],
          [24.86, 24.86],
          [23.16, 23.16],
          [21.12, 21.12],
          [24.64, 24.64],
          [27.23, 27.23],
          [28.48, 28.48],
          [26.92, 26.92],
          [32.1, 32.1],
          [20.45, 20.45],
          [18.36, 18.36],
          [32.13, 32.13],
          [27.67, 27.67],
          [29.12, 29.12],
          [25.77, 25.77],
          [25.53, 25.53],
          [29.69, 29.69],
          [34.55, 34.55],
          [32.67, 32.67],
          [24.01, 24.01],
          [14.62, 14.62],
          [27.16, 27.16],
          [25.63, 25.63],
          [27.45, 27.45],
        ],
      },
    ],
  });
});
