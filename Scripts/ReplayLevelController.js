import { Achievements } from "./Model/Achievements.js";

var savedGame = JSON.parse(localStorage.getItem("gameSave"));
let achievementsList = (savedGame && savedGame.achievements) || Achievements.achievementsList

let keys = Object.keys(achievementsList);

keys.forEach(key => {
    
    if(key === "finishedGame" || key === "finishedTutorial"){
        return;
    }
    let achievement = document.getElementById(key);


    if (achievementsList[key].unlocked === false) {
        achievement.innerHTML = '<div class="lockedLevel levelInfo font">NÍVEL ' + key + '</div>';
    } else {
        achievement.innerHTML = '<div class="levelInfo font canHover">NÍVEL ' + key + '</div>';
        achievement.onclick = () => playSelectedLevel(key);
    }
});


function playSelectedLevel(index){
    let url = "game.html?uniquePlay=" + index;
    window.location.href = url;
}