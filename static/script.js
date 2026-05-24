const lines = [

"Tumhari smile pura din acha bana deti hai 💖",

"Sach bolu...? Tum dangerous level ki cute ho 😭",

"Tumhari vibe bohot alag hai ✨",

"Shayad tumhe idea bhi nahi... tum kitni special ho ❤️",

"Aur haan... ye site sirf tumhare liye bani hai 🌸"

];

let current = 0;

function typeText(text){

    let i = 0;

    const typing = document.getElementById("typing");

    typing.innerHTML = "";

    const interval = setInterval(() => {

        typing.innerHTML += text.charAt(i);

        i++;

        if(i >= text.length){

            clearInterval(interval);
        }

    },50);
}

function changeText(){

    current++;

    if(current >= lines.length){

        current = 0;
    }

    typeText(lines[current]);
}

function openSite(){

    document.getElementById("intro").style.display = "none";

    document.getElementById("mainCard").classList.remove("hidden");

    document.getElementById("music").play();

    typeText(lines[0]);
}