function translate() {
    var to_translate = document.getElementById("input-text").value.toUpperCase();

    if(!to_translate) {
        alert("Please enter some text!");
        document.getElementById("output-text").value="";
    }
    else{ 
        translated_text = to_translate.replace(/[a-z]/gi, m => MORSE_CODE[m]);
        document.getElementById("output-text").value=translated_text;
    }
}

function copy_to_clipboard() {
    var copy_text = document.getElementById("output-text");
    navigator.clipboard.writeText(copy_text.value);
}

const timer = ms => new Promise(res => setTimeout(res, ms))
var dot = new Audio("audio/dot.mp3");
var dash = new Audio("audio/dash.mp3");

async function play_sound() {
    var translated_text = document.getElementById("output-text").value;
    for(let i of translated_text) {
        switch(i) {
            case ".":
                dot.play();
                await timer(200);
                break;
            case "-":
                dash.play();
                await timer(300);
                break;
            default:
                await timer(200);
                break;
        }
    }
}

let translation_button = document.getElementById("translation-button");
let copy_button = document.getElementById("copy-button");
let play_sound_button = document.getElementById("play-sound-button");

if(translation_button) {
    translation_button.addEventListener('click', event => {
        translate();
    });
}

if(copy_button) {
    copy_button.addEventListener('click', event => {
        copy_to_clipboard();
    });
}

if(play_sound_button) {
    play_sound_button.addEventListener('click', event => {
        play_sound();
    });
}
