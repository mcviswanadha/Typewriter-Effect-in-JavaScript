const textDisplay = document.getElementById('text');
const pharse = ['Hello, My name is Viswanath.', 'I love to code.', 'I love to teach code.'];
let i =0;
let j =0;
let currentPhase = [];
let isDeleting = false;
let isEnd = false;
textDisplay.innerHTML = currentPhase.join('')

function loop () {
    isEnd - false
    textDisplay.innerHTML = currentPhase.join('');
    if (i < pharse.length) {
        if (!isDeleting && j <= pharse[i].length) {
            currentPhase.push(pharse[i][j]);
            j++;
            textDisplay.innerHTML = currentPhase.join('')
        }
        
        if(isDeleting && j <= pharse[i].length) {
            currentPhase.pop(pharse[i][j]);
            j--;
            textDisplay.innerHTML = currentPhase.join('')
        }

        if (j == pharse[i].length) {
            isEnd = true
            isDeleting = true
        }

        if (isDeleting && j === 0) {
            currentPhase = [];
            isDeleting = false;
            i++

            if (i == pharse.length) {
                i = 0;
            }
        }

    }
    const spedUp = Math.random() * (80 - 50) + 50;
    const normalSpeed = Math.random() * (300 - 200) + 200
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
    setTimeout(loop, 500);
}

loop();

