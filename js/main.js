let statistics = document.querySelectorAll(".statics .number");
let div = document.querySelector(".statics");

statistics.forEach((number) => startCount(number));
function startCount(el)
{
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal)
        {
            clearInterval(count)
        }
    }, 2500 / goal);
};