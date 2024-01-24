const goodsCount = 5
const knapsackVolume = 8
let i = 1
let j = 1

function createTable(row, col){
    let tbl  = document.getElementById('table')
    for(let i = 0; i < row; i++){
        let tr = tbl.insertRow()
        for(let j = 0; j < col; j++) {
            let td = tr.insertCell()
            if(i==0 || j==0)
                td.appendChild(document.createTextNode(`0` ))
            td.id = `${i}-${j}`
        }     
    }
}

function previous() {
    console.log(i, j)
    $(`#${i}-${j}`).removeClass('visited')
    $(`#${i}-${j}`).removeClass('cursor')
    if(j !== 1 || i !== 1) {
        j--
        if(j == 0) {
            j = knapsackVolume
            if(i > 0) {
                i--
            }
        }
    }
    $(`#${i}-${j}`).addClass('cursor')
}

function next() {
    console.log(i, j)
    $(`#${i}-${j}`).removeClass('cursor')
    $(`#${i}-${j}`).addClass('visited')
    if(j != knapsackVolume || i != goodsCount) {
        j++
        if(j-1 == knapsackVolume) {
            j = 1
            if(i < goodsCount) {
                i++
            }
        }
    }
    $(`#${i}-${j}`).addClass('cursor')
    $('#i-value').empty().append(`${i}`)
    $('#j-value').empty().append(`${j}`)
}