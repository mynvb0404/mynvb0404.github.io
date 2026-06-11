function updateTime() {
  const now = new Date();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  const date = now.toLocaleDateString("en-GB", options);
  const time = now.toLocaleTimeString("en-GB");

  document.getElementById("datetime").textContent =
    `${date} · ${time}`;
}

updateTime();

setInterval(updateTime, 1000);



const ctx = document.getElementById('skillRadarChart');
if (ctx) {
    new Chart(ctx.getContext('2d'), {
        type: 'radar',
        data: {
            labels: ['SQL', 'Python', 'Tableau', 'Statistics', 'dbt', 'Spark'],
            datasets: [{
                data: [90, 85, 75, 70, 75, 65],
                backgroundColor: 'rgba(59, 89, 152, 0.15)',
                borderColor: '#3b5998',
                borderWidth: 2,
                pointBackgroundColor: '#3b5998',
                pointBorderColor: '#fff',
                pointBorderWidth: 1.5,
                pointRadius: 3.5
            }]
        },
        options: {
            plugins: {
                legend: { display: false }
            },
            scales: {
                r: {
                    grid: { color: '#e0e0e0' },
                    angleLines: { color: '#e0e0e0' },
                    ticks: { display: false },
                    suggestedMin: 0,
                    suggestedMax: 100,
                    pointLabels: {
                        font: {
                            size: 12,
                            family: "'Segoe UI', sans-serif"
                        },
                        color: '#333'
                    }
                }
            }
        }
    });
}