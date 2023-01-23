import { Level } from "./Level.js";

const delay = ms => new Promise(res => setTimeout(res, ms));

class Background {
    constructor() { }

    static BACKGROUNDS = {
        "idle": "Assets/BackgroundIdle.png",
        "fail": "Assets/BackgroundFail.png",
        "fishing": "Assets/BackgroundFishing.png",
        "sucess": "Assets/BackgroundSuccess.png",
    }

    static EVEN_BACKGROUNDS = {
        "idle": "Assets/BackgroundIdle.png",
        "fail": "Assets/BackgroundFail.png",
        "fishing": "Assets/BackgroundFishing.png",
        "sucess": "Assets/BackgroundSuccess.png",
    }

    static getBackgrounds() {

        let index = Level.CURRENT_LEVEL;

        if (isOdd(index)) {
            return Background.BACKGROUNDS;
        } else {
            return Background.EVEN_BACKGROUNDS;
        }

        function isOdd(number) {
            const result = number % 2;
            if (result === 0) {
                return true;
            }
            return false;
        }
    }

    static setStarterBackground() {
        let BACKGROUNDS = Background.getBackgrounds();
        let backgroundIMG = document.getElementById('gameBackgroundImg');
        backgroundIMG.setAttribute('src', BACKGROUNDS["idle"]);
    }

    static async runFailAnimation() {

        let BACKGROUNDS = Background.getBackgrounds();

        let backgroundIMG = document.getElementById('gameBackgroundImg');

        backgroundIMG.setAttribute('src', BACKGROUNDS["fishing"]);


        await delay(4000)
        backgroundIMG.setAttribute('src', BACKGROUNDS["fail"]);
        await delay(2000)
    }
    static async runSucessAnimation() {

        let backgroundIMG = document.getElementById('gameBackgroundImg');

        backgroundIMG.setAttribute('src', BACKGROUNDS["fishing"]);


        await delay(4000)
        backgroundIMG.setAttribute('src', BACKGROUNDS["sucess"]);
        await delay(2000)
    }



}

export { Background };

