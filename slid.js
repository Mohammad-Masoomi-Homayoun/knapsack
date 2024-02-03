const goodsCount = 4
const knapsackVolume = 8
let i = 1
let j = 1
const profitArray = [0, 1, 2, 5, 6]
const weightArray = [0, 2, 3, 4, 5]
const objNames = ["", "Vase", "Watermelon", "Chair", "Monitor"]
let V = Array(goodsCount+1)
  .fill()
  .map(() => Array(knapsackVolume+1).fill(0));


function createTable(row, col){
    let tbl  = document.getElementById('table')
    for(let i = -1; i < row; i++){
        let tr = tbl.insertRow()
        for(let j = 0; j < col; j++) {
            let td = tr.insertCell()
            td.id = `${i}-${j}`
            
            if(i==0 && j > 0) {
                td.appendChild(document.createTextNode(`0`))
            } if (i == -1 && j != 0) {
                td.appendChild(document.createTextNode(`${j} Kg`))
            } if(j==0 && i >= 0) {
                td.appendChild(document.createTextNode(objNames[i]))
                td.classList.add("obj"+i)
            }

            if( i != -1 && j != 0) {
                $(`#${i}-${j}`).addClass('context')
            }
            if( i == -1 && j == 0) {
                td.appendChild(document.createTextNode('Bag Weight >'))
            }
        }     
    }
    $('#1-1').addClass('cursor')
}

function previous() {
    $(`#${i}-${j}`).removeClass('visited')
    $(`#${i}-${j}`).removeClass('cursor')
    $(`#${i}-${j}`).empty()
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
    writeCursorLocation()
}

function next() {
    V[i][j] = calculateCell(i, j)
    //fillTable()
    $(`#${i}-${j}`).removeClass('cursor')
    $(`#${i}-${j}`).addClass('visited')
    $(`.obj${i}`).addClass('context')
    $(`#${i}-${j}`).empty().append(V[i][j])
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
    if(j == knapsackVolume && i == goodsCount) {
        $(`#${i}-${j}`).removeClass('cursor')
        $(`#${i}-${j}`).addClass('visited')
    }
    writeCursorLocation()
}

function writeCursorLocation() {
    $('.i-value').empty().append(`${i}`)
    $('.i-value-minus').empty().append(`${i-1}`)
    $('.j-value').empty().append(`${j}`)

    $('#VI-1J').empty().append(V[i-1][j])
}

function calculateCell(i, j) {
    console.log(V)
    let va = V[i-1][j]
    let tmp = j - weightArray[i]
    let vj = V[i-1][tmp]
    if(vj === undefined) {
        vj = -100
    }
    console.log(i-1, j, va)
    console.log(i-1, tmp, vj)
    
    let Vij = Math.max(va, vj + profitArray[i])
    console.log(Vij)
    return Vij;
}

function fillTable() {
    for (let i = 1; i <= goodsCount; i++) {
        for (let j = 1; j <= knapsackVolume; j++) {
            $(`#${i}-${j}`).empty().append(V[i][j])
        }
    }
}