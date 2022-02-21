//Question database:   // kolik?
//Dostat score from localstorage
//set lifes = 3; ?
// class Game
    // function: play (start the game, load all stuff)
    // function: next()
    // function: reset (end the game, delete all stuff)
    // function: end 
    // function gameOver(if lifes === 0) ?
//Random question
//Random options positions
//class Answer 
    //finalActions()
//Nastavení score
// if score record -> save to localStorage
// if (lifes>0) after check answer -> load new questin (with its options)
// --------------------------------------------------

//Questions
const questionDatabase = [
   
    {ID: 0, question: 'Zánik závazku odstoupením od smlouvy', option1: 'Poruší-li strana smlouvu podstatným způsobem, může druhá strana bez zbytečného odkladu od smlouvy odstoupit', option2: 'Zakládá-li prodlení jedné ze smluvních stran nepodstatné porušení její smluvní povinnosti, může druhá strana od smlouv odstoupit, poté coprodlévající...', option3: 'V případě odstoupení od smlouvy nemůže strana, která odstoupila požadovat nárok na náhradu škody', option4: 'Odstoupením od smlouvy se závazek zrušuje od počátku', answers: [1,2,4]},

    {ID: 1, question: 'Statutárním orgánem společnosti s ručením omezeným je?', option1: 'výkonný ředitel', option2: 'statutární ředitel', option3: 'představenstvo', option4: 'jeden nebo více jednatelů', answers: [4]},

    {ID: 2, question: 'Odvolání proti rozsudku soudu první instance', option1: 'Se podává do 15 dnů od ustního vyhlášení rozsudku', option2: 'Se podává do 15 dnů doručení písemného vyhotovení rozsudku', option3: 'Se podává do 8 dnů od doručení písemného vyhotovení rozsudku', option4: 'Se podává do 1 měsíce od doručení písemného vyhotovení rozsudku', answers: [2]},

    {ID: 3, question: 'Návrh na zahájení soudního řízení ?', option1: ' Musí obsahovat souhlas žalovaného', option2: 'Musí obsahovat petit', option3: ' Musí obsahovat vylíčení skutečností', option4: 'Musí obsahovat označení důkazů', answers: [2,3,4]},

    {ID: 4, question: 'U akciové společnosti se vklad označuje jako?', option1: 'Jmenovitá nebo účetní hodnota akcie', option2: 'základní jmění', option3: 'základní kapitál', option4: 'kmenové jmění', answers: [1]},

    {ID: 5, question: 'V jakých případech závazkových vztahů se převážně projevují specifika podnikatelských vztahů?', option1: 'u tiché společnosti', option2: 'u prokury', option3: 'u obchodního zastoupení', option4: 'u kupní smlouvy mezi občany', answers: [1,2,3]},

    {ID: 6, question: 'Právnická osoba není?', option1: 'tichá spolešnost', option2: 'společnost podle občanského zákoníku', option3: 'nadace', option4: 'domácnost', answers: [1,2,4]},

    {ID: 7, question: 'Úrok z prodlení', option1: 'Jmenovitá nebo účetní hodnota akcie', option2: 'základní jmění', option3: 'základní kapitál', option4: 'kmenové jmění', answers: [2,3,4]},

    {ID: 8, question: 'Podnikatelem není', option1: 'zaměstnanec', option2: 'advokát', option3: 'společník c s.r.o', option4: 'živnostník', answers: [1]},

    {ID: 9, question: 'Obchodní firma je', option1: 'obchodní společnost', option2: 'závod, který vlastní podnikatel', option3: 'jméno podnikatele, které je zapsáno v obchdním rejstříku', option4: 'jméno fyzické osoby - podnikatele, zapsané v obchodním rejstříku', answers: [3,4]},

    {ID: 10, question: 'Valná hromada ve společnosti s ručením omezeným', option1: 'volí a odvolává členy představenstva', option2: 'volí a odvolává jednatele', option3: 'volí a odvolává statutárního ředitele', option4: 'volí a odvolává dozorční radu jestliže byla zřízena', answers: [2,4]},

    {ID: 11, question: 'Obchodní právo upravuje', option1: 'vztahy mezi pocnikateli', option2: 'vztahy mezi zaměstnavateli a zaměstnanci', option3: 'jiné vztahy související s podnikáním', option4: 'vztahy mezi občany', answers: [1,3]},

    {ID: 12, question: 'Právním jednáním ', option1: 'osoby omezené v svépravnosti, může právní vztah vzniknout, jen pokud je řádně zastoupená', option2: 'nemůžeme nikdy právní vztah změnit', option3: 'můžeme založit smluvní vztah, pokud jsme svéprávní', option4: 'může založit právní vztah kdokoli s právní osobností', answers: [1,3]},

    {ID: 13, question: 'Mezi prameny obchodního práva', option1: 'nepatří zákon o regulaci reklamy', option2: 'patří občanský zákoník', option3: 'patří i zákon o cenných papírech', option4: 'nepatří zákon o obchodních korporacích', answers: [1,2,3]},

    {ID: 14, question: 'Okamžikem vzniku právnické osoby', option1: 'je její založení', option2: 'nybývá právnická osoba právní osobnost', option3: 'která byla založena zakladatelským právním jednáním, je zapsání do veřejného rejsříku', option4: 'která vznikla na základě zákona, je datum účinnosti zákona', answers: [2,3]},

    {ID: 15, question: 'Smluvní pokuta', option1: 'nelze ji snížit', option2: 'v případě porušení povinnosti, na kterou je vázána vzniká povinnost ji zaplatit', option3: 'nemusí být sjednána v písemné formě', option4: 'je vázána na způsobenou škodu', answers: [2,3]},

    {ID: 16, question: 'Zápis do obchodního rejstříku', option1: 'se neuskutečňuje vůbec pří vzniku obchodních korporací', option2: 'se v kapitálových společnostech uskutečňuje na základě návrhu, který podávají na rejsříkový soud jednatelé, členové představenstva, nebo statutární ředitel', option3: 'se uskutečňuje na základě návrhu, který se podává na rejstříkový soud a to v minimální lhůtě 6 měsíců od založení', option4: 'se uskutečňuje na základě návrhu, který se podává na rejstříkový soud a to v neurčené lhůtě', answers: [2],},

    {ID: 17, question: 'Společenská smlouva', option1: 'je smlouva o společnost ve státě', option2: 'může určovat, jestli má společník v s.r.o vkladovou povinnost', option3: 'může určovat, jestli má společník v s.r.o vkladovou povinnostmůže určovat, jestli má společník ve v.o.s vkladovou povinnost', option4: 'je smlouva, kterou se zakládá obchodní korporace', answers: [3,4]},

    {ID: 18, question: 'Likvidace právnické osoby se provádí', option1: 'vždy po zrušení právnické osoby', option2: 'pouze pokud nepřechází majetek a závazky na právního nástupce', option3: 'po zániku právnické osoby', option4: 'v případě fúze', answers: [2],},

    {ID: 19, question: 'Materiální publicita vyjadřuje', option1: 'že veřejný rejstřík je každému přístupný, každý má právo do něho nahlížet a pořizovat si výpisy a opisy', option2: 'Proti osobě, která právně jedná důvěřujíc údaji zapsanému do veřejného rejsříku, nemá ten, jehož se zápis týká, právo namítnout, že zápis neodpovídá skutečnosti', option3: 'je principem důvěry, víry právních účinků zápisu v obchodním rejstříku', option4: 'Údaje a obsah listin, jejichž zveřejnění zákon ukládá, může zapsaná osoba namítat vůči třetím osobám až od okamžiku jejich zveřejnění, ledaže by prokázala, že třetí osobě byly známy dříve', answers: [2,3,4],},

    {ID: 20, question: 'Veřejná obchodní společnost', option1: 'může jí založit i jeden zakladatel', option2: 'jménem společnosti mají oprávnění jednat všichni společníci, pokud není upraveno jinak ve společenské smlouvě', option3: ')společník má povinnost ke vkladu', option4: 'společníci ručí za její dluhy společně a nerozdílně', answers: [2,4]},

    {ID: 21, question: 'Kmenová list je', option1: 'rozhodnutí valné hromady', option2: 'cenný papír v s.r.o', option3: 'zvláštní forma notářského zápisu', option4: 'jakákoliv listina o podílu společníka', answers: [2]},

    {ID: 22, question: 'Statutárním orgánem komanditní společnosti jsou/je', option1: 'jednatel', option2: 'všichni komplementáři', option3: 'statutární ředitel', option4: 'všichni komandisté', answers: [2]},

    {ID: 23, question: 'Soudní poplatek se při podání návrhu na zahájení řízení', option1: 'v případě, že předmětem soudního řízení není peněžité plnění, číní soudní poplatek 1000,- Kč', option2: 'vypočítává ve výši 4% ze žalované částky', option3: 'vypočítává ve výši 10% ze žalované částky', option4: 'vypočítává ve výši 5% ze žalované částky', answers: [4]},

    {ID: 24, question: '(25) Ve veřejné obchodní společnosti', option1: 'mohou společníci vždy podnikat neomezeně mimo danou společnost', option2: 'společenská smlouva může zákaz konkurence upravit odlišně', option3: 'bez svolení ostatních společníků nesmí společník podnikat v předmětu podnikání společnosti', option4: 'společník nesmí být členem statutárního orgánu jiné obchodní korporace s obdobným předmětem podnikání', answers: [2,3,4]},
]

