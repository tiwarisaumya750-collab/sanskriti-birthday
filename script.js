function nextPage(pageNumber){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page'+pageNumber).classList.add('active');
}

let code = '';
const correctCode = '0806';

function createKeypad(){
  const keypad = document.querySelector('.keypad');

  for(let i=0;i<=9;i++){
    const btn = document.createElement('button');
    btn.innerText = i;

    btn.onclick = ()=>{
      if(code.length < 4){
        code += i;

        document.getElementById('d'+code.length).innerText = i;
      }

      if(code.length === 4){
        if(code === correctCode){
          document.getElementById('page2btn').disabled = false;
          alert('Yayyyy clever babyyyy 💖');
        } else {
          document.getElementById('hint').innerText = 'Hint - 🎂';
          code='';

          for(let i=1;i<=4;i++){
            document.getElementById('d'+i).innerText='';
          }
        }
      }
    }

    keypad.appendChild(btn);
  }
}

createKeypad();

function openEnvelope(){
  document.getElementById('loveNotes').style.display='flex';
}

let cakeTaps = 0;

function eatCake(){
  cakeTaps++;

  document.getElementById('cake').style.opacity = 1 - cakeTaps*0.15;

  if(cakeTaps >= 5){
    document.getElementById('gifts').style.display='flex';
  }
}

let collected = 0;

function collectGift(item){
  item.style.transform='translateY(300px)';
  item.style.opacity='0';

  collected++;

  if(collected >= 3){
    document.getElementById('page5btn').disabled=false;
  }
}

function playVoice(){
  document.getElementById('voiceAudio').play();
}

function playKissVN(){
  document.getElementById('kissAudio').play();
}
