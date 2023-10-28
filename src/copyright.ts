// const year = document.getElementById('year');
// const thisYear = new Date().getFullYear();
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear


// 1era variacion para correcion de errores

// let year: HTMLElement | null 
// year = document.getElementById('year')
// let thisYear: string
// thisYear = new Date().getFullYear().toString()
// if (year) {
//     year.setAttribute("datetime", thisYear)
//     year.textContent = thisYear 
// }


// 2da variacion para correcion de errores

const year = document.getElementById('year') as HTMLSpanElement // More specific type
const thisYear : string = new Date().getFullYear().toString()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear 















