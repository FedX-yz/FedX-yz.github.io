// chars
const characters = [
    { img: 'static/hsr/character-image-1.png', name: 'Acheron', gender: 'female'},
    { img: 'static/hsr/character-image-2.png', name: 'Aglaea', gender: 'female'},
    { img: 'static/hsr/character-image-3.png', name: 'Argenti', gender: 'male'},
    { img: 'static/hsr/character-image-4.png', name: 'Arlan', gender: 'male'},
    { img: 'static/hsr/character-image-5.png', name: 'Asta', gender: 'female'},
    { img: 'static/hsr/character-image-6.png', name: 'Aventurine', gender: 'male'},
    { img: 'static/hsr/character-image-7.png', name: 'Black Swan', gender: 'female'},
    { img: 'static/hsr/character-image-8.png', name: 'Blade', gender: 'male'},
    { img: 'static/hsr/character-image-9.png', name: 'Boothill', gender: 'male'},
    { img: 'static/hsr/character-image-10.png', name: 'Bronya', gender:'female' },
    { img: 'static/hsr/character-image-11.png', name: 'Castorice', gender: 'female'},
    { img: 'static/hsr/character-image-12.png', name: 'Dan Feng', gender: 'male'},
    { img: 'static/hsr/character-image-13.png', name: 'Dan Heng', gender: 'male'},
    { img: 'static/hsr/character-image-14.png', name: 'Dr. Ratio', gender: 'male'},
    { img: 'static/hsr/character-image-15.png', name: 'Feixiao', gender: 'female'},
    { img: 'static/hsr/character-image-16.png', name: 'Firefly', gender: 'female'},
    { img: 'static/hsr/character-image-17.png', name: 'Fu Xuan', gender: 'female'},
    { img: 'static/hsr/character-image-18.png', name: 'Fugue', gender: 'female'},
    { img: 'static/hsr/character-image-19.png', name: 'Gallagher', gender: 'male'},
    { img: 'static/hsr/character-image-20.png', name: 'Gepard', gender: 'male'},
    { img: 'static/hsr/character-image-21.png', name: 'Guinaifen', gender: 'female'},
    { img: 'static/hsr/character-image-22.png', name: 'Hanya', gender: 'female'},
    { img: 'static/hsr/character-image-23.png', name: 'Himeko', gender: 'female'},
    { img: 'static/hsr/character-image-24.png', name: 'Jade', gender: 'female'},
    { img: 'static/hsr/character-image-25.png', name: 'Jiaoqiu', gender: 'male'},
    { img: 'static/hsr/character-image-26.png', name: 'Jing Yuan', gender: 'male'},
    { img: 'static/hsr/character-image-27.png', name: 'Jingliu', gender: 'female'},
    { img: 'static/hsr/character-image-28.png', name: 'Kafka', gender: 'female'},
    { img: 'static/hsr/character-image-29.png', name: 'Lingsha', gender: 'female'},
    { img: 'static/hsr/character-image-30.png', name: 'Luka', gender: 'male'},
    { img: 'static/hsr/character-image-31.png', name: 'Luocha', gender: 'male'},
    { img: 'static/hsr/character-image-32.png', name: 'March 7th', gender: 'female'},
    { img: 'static/hsr/character-image-33.png', name: 'Moze', gender: 'male'},
    { img: 'static/hsr/character-image-34.png', name: 'Mydei', gender: 'male'},
    { img: 'static/hsr/character-image-35.png', name: 'Natasha', gender: 'female'},
    { img: 'static/hsr/character-image-36.png', name: 'Qingque', gender: 'female'},
    { img: 'static/hsr/character-image-37.png', name: 'Rappa', gender: 'female'},
    { img: 'static/hsr/character-image-38.png', name: 'Robin', gender: 'female'},
    { img: 'static/hsr/character-image-39.png', name: 'Ruan Mei', gender: 'female'},
    { img: 'static/hsr/character-image-40.png', name: 'Sampo', gender: 'male'},
    { img: 'static/hsr/character-image-41.png', name: 'Seele', gender: 'female'},
    { img: 'static/hsr/character-image-42.png', name: 'Serval', gender: 'female'},
    { img: 'static/hsr/character-image-43.png', name: 'Silver Wolf', gender: 'female'},
    { img: 'static/hsr/character-image-44.png', name: 'Sparkle', gender: 'female'},
    { img: 'static/hsr/character-image-45.png', name: 'Sunday', gender: 'male'},
    { img: 'static/hsr/character-image-46.png', name: 'Sushang', gender: 'female'},
    { img: 'static/hsr/character-image-47.png', name: 'Herta', gender: 'female'},
    { img: 'static/hsr/character-image-48.png', name: 'Topaz', gender: 'female'},
    { img: 'static/hsr/character-image-49.png', name: 'Welt', gender: 'male'},
    { img: 'static/hsr/character-image-50.png', name: 'Xueyi', gender: 'female'},
    { img: 'static/hsr/character-image-51.png', name: 'Yukong', gender: 'female'}

    // Add more characters as needed
];

