const blockLink = document.querySelectorAll(".block__link")
const block = document.querySelectorAll(".block")
const audio = document.querySelector(".bg-audio")
const audioBtn = document.querySelector(".btn-audio")
const secretBtn = document.querySelector(".secret")
const audioScr = document.querySelector(".scr-audio")


blockLink.forEach(function(ev) {
    ev.addEventListener("click", function(event) {
        let confBlock = confirm("Вы уверены?")
        if(confBlock) {
            audioScr.play()
            setTimeout(() => {
                window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "blank")
            }, 5700);
        }
        if (!confBlock) {
            alert("пугалки не будет")
            event.preventDefault();
        }
    })
})

document.addEventListener("click", function() {
    audio.play()
})

block.forEach(function(ev) {
    ev.addEventListener("mouseover", function(event) {
        ev.classList.toggle("block--active")
        audioBtn.play()
    })
    ev.addEventListener("mouseout", function(event) {
        ev.classList.remove("block--active")
        audioBtn.pause()
    })
})

secretBtn.addEventListener("click", function() {
    window.open("https://www.youtube.com/watch?v=cPW1Z3QmWnM", "_self")
})