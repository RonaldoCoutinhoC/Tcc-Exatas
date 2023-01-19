import { Achievements } from "./Model/Achievements.js";

var savedGame = JSON.parse(localStorage.getItem("gameSave"));
let achievementsList = savedGame.achievements || Achievements.achievementsList

let keys = Object.keys(achievementsList);

keys.forEach(key => {
    let achievement = document.getElementById(key);
    if (achievementsList[key].unlocked === false) {
        achievement.innerHTML = '<img class="backImg achievementLocked" src="Assets/trophy.png"><div class="achievementTitle achievementLocked font">' + achievementsList[key].text + ' </div>' + '<div class="achievementDescription achievementLocked font"><br />' + achievementsList[key].description + '</div>';
    } else {
        achievement.innerHTML = '<img class="backImg" src="Assets/trophy.png"><div class="achievementTitle font">' + achievementsList[key].text + ' </div>' + '<div class="achievementDescription font"><br />' + achievementsList[key].description + '</div>';
    }
});