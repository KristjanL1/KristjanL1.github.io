(async () => {
    function getSkillAmountsArrayFromLocalStorage() {
        const storedSkillAmountsArray = localStorage.getItem('skillAmountsArray');
        if (storedSkillAmountsArray) {
          return JSON.parse(storedSkillAmountsArray);
        } else {
          return []; // Return an empty array or handle the case when the data is not available in local storage
        }
      }
      const skillAmountsArray = getSkillAmountsArrayFromLocalStorage();
      console.log("Radarcharts dataarray",skillAmountsArray);
const radarChartDiv = document.getElementById('radarCanvas');
      new Chart(radarChartDiv, {
        type: "radar",
      data: {
        labels: [
          "Go",
          "Html",
          "JS",
          "Sql",
          "Docker",
          "Css",
        ],
        datasets: [
          {
            label: "Skills",
            fill: true,
            lineTension: 0,
            backgroundColor: "#00ff0057",
            borderColor: "#0f0",
            borderCapStyle: "butt",
            borderJoinStyle: "miter",
            pointBorderColor: "#0f0",
            pointBackgroundColor: "#007200",
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#007200",
            pointHoverBorderColor: "#007200",
            pointHoverBorderWidth: 2,
            pointRadius: 3,
            pointHitRadius: 5,
            data: skillAmountsArray,
 
          },
        ],
      },
options: {
        scales: {
          r:{
            ticks: {
              value: 5,
              stepSize: 15,
              display: true,
              padding: 10,
              color: "#0f0",
              showLabelBackdrop: false,
            },
            angleLines:{
              color: "#007200",
            },
            grid:{
              color: "#007200",
            },
            pointLabels:{
              color: "#0f0",
            },
          },
        },
        responsive: true,
      },
    });
})();
