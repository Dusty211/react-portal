const estimatedUsageBreakdown = {
  data: canvas => {
    return {
      labels: [
        'Lighting',
        'Food Refrigeration',
        'Electrical Appliances',
        'Space Heating',
        'Domestic Hot Water',
        'Cooking',
      ],
      datasets: [
        {
          label: "Usage",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: ["yellow", "red", "blue", "green", "gray", "purple"],
          borderWidth: 0,
          data: [255, 186, 302, 0, 93, 144]
        }
      ]
    };
  },
  options: {
    legend: {
      display: true,
      position: 'left',
      labels: {
        fontFamily: 'Montserrat'
      }
    },

    pieceLabel: {
      render: "percentage",
      fontColor: ["white"],
      precision: 2
    },

    tooltips: {
      enabled: true
    },

    scales: {
      yAxes: [
        {
          ticks: {
            display: false
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "transparent",
            color: "rgba(255,255,255,0.05)"
          }
        }
      ],

      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            display: false
          }
        }
      ]
    }
  }
};

module.exports = { estimatedUsageBreakdown };
