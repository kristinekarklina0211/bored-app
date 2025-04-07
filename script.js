const BODY_CHANGED_CLASSNAME = "body_changed";
const HEADING_CHANGED = "Not bored anymore! 🔥";

const activityNode = document.querySelector(".js-activity");
const goBtnNode = document.querySelector(".js-btn");
const bodyNode = document.querySelector("body");
const titleNode = document.querySelector(".js-title");

goBtnNode.addEventListener("click", function() {
    fetchActivity();
    changeScreen();
});

//  Запрос на сервер
function fetchActivity() {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())

        .then((data) => {
            console.log(data);
            activityNode.innerText = data.activity;
        })
}

// Изменение экрана
function changeScreen() {
    bodyNode.classList.add(BODY_CHANGED_CLASSNAME);
    titleNode.innerText = HEADING_CHANGED;
}