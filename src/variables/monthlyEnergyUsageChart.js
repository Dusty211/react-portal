const monthlyEnergyUsage = {
  data: {
    labels: [
      "Jan 2018",
      "Feb 2018",
      "Mar 2018",
      "Apr 2018",
      "May 2018",
      "Jun 2018",
      "Jul 2018",
      "Aug 2018",
      "Sep 2018",
      "Oct 2018",
      "Nov 2018",
      "Dec 2018",
      "Jan 2019",
      "Feb 2019",
      "Mar 2019",
    ],
    datasets: [
      {
        label: "Actual Usage (kWh)",
        borderColor: "#E84C3D",
        fill: true,
        backgroundColor: "#E84C3D",
        hoverBorderColor: "##E84C3D",
        borderWidth: 5,
        data: [
          1150,
          984,
          798,
          901,
          1054,
          1302,
          1276,
          916,
          756,
          627,
          0,
          0,
          0,
          0,
          0,
        ]
      },
      {
    label: "Forcast Usage (kWh)",
    borderColor: "#2070C0",
    fill: true,
    backgroundColor: "#2070C0",
    hoverBorderColor: "#2070C0",
    borderWidth: 5,
    data: [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      665,
      1017,
      1108,
      907,
      716,
    ]
  },
  {
  label: "Solar Credits",
  borderColor: "#AFC87B",
  fill: true,
  backgroundColor: "#AFC87B",
  hoverBorderColor: "#AFC87B",
  borderWidth: 5,
  data: [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    85,
    83,
    80,
    90,
    85,
  ]
},
]
},
  options: {
    tooltips: {
      tooltipFillColor: "rgba(0,0,0,0.5)",
      tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      tooltipFontSize: 14,
      tooltipFontStyle: "normal",
      tooltipFontColor: "#fff",
      tooltipTitleFontFamily:
        "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      tooltipTitleFontSize: 14,
      tooltipTitleFontStyle: "bold",
      tooltipTitleFontColor: "#fff",
      tooltipYPadding: 6,
      tooltipXPadding: 6,
      tooltipCaretSize: 8,
      tooltipCornerRadius: 6,
      tooltipXOffset: 10
    },
    legend: {
      display: true,
      position: 'bottom'
    },
    scales: {
      yAxes: [
        {
          stacked: true,
          scaleLabel: {
            display: "true",
            labelString: "Usage in kWh"
          },
          ticks: {
            fontColor: "#9f9f9f",
            fontStyle: "bold",
            beginAtZero: true,
            maxTicksLimit: 10,
            padding: 20
          },
          gridLines: {
            zeroLineColor: "transparent",
            display: true,
            drawBorder: false,
            color: "#9f9f9f"
          }
        }
      ],
      xAxes: [
        {
          stacked: true,
          barPercentage: 0.8,
          gridLines: {
            zeroLineColor: "white",
            display: false,
            drawBorder: false,
            color: "transparent"
          },
          ticks: {
            padding: 20,
            fontColor: "#9f9f9f",
            fontStyle: "bold"
          }
        }
      ]
    }
  }
};

module.exports = {
  // used for Charts and Dashboard views
  monthlyEnergyUsage
};
