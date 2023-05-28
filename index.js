const TABLE_ELEMENT = document.querySelector(".table");

let table = new Table(TABLE_ELEMENT);

function range(start, stop, step = 1) {
    return Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => start + index * step
    );
}