const geographyQuestionsDB = [ 
    
    {ID: 1, question: 'Jak vysoká je hora Mount Everest ?', option1: '8849m', option2: '7652m',  option3: '8742m', option4: '8564m',},

    {ID: 2, question: 'Jak vysoká je hora Snezka ?', option1: '1602m', option2: '1605m', option3: '1608m', option4: '1604',},

]

let testArrayFromJSON = []

// const historyQuestionsDB = []
// const matfyzQuestionsDB = []

// --------------------------------------------------
//Variables
const quizBox = document.querySelector('.main-quiz-box');
let question = document.querySelector('.question');
let indexID = 0;
let index = 0;
let clicked = [];
let lifes = 3;
// --------------------------------------------------1
class Home {
    constructor(time, record, player) {
        time, 
        record, 
        player
    }
    static display() {
        //home UI
        let home = new Home('20:00', 42, 'Honza');
        quizBox.innerHTML =
        `   <div class="extra"><h4 class="question">${"{'Hello I am Quizapp !!'}"}</h4></div>
        `
    }
    static endDisplay() {
        let home = new Home('20:00', 42, 'Honza');
        quizBox.innerHTML =
        `   <div class="extra"><h4 class="question">${"The end:)"}</h4></div>
            <p>Your score: ${score}</p>
        `
    }
}
// --------------------------------------------------2
class Submit {
    static answer() {
        let submit = true;
        let submitBtn = document.querySelector('#submit');
        submitBtn.addEventListener('click', Answer.finalActions);
        return submit;
    }
    static removeListener() {
        let submitBtn = document.querySelector('#submit');
        submitBtn.removeEventListener('click', Answer.finalActions)
    }
}
// ---------------------------------------------------3
class Quiz {
    constructor(txt, options) {
        txt,
        options;
    }