// Result tracking
let cracked = [];
let passed = [];

let currentIndex = 0;  // Index to keep track of the current character

// Function to update the character based on user action (Smash or Pass)
function nextCharacter(isSmash) {
    const currentCharacter = characters[currentIndex];

    if (isSmash) {
        cracked.push(currentCharacter);
    } else {
        passed.push(currentCharacter);
    }

    console.log(isSmash ? "Crack" : "Pass", currentCharacter.name);

    currentIndex++;

    if (currentIndex >= characters.length) {
        showResults();
    } else {
        updateCharacterDisplay();
    }
}

// Function to update the character image and name
function updateCharacterDisplay() {
    const characterImg = document.getElementById('character-img');
    characterImg.src = characters[currentIndex].img;
    characterImg.alt = characters[currentIndex].name;
}

function showResults() {
    document.getElementById('character-display').style.display = 'none';
    document.getElementById('results').style.display = 'block';

    const crackedList = document.getElementById('cracked-list');
    const passedList = document.getElementById('passed-list');
    const summary = document.getElementById('summary');

    crackedList.innerHTML = '';
    passedList.innerHTML = '';

    cracked.forEach(char => {
        const li = document.createElement('li');
        li.textContent = char.name;
        crackedList.appendChild(li);
    });

    passed.forEach(char => {
        const li = document.createElement('li');
        li.textContent = char.name;
        passedList.appendChild(li);
    });

    const total = cracked.length + passed.length;
    const crackedCount = cracked.length;
    const passedCount = passed.length;

    const crackedFemale = cracked.filter(c => c.gender === 'female').length;
    const crackedMale = cracked.filter(c => c.gender === 'male').length;
    const crackedTotalGender = crackedFemale + crackedMale;

    const crackedPercentage = total > 0 ? ((crackedCount / total) * 100).toFixed(1) : '0';
    const passPercentage = total > 0 ? ((passedCount / total) * 100).toFixed(1) : '0';

    const femalePercentage = crackedTotalGender > 0
        ? ((crackedFemale / crackedTotalGender) * 100).toFixed(1)
        : '0';

    const malePercentage = crackedTotalGender > 0
        ? ((crackedMale / crackedTotalGender) * 100).toFixed(1)
        : '0';

    summary.innerHTML = `
        You cracked <strong>${crackedCount}</strong> out of <strong>${total}</strong> characters.<br>
        <strong>Cracked:</strong> ${crackedPercentage}% &nbsp;&nbsp; <strong>Passed:</strong> ${passPercentage}%<br>
        <strong>Among cracked:</strong> ${femalePercentage}% women, ${malePercentage}% men.
    `;
}




// Initial display setup
updateCharacterDisplay();
