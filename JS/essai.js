function jej() {
    var value = document.getElementsByName('bitch')[0];
    var div = document.createElement('div');

    if(value.checked) {div.textContent = "Hello World !";}
    else {div.textContent = "ntm";}
    // div.textContent = value.checked;
    
    document.body.appendChild(div);
}

function inputText() {
    var div1 = document.createElement('div');
    div1.innerHTML = '<strong><span style="color: red;font-size:100px">TG BAPTISTE</span></strong>';
    document.body.appendChild(div1);

    getIP();
}

window.onload = function() {
    var input = document.getElementsByClassName('ntm')[0];
    input.value = '';
}

function getIP() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            var div2 = document.getElementsByClassName('ntm')[0];
            div2.value = "Ton IP est " + data.ip;
            
            
        })
        .catch(error => console.error('Error:', error));
}

function inputTest() {
    var inputValue = document.getElementsByClassName('ntm')[0].value.toLowerCase();
    var liste_search = document.getElementsByClassName('ecole_texte');

    for (let i = 0; i < liste_search.length; i++) {
        let texte = liste_search[i].textContent || liste_search[i].innerText;
        if (!texte.toLowerCase().includes(inputValue)) {
            liste_search[i].parentElement.style.display = 'none';
        } else {
            liste_search[i].parentElement.style.display = ''; // Affiche l'élément si le texte correspond
        }
    }
}