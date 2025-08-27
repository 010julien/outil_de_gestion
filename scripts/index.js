
// Update dashboard stats
function updateDashboardStats() {
  const projects = JSON.parse(localStorage.getItem("projects") || "[]");
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  // Update projects count
  document.getElementById("projects-count").textContent = projects.length;

  // Update tasks count
  document.getElementById("tasks-count").textContent = tasks.length;

  // Update completed tasks percentage
  const completedTasks = tasks.filter(
    (task) => task.status === "completed"
  ).length;
  const completedPercentage =
    tasks.length > 0 ? Math.round((completedTasks / tasks.length) * 100) : 0;
  document.getElementById(
    "completed-tasks"
  ).textContent = `${completedPercentage}%`;
  document.getElementById(
    "completed-progress"
  ).style.width = `${completedPercentage}%`;
  document
    .getElementById("completed-progress")
    .setAttribute("aria-valuenow", completedPercentage);

  // Update users count
  document.getElementById("users-count").textContent = users.length;

  // Update recent projects table
  const recentProjectsBody = document.getElementById("recent-projects-body");
  recentProjectsBody.innerHTML = "";

  projects.slice(0, 5).forEach((project) => {
    const row = document.createElement("tr");

    let statusBadge = "";
    if (project.status === "active") {
      statusBadge = '<span class="badge bg-success">Actif</span>';
    } else if (project.status === "on-hold") {
      statusBadge = '<span class="badge bg-warning">En attente</span>';
    } else {
      statusBadge = '<span class="badge bg-secondary">Terminé</span>';
    }

    row.innerHTML = `
                    <td>${project.name}</td>
                    <td>${project.manager}</td>
                    <td>${project.startDate}</td>
                    <td>${project.endDate}</td>
                    <td>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: ${project.progress}%" aria-valuenow="${project.progress}" aria-valuemin="0" aria-valuemax="100">${project.progress}%</div>
                        </div>
                    </td>
                    <td>${statusBadge}</td>
                `;

    recentProjectsBody.appendChild(row);
  });
}

// Initialize charts
function initCharts() {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

  // Task status data for pie chart
  const waitingTasks = tasks.filter((task) => task.status === "waiting").length;
  const inProgressTasks = tasks.filter(
    (task) => task.status === "in-progress"
  ).length;
  const completedTasks = tasks.filter(
    (task) => task.status === "completed"
  ).length;

  // Pie Chart
  const pieCtx = document.getElementById("taskStatusChart");
  new Chart(pieCtx, {
    type: "doughnut",
    data: {
      labels: ["En attente", "En cours", "Terminées"],
      datasets: [
        {
          data: [waitingTasks, inProgressTasks, completedTasks],
          backgroundColor: ["#f6c23e", "#36b9cc", "#1cc88a"],
          hoverBackgroundColor: ["#dda20a", "#2c9faf", "#17a673"],
          hoverBorderColor: "rgba(234, 236, 244, 1)",
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      cutout: "70%",
    },
  });

  // Line Chart - Tasks overview
  const lineCtx = document.getElementById("tasksChart");
  new Chart(lineCtx, {
    type: "line",
    data: {
      labels: [
        "Jan",
        "Fév",
        "Mar",
        "Avr",
        "Mai",
        "Juin",
        "Juil",
        "Août",
        "Sep",
        "Oct",
        "Nov",
        "Déc",
      ],
      datasets: [
        {
          label: "Tâches créées",
          lineTension: 0.3,
          backgroundColor: "rgba(78, 115, 223, 0.05)",
          borderColor: "rgba(78, 115, 223, 1)",
          pointRadius: 3,
          pointBackgroundColor: "rgba(78, 115, 223, 1)",
          pointBorderColor: "rgba(78, 115, 223, 1)",
          pointHoverRadius: 3,
          pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
          pointHoverBorderColor: "rgba(78, 115, 223, 1)",
          pointHitRadius: 10,
          pointBorderWidth: 2,
          data: [0, 2, 4, 3, 6, 8, 5, 7, 9, 10, 0, 0],
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            maxTicksLimit: 5,
            padding: 10,
          },
          grid: {
            color: "rgb(234, 236, 244)",
            drawBorder: false,
            borderDash: [2],
            zeroLineBorderDash: [2],
          },
        },
        x: {
          grid: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            maxTicksLimit: 7,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: "rgb(255, 255, 255)",
          bodyColor: "#858796",
          titleMarginBottom: 10,
          titleColor: "#6e707e",
          titleFont: {
            size: 14,
          },
          borderColor: "#dddfeb",
          borderWidth: 1,
          padding: 10,
          displayColors: false,
          intersect: false,
          mode: "index",
          caretPadding: 10,
        },
      },
    },
  });
}

// Initialize the application
document.addEventListener("DOMContentLoaded", function () {
  initializeData();
  updateDashboardStats();
  initCharts();
});
