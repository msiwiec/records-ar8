const popup = document.querySelector('.popup')
const arkNums = document.querySelectorAll('.arNumber')
const titleAr = document.querySelector('.titleAr')
const player = document.querySelector('audio')
const tasks = [...document.querySelectorAll('.taskAudio')]

let indexArSourc = 0
let indexTaskSourc = 0



const closePopup = function () {
    const activeTask = tasks.findIndex(task => task.classList.contains('active'));

    popup.classList.remove('active')
    tasks[activeTask].classList.remove('active')
    player.src = ''
    player.classList.remove('active')

}

// popup
arkNums.forEach(function (arkNum, index) {

    arkNum.addEventListener('click', function () {
        popup.classList.add('active')

        titleAr.textContent = arkNums[index].innerText
        indexArSourc = index + 1


    })

})

// tasks
tasks.forEach(function (task, index) {

    task.addEventListener('click', function () {
        player.classList.add('active')
        const activeTask = tasks.findIndex(task => task.classList.contains('active'));

        if (activeTask >= 0) {
            tasks[activeTask].classList.remove('active')
        }
        tasks[index].classList.add('active')
        indexTaskSourc = index + 1
        player.src = `audio/Arkusz${indexArSourc}/Arkusz${indexArSourc}-Zadanie${indexTaskSourc}.mp3`
        console.log(player.src)



    })
})



document.querySelector('span.material-symbols-outlined').addEventListener('click', closePopup)