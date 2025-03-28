const activityNode = document.querySelector(".js-activity");
const goBtnNode = document.querySelector(".js-btn");

goBtnNode.addEventListener("click", function() {
    fetchActivity();
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