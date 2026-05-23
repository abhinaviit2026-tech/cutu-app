const lines = [

"Tum online aati ho toh notification bhi cute lagta hai 💖",

"Sach bolu? Tumhari vibe dangerous level ki achi hai ✨",

"Agar smiles addictive hoti... toh shayad main guilty hota 😭",

"Tumhari ek reply = pura din acha ❤️",

"Shayad tumhe pata nahi... par tum kaafi special ho 🌸"

];

let index = 0;

function changeText(){

    document.getElementById("shayari").innerText = lines[index];

    index++;

    if(index >= lines.length){
        index = 0;
    }
}