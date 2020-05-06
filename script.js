const sentences = [
"Une meuf c'est comme une voiture, faut mettre le contact pour qu'elle devienne chaude",
"Jvais lui mettre la viande dans le torchon",
"C'est pas parce qu'il y a un pilote dans l'avion que tu peux pas le détourner",
"J'aime mon café comme j'ai mes femmes : sans poil",
"Les seins c'est comme le ricard : un c'est pas assez, trois c'est trop",
"Viens donc tâter et me dire si c'est de la guimauve",
"Fais-moi baver la limace",
"Dégorge-moi le poireau",
"Tape dans l'fond, j'suis pas ta mère",
"Elle mérite son p'tit coup de chevrotine celle-là",
"Elle a une belle paire et pourtant j'suis pas cordonier",
"C'est un beau poisson et pourtant j'suis pas pecheur",
"Fais coucou à Popol",
"Hi Mr. Zug, we've been waiting for you.",
];
const buttonSentences = document.querySelector('.beauf');
const buttonEvent = document.querySelector('.buttonEvent');
const main = document.querySelector('main');
const dwayne = document.querySelector('.dwayne');
let counterClick = 0 ;
let time = 0 ;


const randomizeArray = function(Array){
    return(Math.floor(Math.random()*Array.length));
};

buttonSentences.addEventListener('click', ()=>{
    const sentenceIndex = randomizeArray(sentences);
    main.style.color = "#000" ;
    main.innerText = sentences[sentenceIndex];
    main.dataset.index = `${sentenceIndex}` ;
    if(sentenceIndex === 13){
        buttonEvent.classList.add("zugIcon");
    }
});

buttonEvent.addEventListener('click',()=>{
if(buttonEvent.dataset.pass1 === "true" && buttonEvent.dataset.pass2 === "true" && buttonEvent.dataset.pass3 === "true"){
    alert("wsh kevnar");
    buttonEvent.setAttribute("href","https://www.oettinger-bier.de/splash-page");
}
if(buttonEvent.classList.contains("zugIcon")){
    buttonEvent.classList.remove("zugIcon");
}
if(document.body.dataset.isFilled === "false"){
    document.body.classList.add("ricardBackground");
    document.body.dataset.isFilled = "true";
} else {
    document.body.classList.remove("ricardBackground");
    document.body.dataset.isFilled = "false";
}
});
//Mot de passe
document.body.addEventListener('keydown',(event)=>{
if(buttonEvent.classList.contains("zugIcon")){
    if(event.code === "KeyW"){
        buttonEvent.dataset.pass1 = "true";
    } else if(event.code === "KeyU"){
        buttonEvent.dataset.pass2 = "true";
    } else if(event.code === "KeyG"){
        buttonEvent.dataset.pass3 = "true";
    }
}
});
//clicker counter
document.body.addEventListener('click',(event)=>{
    if(counterClick === 0){
        time = event.timeStamp ;
        counterClick++ ;
    } else if(counterClick > 7){
        if((event.timeStamp - time) < 2000){
            main.style.color = 'red';
            main.innerText = "EHO C PAS UN CLITO!";
        }
        time = 0 ;
        counterClick = 0 ;
    } else {
        counterClick++ ;
    }
});
//dwayne qui bouge
dwayne.addEventListener('mouseenter',()=>{
if(dwayne.style.bottom === "500px"){
    dwayne.style.bottom = "0px";
} else {
    dwayne.style.bottom = "500px";
}
});
