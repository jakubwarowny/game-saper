alert(`You have 2 lifes, if you click on 2 red box you will lost.`)
const random = () => {
    let container = document.querySelector(`.boxDiv`);
    for (let i = container.children.length; i >= 0; i--) {
        container.appendChild(container.children[Math.random() * i | 0])
    }
}
random();

let score = 0
let life = 100

document.querySelectorAll(`.bomb`).forEach(bomb => {
    bomb.addEventListener(`click`, () => {
        const lifeBar = document.querySelector(`.lifeBar`)
        bomb.style.backgroundColor = `red`
        bomb.classList.add(`rotate`)
        if (life == 100) {
            life -= 50
            lifeBar.style.width = `50%`
            console.log(life)
        } else if (life == 50) {
            life -= 50
            lifeBar.style.width = `0%`
            setTimeout(() => {
                document.querySelector(`.saperGame`).style.display = `none`
                document.querySelector(`.restartGame`).style.display = ``
                document.querySelector(`.finishResult`).textContent = `${score}  points`
            }, 550)
        }
    })
})

document.querySelectorAll(`.emptyBox`).forEach(box => {
    box.addEventListener(`click`, () => {
        box.style.backgroundColor = `green`
        box.classList.add(`rotate`)
        score += 1
        document.querySelector(`.resultScore`).textContent = `${score}  points`
    })
})

document.querySelector(`.reloadBtn`).addEventListener(`click`, () => {
    location.reload();
})