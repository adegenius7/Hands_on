const minE1 = document.querySelector(".min");
const secE1 = document.querySelector(".sec");
const hourE1 = document.querySelector(".hour");

function setDate() {
    const time = new Date();

    const seconds = time.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secE1.style.transform = rotate(${secondsDegrees}deg);

    const min = time.getMinutes();
    const minsDegrees = (min / 60) * 360 + ((seconds/60)*6) + 90;
    minE1.style.transform = rotate(${minsDegrees}deg);

    const hour = time.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((min/60) * 30) + 90;
    hourE1.style.transform = rotate(${hourDegrees}deg);
}
setInterval(setDate, 1000);
setDate();