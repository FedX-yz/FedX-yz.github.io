let images = ["ALLIN.png", "SAVE.png", "PULL.png", "hoxeat.jpg"];
let sounds = [
    "static/jackpotchipmunk.mp3",
    "static/scream.mp3",
    "static/thunder.mp3",
    "static/pdiddyno.mp3"
];

let isSpinning = false;
let resultSound = document.getElementById("resultSound");

function spin() {
    if (!resultSound) {
        console.error("resultSound not found!");
        return;
    }

    if (isSpinning) return;
    isSpinning = true;

    let imgElement = document.getElementById("resultImage");
    let spinSound = document.getElementById("spinsfx");
    let button = document.getElementById("gambaButton");

    // Check if elements exist
    if (!imgElement || !spinSound || !button) {
        console.error("Missing elements!");
        isSpinning = false;
        return;
    }

    // Stop any playing sound
    resultSound.pause();
    resultSound.currentTime = 0;

    button.disabled = true;
    spinSound.play().catch(err => console.warn("Spin sound blocked:", err));

    let startTime = Date.now();

    function cycleImages() {
        if (Date.now() - startTime < 6500) {
            imgElement.src = "static/" + images[Math.floor(Math.random() * images.length)];
            setTimeout(cycleImages, 100);
        } else {
            let finalImage = images[Math.floor(Math.random() * images.length)];
            imgElement.src = "static/" + finalImage;

            isSpinning = false;
            button.disabled = false;

            let randomSound = sounds[Math.floor(Math.random() * sounds.length)];
            resultSound.src = randomSound;
            resultSound.play().catch(err => console.warn("Result sound blocked:", err));
        }
    }

    cycleImages();
}