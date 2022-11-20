

export function createBlocks(){
    let languange = 'en';
    let selectedLanguagekey = 'name-pt-br';
    if (languange === 'pt-br') {
        selectedLanguagekey = 'name-pt-br';
    } else if (languange === 'en') {
        selectedLanguagekey = 'name-en';
    }
    
    let availableBlocksObject = getBlocksData();

    let div = '';
    Object.keys(availableBlocksObject).forEach(key => {
        for (let index = 0; index < availableBlocksObject[key].qtd; index++) {
            let html = '<div class="blocksHolder dropzone">' +
                '<p class="block ' + availableBlocksObject[key].className +
                '" draggable="true" style="background-color:' + availableBlocksObject[key].color + ';"' +
                '>' + availableBlocksObject[key][selectedLanguagekey] + '</p>' +
                '</div>';
            div += html;
        }

    });

    document.querySelector('.availableBlocks').innerHTML = div;
        
}

export function executeCode() {
    //Get all the blocksHolders of the selectedBlocks div
    const blocksHolders = document.querySelector('.selectedBlocks').children;
    let codeString = '';



    for (let index = 0; index < blocksHolders.length; index++) {
        const element = blocksHolders[index].children ? blocksHolders[index].children[0] : null;
        if (element && element.tagName === "P") {
            codeString += element.classList[1] + ' '; 
        }
    }
    alert(codeString);
}

function getBlocksData(){
    return {
        "IF": {
            "qtd": 3,
            "name-pt-br": "SE",
            "name-en": "IF",
            "className": "if",
            "color": "rgb(255, 171, 25)"
        },
        "ELSE": {
            "qtd": 2,
            "name-pt-br": "SENAO",
            "name-en": "ELSE",
            "className": "else",
            "color": "rgb(255, 171, 25)"
        },
        "EQUALS": {
            "qtd": 1,
            "name-pt-br": "IGUAL",
            "name-en": "EQUALS",
            "className": "equals",
            "color": "rgb(89, 192, 89)"
        },
        "DIFFERENT": {
            "qtd": 1,
            "name-pt-br": "DIFERENTE",
            "name-en": "DIFFERENT",
            "className": "different",
            "color": "rgb(89, 192, 89)"
        },
        "AND": {
            "qtd": 1,
            "name-pt-br": "E",
            "name-en": "AND",
            "className": "and",
            "color": "rgb(89, 192, 89)"
        },
        "OR": {
            "qtd": 1,
            "name-pt-br": "OU",
            "name-en": "OR",
            "className": "or",
            "color": "rgb(89, 192, 89)"
        },
        "1": {
            "qtd": 1,
            "name-pt-br": "1",
            "name-en": "1",
            "className": "1",
            "color": "rgb(92, 177, 214)"
        },"2": {
            "qtd": 1,
            "name-pt-br": "2",
            "name-en": "2",
            "className": "2",
            "color": "rgb(92, 177, 214)"
        }
        
    };
}

