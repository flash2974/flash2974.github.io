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