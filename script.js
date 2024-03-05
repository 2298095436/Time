const countdown = () => {
    const countToDate = new Date("April 20, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = countToDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    const milliseconds = Math.floor(difference % 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
    document.getElementById("milliseconds").textContent = milliseconds;

    if (difference < 0) {
        document.getElementById("countdown-container").innerHTML = "The countdown is over!";
    }
};

setInterval(countdown, 1);