    display(index) {
        // let i = Game.randomQuestion(); // for random
        let QDi = questionDatabase[index]
        quizBox.innerHTML = 
        `   <div class="extra"><p class="question">${QDi.question}</p></div>
            <div class="option-box" id="1"><ul><li>${QDi.option1}</li></ul></div>
            <div class="option-box" id="2"><ul><li>${QDi.option2}</li></ul></div>
            <div class="option-box" id="3"><ul><li>${QDi.option3}</li></ul></div>
            <div class="option-box" id="4"><ul><li>${QDi.option4}</li></ul></div>    
        `
    }

    static deleteClasses() {
        let options = document.querySelectorAll('.option-box');
        options.forEach(option=> option.classList.remove('option-box-clicked'));
    }
    static addClass() {
        let options = document.querySelectorAll('.option-box');
        for (let option of options) {option.classList.add('option-box-clicked');}
    }

    static pickOption() {
        let options = document.querySelectorAll('.option-box');
        options.forEach(option=> {
            option.addEventListener('click', ()=> {
                if (option.classList.contains('option-box-clicked')) {
                    option.classList.remove('option-box-clicked'); 
                    const index = clicked.indexOf(Number(option.id));
                    clicked.splice(index, 1);
                } else {
                    option.classList.add('option-box-clicked');
                    clicked.push(Number(option.id));
                    clicked.sort();
                } 
                Submit.answer();
            });
        });
    }

    static clear() {
        let home = new Home()
        quizBox.innerHTML = '';
        scoreDisplay.innerHTML = 0;
        score = 0;
        index = 0;
        indexID = 0;
    }
}
// ---------------------------------------------------4
class Game {
    static play() {
        playBtn.removeEventListener('click', playListener);
        function go() {
            let quiz = new Quiz();
            quiz.display(index);
            index < questionDatabase.length ?
            index +=1 : index;
            Quiz.pickOption();
        }
        index === questionDatabase.length ? Game.end() : go();
    }
    static next() {
        Home.display()
    }
    static reset() {
        playBtn.addEventListener('click', playListener);
        Quiz.clear();
        Home.display()
    }
    static end() {
        playBtn.addEventListener('click', playListener);
        Quiz.clear();
        Home.endDisplay()
    }
    static consolLog() {
        let actualIndexQuestion = JSON.stringify(index);
        console.log('Question: '+
        actualIndexQuestion + ", " + ' Your answer: ' + clicked);
    }
    static randomQuestion() {
        // Pro random gnerování otázek : let n = Math.floor(Math.random()*questionDatabase.length);
        // let random = questionDatabase[n];
    }
}
// --------------------------------------------------5
class Answer {
    constructor(index, answer) {
        index, 
        answer
    }

    static finalActions() {
        correctAnswer(indexID, clicked);
        clicked = [];
        Game.next();
        indexID+=1;
        Game.play()
        Submit.removeListener()
    }
}
// --------------------------------------------------6
//check correct answer
function correctAnswer(id, answers) {
    JSON.stringify(questionDatabase[id].answers) === JSON.stringify(answers) ?
    score+=4 : 
    // console.log(id+"_"+JSON.stringify(answers)+' _different array')
    console.log(answers);
    Game.consolLog();
    scoreDisplay.innerHTML = score;
}

let playBtn = document.querySelector('#play-btn');
let resetBtn = document.querySelector('#reset-btn');

function playListener(e) {
    e.preventDefault();
    Game.play()
}

playBtn.addEventListener('click', playListener);
resetBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    Game.reset()
});

// Score
let score = 0;
let scoreDisplay = document.querySelector('#score');


//--------------////--------------//
//--------------//// Future TASKS:
//--------------////--------------//

//dopsat správné odpovedi + dalsi otazky

// funkce pro ukladani do localStorage

// serazaeni cisel v answeru r.131

// let home = new Home('20:00', 42, 'Honza'); - propsat aktualni cas, best score, uzivatele

// neopakovani stejnych otazek 

//..//..//  Treninkový on-line test pro předmět PVP

