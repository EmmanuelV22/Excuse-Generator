
function onLoad(){

    let who = ["The dog ", "My granma ", "His turtle ", "My bird "];
    let what = ["eat my homework ","pissed broke my computer ","crushed all my plants ","dropped my phone "];
    let when = ["<br>before the class","<br>right in time","<br>when I finished","<br>during my lunch","<br>while I was praying"];
    let TheExcuse = " ";
    n = Math.floor(Math.random() * (who.length - 1));
    TheExcuse = TheExcuse + who[n];
    n = Math.floor(Math.random() * (what.length - 1));
    TheExcuse = TheExcuse + what[n];
    n = Math.floor(Math.random() * (when.length - 1));
    TheExcuse = TheExcuse + when[n];

    return TheExcuse;
}

var elem = document.querySelector("#excuse");

elem.addEventListener('click', () =>{
     elem.innerHTML= onLoad();
});