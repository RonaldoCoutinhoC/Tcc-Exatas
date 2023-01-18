export class Achievements{
    constructor(){

    }

    static achievementsList = {
        1: {
            "text": "Agregando Valor!",
            "unlocked": false,
            "description": "Defina um valor a uma variavel!"
        },
        2: {
            "text": "Sem retrabalho!",
            "unlocked": false,
            "description": "Use uma função!"
        },
        3: {
            "text": "Se (Verdade) Então Sucesso!",
            "unlocked": false,
            "description": "Faça bom uso de uma condicional!"
        },
        4: {
            "text": "Repita Repita Repita!",
            "unlocked": false,
            "description": "Crie sua primeira repetição!"
        },
        "finishedTutorial": {
            "text": "Ensinando a Pescar!",
            "unlocked": false,
            "description": "Finalize os níveis de tutoriais!"
        },
        10: {
            "text": "O Poderoso!",
            "unlocked": false,
            "description": "Pesque o salmão lendário"
        },
        "finishedGame": {
            "text": "O Pescador Lendário",
            "unlocked": false,
            "description": "Desbloqueie todas as outras conquistas!"
        },
    }
    

    static getAchiviementText(levelIndex){
        return this.achievementsList[levelIndex].text
    }

    static unlockAchievement(levelIndex){
        this.achievementsList[levelIndex].unlocked = true;
    }

    static specialAchievementUnlocked(condition){
        this.unlockAchievement(condition);
        let text = this.getAchiviementText(condition);
        document.getElementById('achievementText').innerHTML = "<span class='upperTextAchievement'>Conquista Desbloqueada!</span> <br />" + text;
        this.displayAchievement();
    }

    static achievementUnlocked(levelIndex) {

        this.unlockAchievement(levelIndex);
        let text = this.getAchiviementText(levelIndex);
        document.getElementById('achievementText').innerHTML = "<span class='upperTextAchievement'>Conquista Desbloqueada!</span> <br />" + text;
        this.displayAchievement();
    }

    static displayAchievement(){
        setTimeout(function () {
            document.getElementsByClassName("achievement")[0].className = "achievement";
        }, 200);
        setTimeout(function () {
            document.getElementsByClassName("achievement")[0].className = "achievement out";
        }, 1000);
        setTimeout(function () {
            document.getElementsByClassName("achievement")[0].className = "achievement";
        }, 5000);
        setTimeout(function () {
            document.getElementsByClassName("achievement")[0].className = "achievement hidden";
        }, 6000);
    }
}