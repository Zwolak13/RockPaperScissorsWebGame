
let playerDrawSpace = document.getElementById("playerToDraw")
let enemyDrawSpace = document.getElementById("enemyToDraw")
let playerScore,enemyScore;
let playerC,enemyC;
let pp = document.getElementById("playerPoints");
let ep = document.getElementById("enemyPoints");

let timerDisplay = document.getElementById("timer");

const playerChoices = document.getElementById("playerChoices");



window.onload = async function(){


    let allRocks = document.querySelectorAll(".rock");
    allRocks.forEach(rock =>{
        drawShape("rock",rock);
    });

    let allPaper = document.querySelectorAll(".paper");
    allPaper.forEach(paper =>{
        drawShape("paper",paper)
    })

    let allScissors = document.querySelectorAll(".scissors");
    allScissors.forEach(scissors =>{
        drawShape("scissors", scissors)
    })

    playerScore = 0;
    enemyScore = 0;

    udpatePoints();
    await wait(2000)
    startTimer(5);
}



function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function game(playerChoice,enemyChoice) {
    console.log("Dupa");
    let result = playerChoice === enemyChoice ? null : 
        (playerChoice === "rock" && enemyChoice === "scissors") || 
        (playerChoice === "paper" && enemyChoice === "rock") || 
        (playerChoice === "scissors" && enemyChoice === "paper") ? playerScore += 1 : enemyScore += 1;
    
    udpatePoints();
}



function getEnemyChoice() {
switch (Math.floor(Math.random() * 3) + 1) {
case 1: {
    enemyC = "rock";
    return "rock";
}
case 2: {
    enemyC = "paper";
    return "paper";
}
case 3: {
    enemyC = "scissors";
    return "scissors";
}
}
}


function clearMemory(){
    playerDrawSpace.innerHTML="";
    enemyDrawSpace.innerHTML="";
    playerC = null;
    enemyC = null;
}


function startTimer(cd) {

    clearMemory();
    enablePlayerChoice();

    let countdown = cd;
    timerDisplay.innerText = countdown;  
    let timer = setInterval(async function() {
        countdown--; 
        timerDisplay.innerText = countdown;  
        

        if (countdown <= 0) {
            clearInterval(timer);  
            drawShape(getEnemyChoice(),enemyDrawSpace);
            if(playerC == undefined || playerC == null){
                enemyScore += 1;
                udpatePoints();
            }else{
                game(playerC,enemyC);
            }
            disablePlayerChoice();
            await wait(2000);
            startTimer(5);
        }
    }, 1000); 
}

function udpatePoints(){
    pp.innerText = playerScore;
    ep.innerText = enemyScore;
}


function disablePlayerChoice() {
    playerChoices.removeEventListener("click", onPlayerChoiceClick);
    playerChoices.style.backgroundColor = "rgba(179, 63, 63, 0.26)";
}


function enablePlayerChoice() {
    playerChoices.addEventListener("click", onPlayerChoiceClick);
    playerChoices.style.backgroundColor = "rgba(96, 196, 126, 0.26)";
}



function onPlayerChoiceClick(event) {
    const clickedElement = event.target;
    const parentElement = clickedElement.closest('div'); 

    if (parentElement && parentElement.tagName === 'DIV') {
        if (parentElement.classList.contains('rock')) {
            drawShape("rock", playerDrawSpace);
            playerC = "rock";
        } else if (parentElement.classList.contains('paper')) {
            drawShape("paper", playerDrawSpace);
            playerC = "paper";
        } else if (parentElement.classList.contains('scissors')) {
            drawShape("scissors", playerDrawSpace);
            playerC = "scissors";
        } 
    }
    disablePlayerChoice();
}







