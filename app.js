function playAudio(num){
    const innerDrum = document.getElementById(`innerDrum${num}`);
    let aud = document.createElement('audio');
    aud.setAttribute("src",`./audio/audio${num}.mp3`);
    aud.setAttribute("volume",1.0)
    aud.play();
    innerDrum.appendChild(aud);
}

let place = [5,6,7,0,4,0,1,2,3];
            //  1,2,3,4,5,6,7,8,9
document.body.addEventListener("keypress",(event) => {
    let num = Number(event.key);
    if(num==1 || num==2 || num==3 || num==5 || num==7 || num==8 || num==9)
    playAudio(place[num-1]);
    else
    return;
})