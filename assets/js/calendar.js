const START_HOUR = 10;
const END_HOUR = 18;

const MONDAY = 0;
const TUESDAY = 1;
const WEDNESDAY = 2;
const THURSDAY = 3;
const FRIDAY = 4;

const tableBody = document.querySelector(".schedule-table-body");

createTableBody(tableBody);

/**
 * create a row for each hour of the day
 */
function createTableBody(tableBody) {
    for (let hourOfDay = START_HOUR; hourOfDay <= END_HOUR; hourOfDay++) {
        const row = createTableRow(`${hourOfDay}:00`);

        tableBody.append(row);
    }
}

/**
 * Create a cell for the hour and one per day of the week
 */
function createTableRow(hourOfDay) {
    const row = document.createElement("tr");
    const cellHour = document.createElement("td");

    cellHour.innerText = hourOfDay;
    row.append(cellHour);

    for (let dayOfWeek = 0; dayOfWeek < 5; dayOfWeek++) {
        const cell = document.createElement("td");

        cell.classList.add("schedule-cell", `schedule-cell-${dayOfWeek}-${hourOfDay}`);
        row.append(cell);
    }

    return row;
}

function addEntry(tableBody, dayOfWeek, startHour, endHour, title) {

}

$(document).ready(function () {
    $(".show-modal").click(function () {
        $("#myModal").modal('show');
    });
});


