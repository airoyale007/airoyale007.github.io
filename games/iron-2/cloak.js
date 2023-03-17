function addCss(){
    const e = document.createElement('style');
    e.innerHTML = `
    button.in-game-button {
        position: absolute;
        z-index: 9999;
        top: 61px;
        left: 0;
        width: 160px;
        height: 50px;
        background: #fff;
        border-radius: 0 290486px 290486px 0;
        color: #000;
        padding: 0 10px;
        line-height: 50px;
        min-height: 50px;
        border: none;
        border-bottom: 3px solid #b5b5b5;
        will-change: transform;
        animation: bounceY 2s .5s;
        transition: transform .5s cubic-bezier(.55,0,.1,1);
        display: flex;
        align-items: center;
        justify-content: center
    }
    
    button.in-game-button svg {
        pointer-events: none;
        color: #b5b5b5;
        margin-right: .625rem;
        display: inline-block
    }
    
    button.in-game-button img {
        pointer-events: none;
        width: 150px;
		heigt:43px;
    }
    
    button.in-game-button:active {
        background: #1ec2e5
    }
    
    button.in-game-button[attr-active=true] {
        transform: translateX(0)
    }
    
    @media(max-height: 350px) and (orientation:landscape) {
        button.in-game-button[attr-active=true] {
            transform:translateX(-75px)
        }
    }
    
    button.in-game-button[attr-snapped=true] svg {
        display: none
    }
    
    button.in-game-button[attr-snapped=true] img {
        transform: translate(-5px)
    }
    
    i.in-game-trash {
        z-index: 1;
        bottom: 0;
        left: 0;
        height: 50px;
        width: 50px;
        line-height: 50px;
        text-align: center;
        color: #fff
    }
    
    i.in-game-trash,i.in-game-trash svg {
        transform: scale(0);
        position: absolute
    }
    
    i.in-game-trash svg {
        z-index: 2;
        left: 20px;
        bottom: 20px;
        fill: #fff;
        will-change: transform;
        transition: transform .1s cubic-bezier(.55,0,.1,1)
    }
    
    i.in-game-trash:before {
        content: " ";
        position: absolute;
        z-index: 1;
        bottom: -100px;
        left: -100px;
        width: 200px;
        height: 200px;
        transform: scale(0);
        border-radius: 100%;
        background-color: transparent;
        will-change: transform,background-color;
        transition: transform .5s cubic-bezier(.55,0,.1,1),background-color .2s cubic-bezier(.55,0,.1,1)
    }
    
    i.in-game-trash[attr-active=true] {
        transform: scale(1)
    }
    
    i.in-game-trash[attr-active=true] svg {
        transition-duration: .8s;
        transform: scale(1)
    }
    
    i.in-game-trash[attr-active=true]:before {
        transform: scale(1);
        background-color: #ed1c24
    }
    
    i.in-game-trash[attr-inrange=true] svg {
        transition-duration: .2s;
        transform: scale(0)
    }
    
    i.in-game-trash[attr-inrange=true]:before {
        transform: scale(1.2);
        background-color: #ed1c24
    }
    .main-nav {
        z-index: 999;
        overflow-y: auto;
        will-change: transform;
        backface-visibility: hidden;
        transform: translateX(105%);
        height: 100%;
        transition: .3s ease-in-out;
        background: #f5f5f5;
        width: 39.5rem;
        position: fixed;
        top: 0;
        right: 0;
        padding:20px;
        color:black;
    }
    .main-nav.open {
        transform: translateX(0);
    }
    #post{
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        color: #3f3424;
    }
    #claimBtn{right:0;border-radius: 290486px 0 0 290486px;left:auto}
    `;  
    document.getElementsByTagName('head')[0].appendChild(e);
}
function addBtnHome(){
    var e = document.createElement('button');
    e.className = 'in-game-button';
    e.id = 'inGame';
    e.innerHTML = `
    <img src="https://blackboro.github.io/games/logo-77games.png" width="150px" height="43px" alt="Logo">`;
    document.getElementsByTagName('body')[0].appendChild(e);
}


function loadFirebase(){
    var  r = document.createElement("script");
	r.setAttribute("src", "https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"), r.setAttribute("type", "text/javascript"), r.setAttribute("crossOrigin", "anonymous"),  r.onload = function (){
        var  database = document.createElement("script");
        database.setAttribute("src", "https://www.gstatic.com/firebasejs/8.10.0/firebase-database.js"), database.setAttribute("type", "text/javascript"), database.setAttribute("crossOrigin", "anonymous"),  database.onload = function (){
            var  authsc = document.createElement("script");
            authsc.setAttribute("src", "https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js"), authsc.setAttribute("type", "text/javascript"), authsc.setAttribute("crossOrigin", "anonymous"),  authsc.onload = function (){    
                var firestoresc =  document.createElement("script");
                firestoresc.setAttribute("src", "https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js"), firestoresc.setAttribute("type", "text/javascript"), firestoresc.setAttribute("crossOrigin", "anonymous"),  firestoresc.onload = function (){    
                    var  loginsc = document.createElement("script");
                    loginsc.setAttribute("src", "/mainsite/login.js"), loginsc.setAttribute("type", "text/javascript"), document.head.appendChild(loginsc);
                },document.head.appendChild(firestoresc);
                
            }, document.head.appendChild(authsc);
        },document.head.appendChild(database);
    },document.head.appendChild(r);
}
if (window.location.href !== 'https://77games.io/') {
    window.addEventListener('load', function() {
        addCss();
        addBtnHome();
        // loadFirebase();
        var btn = document.getElementById("inGame");
        btn.addEventListener("click", returnHome);
        dragElement(document.getElementById("inGame"));
        dragElement(document.getElementById("claimBtn"));
        var btn = document.getElementById("claimBtn");
        btn.addEventListener("click", openInfo);
    });
};
var hold = false;
var click = 0;
function openInfo(){
    var  e = document.getElementById("post");
    console.log(window.hold);
    if(window.hold == true){
        return;
    }
    if(!e.classList.contains("open")){
        console.log(1);
        e.classList.add('open');
    } else {
        e.classList.remove('open');
    }
    window.hold = false;

}
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id)) {
        document.getElementById(elmnt.id).onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
        
    
    
}

function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
}

function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    window.click = 1;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";

}

function closeDragElement() {

    document.onmouseup = null;
    document.onmousemove = null;
    //window.hold = true;
    if(window.click == 1){
        window.hold = true;
        window.click = 0;
    }
    setTimeout(function (){ window.hold = false}, 100);
    console.log(window.hold);
}
}
function returnHome(){
    if(window.hold == true){
        return;
    }
    var newWindow = window.open("https://77games.io", "_blank");
    newWindow.document.title = "77GAMES.io";
}
function opendiscord(){
    window.open("https://77games.io");
}
window.alert = function() {};

// or simply
alert = function() {};

