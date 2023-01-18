const button = document.querySelector(".btn")
const container = document.querySelector(".container")



button.addEventListener("click", () => {
    createNotification();
})

function createNotification() {
    let notification = document.createElement("div")
    notification.classList.add("toast")
    notification.innerText = "You are driving me crazy!!!"

    container.appendChild(notification)
    setTimeout(() => {
        notification.remove()
    }, 3000)
}