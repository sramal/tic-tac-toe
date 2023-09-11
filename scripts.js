const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
];

const cells = document.querySelectorAll(".cell");
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function () {
        console.log(i);
    });
}
