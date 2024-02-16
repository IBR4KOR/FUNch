/*const playerData = {
    "Alice Chaitanya": "Team A",
    "Babu": "Team B",
    "Charlie": "Team A",
    "David": "Team B",
    // Add more players as needed
};*/
let playerData = {}

// Function to fetch player data from JSON file
async function fetchPlayerData() {
    try {
        const response = await fetch('players_file.json');
        if (!response.ok) {
            throw new Error('Failed to fetch player data');
        }

        const jsonData = await response.json();
        playerData = jsonData.players;
    } catch (error) {
        console.error('Error fetching player data:', error);
    }
}

// Call fetchPlayerData function to fetch playerData from the JSON file
fetchPlayerData();

// Sample team data with banner image URLs (replace with your actual data)
const teamData = {
    "Team A": { banner: "images/TeamA.png", size: { width: 320, height: 210 }, teamlist:  "https://bosch-my.sharepoint.com/:x:/r/personal/ure4kor_bosch_com/Documents/Events_2024/Auction/TeamA.xlsx?d=wf7b1952d3581474ca18788c82946795f&csf=1&web=1&e=LIErRA"},
    "Team B": { banner: "images/TeamB.png", size: { width: 320, height: 210 }, teamlist:  "https://bosch-my.sharepoint.com/:x:/r/personal/ure4kor_bosch_com/Documents/Events_2024/Auction/TeamB.xlsx?d=w0af58936b6844c25ac86dc46f7364348&csf=1&web=1&e=NGhgfR"},
    "Team C": { banner: "images/TeamC.png", size: { width: 320, height: 210 }, teamlist:  "https://bosch-my.sharepoint.com/:x:/r/personal/ure4kor_bosch_com/Documents/Events_2024/Auction/TeamC.xlsx?d=w46d1b173466a449693df02e64cf8967d&csf=1&web=1&e=wz8lop"},
    "Team D": { banner: "images/TeamD.png", size: { width: 320, height: 210 }, teamlist:  "https://bosch-my.sharepoint.com/:x:/r/personal/ure4kor_bosch_com/Documents/Events_2024/Auction/TeamD.xlsx?d=w8d020217e5d54fc4a9b5ab0f1dcf12b5&csf=1&web=1&e=zuG2P5"},
    "Team E": { banner: "images/TeamE.png", size: { width: 320, height: 210 }, teamlist:  "https://bosch-my.sharepoint.com/:x:/r/personal/ure4kor_bosch_com/Documents/Events_2024/Auction/TeamE.xlsx?d=w1d879518495c49b2812515cc8cefd913&csf=1&web=1&e=ZxvU97"}
    // Add more teams as needed
};

/*
const carousel = document.querySelector('.carousel');
const carouselInner = document.querySelector('.carousel-inner');
const slides = carouselInner.querySelectorAll('img');
const navButtons = document.querySelectorAll('.carousel-nav button');

let currentSlide = 0;

navButtons[0].addEventListener('click', () => {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    translateSlides();
});

navButtons[1].addEventListener('click', () => {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    translateSlides();
});

function translateSlides() {
    carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}*/
// Set slide transition duration to 3 seconds (adjust as needed)
//carouselInner.style.transitionDuration = '4s';


function lookupTeam() {
    const playerNameInput = document.getElementById("playerNameInput").value.trim().toLowerCase();
    const teamDisplay = document.getElementById("teamDisplay");

    // Check if the entered name has a minimum length of 4 characters
    if (playerNameInput.length < 4) {
        teamDisplay.innerHTML = `<p>Please enter a name with a minimum length of 4 characters.</p>`;
        return;
    }

    // Check if the entered player name corresponds to a valid team
    const matchedPlayers = Object.keys(playerData).filter(player =>
        player.toLowerCase().includes(playerNameInput)
    );

    if (matchedPlayers.length > 0) {
        // For simplicity, using the first matched player's team information
        const teamName = playerData[matchedPlayers[0]];

        // Get team information from the teamData table
        const teamInfo = teamData[teamName];

        // Display the team banner with a specific size and name
        teamDisplay.innerHTML = `
            <img src="${teamInfo.banner}" alt="${teamName} Banner" width="${teamInfo.size.width}" height="${teamInfo.size.height}">
            <p>Welcome, ${matchedPlayers[0]}! You belong to <a href=${teamInfo.teamlist}>${teamName}.</a></p>
        `;
    } else {
        // Display an error message
        teamDisplay.innerHTML = `<p>Hold tight! You are still in the running to be picked by a team</p>`;
    }
}


