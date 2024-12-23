// 1. Kliknutí na tlačítko vyskočí alert.
let first = document.getElementById('script');

first.addEventListener('click', function(){
    alert("Vyskočil mi alert")
})

// 2.Kliknutí na tlačítko se změní text uvnitř button.
const second_button = document.getElementById('button');

second_button.addEventListener('click', function(){
    second_button.textContent = "Změnilo se";

})

// 3. Kliknutí na tlačítko se změní vytvořený text.
const changeTextButton = document.getElementById('changeTextButton');
const textChange = document.getElementById('textChange');
changeTextButton.addEventListener('click', function(){
    textChange.textContent = "Text byl změněn";
}); 

// 4. Kliknutím na tlačítko se napíše text.
const button = document.getElementById('textbutton');
const outputDiv = document.getElementById('outputText');
button.addEventListener('click', function(){
    outputDiv.textContent = "Zde je napsaný text";  
}) 


// 5. Napsání do label jméno a kliknutím na tlačítko vyskočí alert s pozdravem.
function hellouser() {
    let user = document.getElementById('user').value;
    alert('Vítám vás na webové stránce ' + user);
}

// 7.  Po kliknutí na button se zobrazí aktuální čas
let time = document.getElementById('cas');
let finaltime = document.getElementById('finaltime');

time.addEventListener('click', function(){
    let actualtime = new Date();
    let formattime = actualtime.toLocaleTimeString();
    finaltime.textContent = "Aktuální čas je: " + formattime;
});

// 8. Po kliknutí na button se zobrazí aktuální datum.
let date = document.getElementById('datum');
let finaldate = document.getElementById('finaldate');

date.addEventListener('click', function(){
    let actualdate = new Date();
    let formatdate = actualdate.toLocaleDateString();
    finaldate.textContent = "Aktuální datum je: " + formatdate;
});  

// 9. Přejetím na text myší se text změní.
moveText.addEventListener('mouseover', function(){
    moveText.textContent = "Text se po najetí změnil";
});

moveText.addEventListener('mouseout', function(){
    moveText.textContent = "Změna";
});

// Webové stránky 2.0 přičtení 3 k zadané hodnotě
document.getElementById('tlacitko1').addEventListener('click', () => {
    const input = parseFloat(document.getElementById('input1').value);
    const result = input + 3;
    document.getElementById('result2').textContent = 'Výsledek: ' + result;
});

// Sečtení dvou čísel
document.getElementById('tlacitko2').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('input2a').value);
    const num2 = parseFloat(document.getElementById('input2b').value);
    const result = num1 + num2;
    document.getElementById('result2').textContent = 'Výsledek: ' + result;
});

// Task manager
document.getElementById('addTaskBtn').addEventListener('click', () => {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    const taskItem = document.createElement('li');
    taskItem.innerHTML = taskText + ' <button onclick="this.parentElement.remove()">Odebrat</button>';
    document.getElementById('taskList').appendChild(taskItem);

    taskInput.value = '';
});
