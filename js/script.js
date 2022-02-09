const sekund = document.querySelector('.s'),
    minut = document.querySelector('.m'),
    soat = document.querySelector('.h'),
    Hour = document.querySelector('.hours'),
    Minutes = document.querySelector('.minutes')


function clock() {
    let time = new Date(),
        getHour = time.getHours(),
        getMinute = time.getMinutes(),
        getSecond = time.getSeconds()

    // Hour.innerHTML = getHour
    // Minutes.innerHTML = getSecond
    if (getHour < 10) {
        Hour.innerHTML = "0" + getHour
    } else {
        Hour.innerHTML = getHour

    }

    if (getMinute < 10) {
        Minutes.innerHTML = "0" + getMinute
    } else {
        Minutes.innerHTML = getMinute
    }
    soat.style = `transform: rotate(${getHour * 30}deg); transition: 1s linear`
    minut.style = `transform: rotate(${getMinute * 6}deg); transition: 1s linear`
    sekund.style = `transform: rotate(${getSecond * 6}deg); transition: 1s linear`

    setTimeout(() => clock(), 1000)
}

clock()

const tabsItem = document.querySelectorAll(".tabsItem")
const tabsContentItem = document.querySelectorAll(".tabsContentItem")

for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', function(params) {
        for (var j = 0; j < tabsItem.length; j++) {
            tabsItem[j].classList.remove('active')
            tabsContentItem[j].classList.remove('active')

        }
        tabsItem[i].classList.add('active')
        tabsContentItem[i].classList.add('active')
    })
}


// sekundomer tugmasi
const btn = document.querySelector('.stopwatch__btn')
const coloredSpan = document.querySelector('.tabsLink__span')

btn.addEventListener('click', function(){
    if (btn.innerHTML == 'start'){
        btn.innerHTML = 'stop'
        coloredSpan.classList.add('active')
        recursion()
    }
    else if(btn.innerHTML == 'stop'){
        btn.innerHTML = 'clear'
        coloredSpan.classList.remove('active')
        coloredSpan.classList.add('active_clear')
    }else if(btn.innerHTML == 'clear'){
        btn.innerHTML = 'start'
        coloredSpan.classList.remove('active_clear')
        timeSec.innerHTML = 0
        timeMinute.innerHTML = 0
        timeHour.innerHTML = 0
    
    
    
    }
})


// sekundomer raqamlari
const timeSec = document.querySelector('.stopwatch__seconds')
const timeMinute = document.querySelector('.stopwatch__minutes')
const timeHour = document.querySelector('.stopwatch__hours')

function recursion(){
    timeSec.innerHTML++

    if(timeSec.innerHTML > 59){
        timeSec.innerHTML = 0
        timeMinute.innerHTML++

    }
    if(timeMinute.innerHTML > 59){
        timeMinute.innerHTML = 0
        timeHour.innerHTML++
    }

    if (btn.innerHTML == 'stop'){
        setTimeout(() => {
            recursion()
        }, 10);
    }
}