//script de usuabilidade
(function() {
    let startTime, endTime;
    let clickCounter = 0;

//criar um pequeno interface no topo

const dashbord = document.createElement('div');
dashbord.style = "position.fixed; top:0; left:0; width:100%; background:#eeeeee; border-bottom: 2px solid #ccc; z-index:9999; padding: 10px; font-family: Arial; display:flex; gap 20px; align-items:center"

dashbord.innerHTML = `
<strong> Texte de usuabilidade:</strong>
<span id="task-desc">Tarefa:Encontre um itme abaixo de 50R</span>
<button id="start-btn" style="padding:5px 10px; cursor:pointer;">iniciar tarefa </button>
<div id="timer-display">Tempo: 0s</div>
<div id="click-display">Cliques: 0</div>
`;

document.body.prepend(dashbord);
const startBtn = document.getElementById('start-btn')
const timerDispaly = document.getElementById('timer-display')
const clickDispaly = document.getElementById('click-display')

//iniciar cronometro

startBtn.addEventListener('click', () => {
    startTime = new Date();
    clickCounter = 0;
    startBtn.disabled= true;
    startBtn.innerText = "Em progresso . . .";


// atualizar timer visualmente

setInterval(() =>{
    if(startTime && !endTime){
        let now = new Date();
        timerDispaly.innerText = `Tempo: ${((now - startTime)/1000).toFixed(1)}s`;

    }
},100);


});

// Resgistrar cliques na página
document.addEventListener('click' , (e) => {
    if(startTime && !endTime){
        e.target !== startBtn;
        clickCounter++;
        clickDispaly.innerText = `Cliques: ${clickCounter}`;
        console.log(`Usuário clicou em :${e.target.tagName} - ${e.target.innerTxt.substring(0,20)}`);

    };
});


//sair do texte

document.addEventListener('keydown', (e) =>{
    if(e.key === "Escape" && startTime){
        endTime = new Date();
        let totalTime = (endTime - startTime) / 1000;

        alert(`teste finalizado!!!\ntempo Total: ${totalTime}s\nCliques: ${clickCounter}`)
        localStorage.reload(); //Limpa o teste
    }
});

} )();