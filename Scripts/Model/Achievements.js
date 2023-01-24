export class Achievements {
    constructor() {

    }

    static achievementsList = {
        1: {
            "text": "Agregando Valor!",
            "unlocked": false,
            "description": "Atribua um valor a uma variavel!"
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
        5: {
            "text": "Indecisão!",
            "unlocked": false,
            "description": "Ajude Mike a Decidir!"
        },
        6: {
            "text": "Pensando fora do mar!",
            "unlocked": false,
            "description": "Use o operador 'OU'!"
        },
        7: {
            "text": "Só Salmões!",
            "unlocked": false,
            "description": "Pesque somente salmões!"
        },
        8: {
            "text": "V ou F?!",
            "unlocked": false,
            "description": "Crie uma verdade!"
        },
        9: {
            "text": "A Sequência!",
            "unlocked": false,
            "description": "Pesque um salmão depois uma tilápia!"
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


    static getAchiviementText(levelIndex) {
        return Achievements.achievementsList[levelIndex].text
    }

    static unlockAchievement(levelIndex) {
        Achievements.achievementsList[levelIndex].unlocked = true;
        console.log("Achievement " + levelIndex + "Unlocked");
        console.log(Achievements.achievementsList[levelIndex].unlocked);
    }

    static specialAchievementUnlocked(condition) {
        Achievements.unlockAchievement(condition);
        let text = Achievements.getAchiviementText(condition);
        document.getElementById('achievementText').innerHTML = "<span class='upperTextAchievement'>Conquista Desbloqueada!</span> <br />" + text;
        Achievements.displayAchievement();
    }

    static achievementUnlocked(levelIndex) {

        let index = levelIndex;

        if (index === 4) {
            Achievements.unlockAchievement("finishedTutorial");
            auxUnlock(index);
            setTimeout(function () {
                let text = Achievements.getAchiviementText("finishedTutorial");
                document.getElementById('achievementText').innerHTML = "<span class='upperTextAchievement'>Conquista Desbloqueada!</span> <br />" + text;
                Achievements.displayAchievement();
            }, 7000);
        }else if(index === 10){
            Achievements.unlockAchievement("finishedGame");
            auxUnlock(index);
            setTimeout(function () {
                let text = Achievements.getAchiviementText("finishedTutorial");
                document.getElementById('achievementText').innerHTML = "<span class='upperTextAchievement'>Conquista Desbloqueada!</span> <br />" + text;
                Achievements.displayAchievement();
            }, 7000);
        }else{
            auxUnlock(index);
        }



        function auxUnlock(unlockAchievementIndex) {
            Achievements.unlockAchievement(unlockAchievementIndex);
            let text = Achievements.getAchiviementText(unlockAchievementIndex);
            document.getElementById('achievementText').innerHTML = "<span class='upperTextAchievement'>Conquista Desbloqueada!</span> <br />" + text;
            Achievements.displayAchievement();
        }


    }

    static displayAchievement() {
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