function drawShape(shape,drawingArea){
    

    drawingArea.innerHTML = "";

    let svg;

    switch(shape){
        case "rock":{
            svg = `
            <svg width="100%" height="100%" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" 
            xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" 
            preserveAspectRatio="xMidYMid meet"><path fill="#66757F" d="M12 4.157s4-1.075 5-1.075s5 1.075 5 1.075s4 4.298 5 4.298c0 
            0 2 0 4 2.149s2 6.447 2 6.447s2 4.298 2 6.447s-1 4.298-2 5.373c-1 1.075-5 2.149-5 2.149s-1 2.149-3 3.224c-6 1.075-10 0-10 0l-2-2.149S6 
            31.02 5 31.02s-4-4.298-4-5.373c0-1.075 0-4.298 1-7.522c2-3.224 3-4.298 3-4.298S4 11.679 5 9.53c2-2.149 6-3.224 6-3.224l1-2.149z"></path><path fill="#99AAB5" 
            d="M12.409 4.49s3.633-1.021 4.574-1.021c.941 0 4.99 1.149 4.99 1.149s3.574 4.022 4.515 4.022c0 0 2.038-.045 3.921 1.979s1.708 5.617 1.708 5.617S34 20.282 
            34 22.305s-.941 4.047-1.882 5.059c-.941 1.012-4.706 2.023-4.706 2.023s-.941 2.023-2.824 3.035c-5.647 1.012-9.412 0-9.412 0l-1.882-2.023s-6.588-1.012-7.529-1.012S2 25.34 
            2 24.328c0-1.012 0-4.047.941-7.082C4.824 14.211 5.765 13.2 5.765 13.2s-1.188-1.643-.247-3.667C7.4 7.51 11.399 6.469 11.399 6.469l1.01-1.979z"></path><path fill="#CCD6DD" 
            d="M12.771 5.312s3.398-.892 4.278-.892c.88 0 4.667 1.003 4.667 1.003s3.342 3.511 4.222 3.511c0 0 1.906-.039 3.667 1.727c1.76 1.766 1.598 4.903 1.598 4.903s.275 4.245.988 
            4.373c1.81.324.167 3.713-.713 4.596s-7.01 1.277-7.01 1.277s.216 2.755-1.545 
            3.639c-5.281.883-7.565.246-7.565.246l-1.76-1.766s-4.29-4.097-5.17-4.097s-5.393-.319-5.393-1.202s0-3.533.88-6.182c1.76-2.649 
            2.641-3.533 2.641-3.533s-1.111-1.435-.231-3.201c1.76-1.766 5.5-2.675 5.5-2.675l.946-1.727z"></path><path fill="#99AAB5" 
            d="M6.29 12.597l3.981 1.851l-2.08 1.468l-4.274.532z"></path><path fill="#66757F" d="M1.597 21.981s1.129 3.766 1.426 4.213s4.099.128 
            4.574.128c.475 0 2.792 1.213 2.792 1.213s-3.089.83-4.158.702c-1.069-.128-3.848-.627-4.099-1.341s-.535-4.915-.535-4.915z"></path><path 
            fill="#E1E8ED" d="M7.3 9.597c.49-.155 3.861-1.596 4.574-1.532c.713.064 3.743 1.787 3.03 2.362s-4.634.128-5.762.128S6.29 9.916 7.3 9.597zm-2.376 7.724c.303-.571 4.337-.766 
            4.337-.766s5.228 2.107 5.228 2.426s-4.752 2.49-5.228 2.553s-4.575-3.766-4.337-4.213zm11.703 3.894c-.094-.505 2.02-3.575 2.436-3.83c.416-.255 6-1.724 6.95-1.724s3.98 
            2.234 4.04 2.681c.059.447-2.673 3.511-3.386 3.766c-.713.256-9.862.064-10.04-.893zm5.347-8.427c-.225.537 5.347 1.277 5.941 1.021c.594-.255 
            1.663-1.979 1.485-2.426c-.178-.447-1.901-1.724-2.792-1.596c-.892.129-4.1 1.725-4.634 3.001zm-4.396-7.851c.498.107 3.802.894 4.218 1.532s-1.96 2.617-2.614 
            2.681c-.653.064-5.109-2.681-5.584-3s3.088-1.405 3.98-1.213z"></path><path fill="#66757F" d="M13.063 31.364c-.416-.638.238-2.745.594-2.49s1.426 1.021 1.485 
            1.66c.059.638 1.129 1.851 1.901 2.234s4.99.383 5.703.128c.713-.255 2.376-1.66 2.792-2.49s.896-.891 1.874-1.02s1.922.844.588 1.634c-1.333.79-2.759 2.195-4.422
             2.514c-1.663.319-7.069.575-8.02.192c-.951-.383-2.495-2.362-2.495-2.362z"></path><path fill="#99AAB5" d="M20.2 26.754c-.501-.269-.688-2.495-.43-2.68s2.666.185 
             3.225.277c.559.092 3.956-.185 4.3.185s1.173 1.726 1.462 2.541c.289.816-1.591.693-2.322.508s-5.547-.461-6.235-.831zm-7.613-14.732c.653 0 3.386-.064 3.98 0c.594.064
              2.495 1.851 1.604 2.043c-.891.192-3.267.83-3.624.894s-1.663-1.149-2.079-1.468c-.415-.32-.593-1.469.119-1.469zm7.486-1.787c.33-.531 1.604-.702 1.663-.128c.059.575-.297 
              1.851-1.01 1.787c-.713-.063-1.129-.893-.653-1.659zm-3.446 13.469c.593-.071 1.723-.192 1.723.319s-.713.702-1.545.638c-.831-.063-.713-.893-.178-.957z"></path><path
               fill="#E1E8ED" d="M14.31 16.619c.519-.446 2.317-.511 2.733-.319c.416.192-.475 1.532-1.01 1.596c-.535.063-2.317-.767-1.723-1.277z"></path><path fill="#66757F" d="M26.191
                26.385c.593-.159 2.02-.319 1.96.128c-.059.447-.653 1.277-1.129 1.213s-1.306-1.213-.831-1.341zm-3.861 4.469c.656-.109 1.663-.638 1.604 0c-.059.638-.772 1.468-1.545 
                1.341c-.772-.128-.831-1.214-.059-1.341z"></path></svg>
        `;
        break;
        }
        case "paper":{
            svg=`<svg height="100%" width="100%" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	                viewBox="0 0 512 512" xml:space="preserve">
                    <polygon style="fill:#FBBA00;" points="119.069,448.441 24.687,512 342.64,512 487.313,414.573 392.932,414.573 "/>
                    <polygon style="fill:#F28E00;" points="392.932,351.014 119.069,384.881 24.687,448.441 342.64,448.441 487.313,351.014 "/>
                    <g>
                    <polygon style="fill:#FBBA00;" points="392.932,287.455 119.069,321.322 24.687,384.881 342.64,384.881 487.313,287.455 	"/>
                    <polygon style="fill:#FBBA00;" points="450.649,256.587 342.64,128.294 450.649,0 132.696,0 24.687,128.294 132.696,256.587 
                    24.687,384.881 342.64,384.881 424.662,287.455 	"/>
                    </g>
                    <g>
                    <polygon style="fill:#FBDB80;" points="132.696,256.587 132.696,256.587 24.687,384.881 342.64,384.881 424.662,287.455 
                    450.649,256.587 450.649,256.587 	"/>
                    <polygon style="fill:#FBDB80;" points="342.64,128.294 450.649,0 132.696,0 24.687,128.294 24.687,128.294 	"/>
                    </g>
                    </svg>`;
            break;
        }
        case "scissors":{
            svg= `<svg height="100%" width="100%" version="1.1" id="_x36_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 512 512"  xml:space="preserve">
<g>
	<g>
		<path style="fill:#C0BEBE;" d="M423.9,35.44c-0.398,7.566-2.628,15.929-6.61,25.088l-88.403,182.461l-10.115,20.867
			c0,0-13.539,1.513-30.264,8.84c-10.433,4.46-22.141,11.229-32.494,21.185c-5.256,5.017-10.194,10.991-14.415,17.84
			c-1.991,3.345-3.902,6.292-5.734,9.159l-29.468-23.574c2.469-2.867,4.699-5.893,6.531-8.76l10.592-15.849l32.494-48.821
			l21.504-32.255l55.511-83.306L405.184,0C418.484,8.84,424.696,20.627,423.9,35.44z"/>
	</g>
	<g>
		<path style="fill:#D6D7D7;" d="M305.63,297.305l-29.467,23.574c-1.832-2.867-3.743-5.814-5.734-9.159
			c-4.221-6.849-9.159-12.822-14.415-17.84c-10.353-9.955-22.061-16.725-32.494-21.185c-16.725-7.327-30.264-8.84-30.264-8.84
			l-5.176-10.593L94.737,60.528c-9.318-21.185-8.92-37.91,1.115-50.573c2.867-3.664,6.531-7.009,10.991-9.955l41.812,62.758
			l91.907,138.02l15.451,23.097l32.494,48.821l10.593,15.849C300.932,291.412,303.161,294.438,305.63,297.305z"/>
	</g>
	<path style="fill:#46ADD8;" d="M212.05,356.161c10.991-16.486,17.123-25.087,23.813-35.282l-29.468-23.574
		c-8.442,9.876-20.468,18.397-38.467,14.097c-10.274-4.221-21.105-6.292-31.777-6.212c-5.097,0.079-10.194,0.637-15.132,1.592
		c-20.309,4.062-39.184,15.928-51.528,34.485l-29.866,44.919c-5.735,8.522-9.557,17.761-11.628,27.158
		c-2.549,11.15-2.628,22.619-0.398,33.609c0.16,0.877,0.398,1.752,0.637,2.629c4.46,19.273,16.087,37.033,33.848,48.82
		c8.283,5.496,17.203,9.32,26.362,11.389c11.389,2.707,23.176,2.867,34.406,0.637c20.229-4.062,39.104-15.929,51.449-34.485
		l29.946-44.919c12.344-18.556,16.088-40.538,11.946-60.767C215.236,365.479,213.882,360.781,212.05,356.161z M172.707,410
		l-29.945,44.917c-6.61,9.955-16.486,16.168-27.317,18.398c-10.911,2.15-22.38,0.159-32.335-6.452
		c-9.955-6.61-16.167-16.486-18.397-27.317c-2.15-10.911-0.239-22.38,6.451-32.335l29.866-44.918
		c6.69-9.955,16.566-16.168,27.397-18.318c10.832-2.15,22.38-0.239,32.335,6.371c9.955,6.611,16.088,16.486,18.318,27.397
		C181.229,388.576,179.317,400.125,172.707,410z"/>
	<path style="fill:#46ADD8;" d="M472.959,387.063c-0.159-0.318-0.398-0.558-0.557-0.876l-29.866-44.919
		c-11.946-17.919-29.945-29.627-49.378-34.008c-0.637-0.159-1.354-0.318-2.071-0.478c-15.451-3.106-31.857-1.672-46.989,4.619
		c-17.999,4.301-30.025-4.221-38.467-14.097l-29.467,23.574c6.61,10.194,12.822,18.796,23.813,35.282
		c-1.832,4.619-3.186,9.318-4.142,14.097c-4.142,20.229-0.398,42.211,11.946,60.767l29.946,44.919
		c12.345,18.556,31.22,30.423,51.449,34.485c20.229,4.062,42.211,0.319,60.767-12.026c18.556-12.344,30.423-31.219,34.485-51.449
		C488.41,427.043,484.906,405.46,472.959,387.063z M447.315,439.547c-2.23,10.831-8.442,20.707-18.397,27.317
		c-9.955,6.611-21.424,8.602-32.335,6.452c-10.832-2.23-20.707-8.443-27.317-18.398L339.319,410
		c-6.61-9.876-8.522-21.424-6.371-32.256c2.23-10.911,8.362-20.787,18.318-27.397c9.955-6.611,21.504-8.522,32.335-6.371
		c10.831,2.15,20.707,8.362,27.397,18.318l29.866,44.918C447.553,417.167,449.465,428.636,447.315,439.547z"/>
	<circle style="fill:#8A8B8A;" cx="255.388" cy="259.89" r="11.482"/>
</g>
</svg>`;
            break;
        }

       
    }
    drawingArea.innerHTML = svg;
}