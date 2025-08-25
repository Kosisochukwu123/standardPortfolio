// Initialize gauge animations
function initGauges() {
  const gauges = document.querySelectorAll(".gauge");

  gauges.forEach((gauge, index) => {
    const percentage = parseInt(gauge.getAttribute("data-percentage"));
    const gaugeFill = gauge.querySelector(".gauge-fill");

    setTimeout(() => {
      gaugeFill.style.width = percentage + "%";
    }, index * 200);
  });
}

// Tooltip functionality
// i dont understand this section at all
function initTooltips() {
  const gauges = document.querySelectorAll(".gauge[data-tooltip]");

  gauges.forEach((gauge) => {
    gauge.addEventListener("mouseenter", (e) => {});

    gauge.addEventListener("mouseleave", () => {});
  });
}

// Initialize when page loads
document.addEventListener("DOMContentLoaded", function () {
  initTooltips();
  setTimeout(() => initGauges(), 1500);
});











// let page = document
// let home = document.getElementById("home")
// let buttons = document.getElementById("buttons")



// buttons.addEventListener("click", () => {
// home.style.height = 0


// })


// function getToTop() {


  
// }


// export {initGauges}
// export default initGauges


// import "as initGauges from" ./
