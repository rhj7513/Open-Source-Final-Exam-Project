function selectGender(getInput) {
    localStorage.setItem("gender", getInput);
    window.location.href = './Select_Age.html';
}


function selectAge(getInput) {
    localStorage.setItem("age", getInput)
     if(getInput=='ten'){
         window.location.href = './Select_Event_ten.html';  
        }
    else if(getInput=='twenty'){
         window.location.href = './Select_Event_twenty.html';  
        }
    else if(getInput=='forty'){
        window.location.href = './Select_Event_forty.html';  
        }
   else if(getInput=='sixty'){
    window.location.href = './Select_Event_sixty.html';  
    }       
}




function selectEvent(getInput) {
    localStorage.setItem("event", getInput);
    window.location.href = './Final.html';
}

function exitLoading() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("center").style.display = "none";
    document.getElementById("container").style.display = "block";
}

function appendResults(response){
    // for (var i = 0; i <response.length; i++){
    //     console.log(response[i]);
    // }
    document.getElementById("1st").innerHTML = response[0].present;
    document.getElementById("2nd").innerHTML = response[1].present;
    document.getElementById("3rd").innerHTML = response[2].present;
    if(response[0].present=="장난감"){
        var img = document.createElement("img");
        img.src = "../assets/imgs/장난감.jpg";
        var src = document.getElementById("header");
        src.appendChild(img);
    }
    else if(response[0].present=="꽃"){
        var img = document.createElement("img");
        img.src = "../assets/imgs/꽃.jpg";
        var src = document.getElementById("header");
        src.appendChild(img);
    }
    else if(response[0].present=="녹용"){
        var img = document.createElement("img");
        img.src = "../assets/imgs/녹용.jpg";
        var src = document.getElementById("header");
        src.appendChild(img);
    }
    else if(response[0].present=="목걸이"){
        var img = document.createElement("img");
        img.src = "../assets/imgs/목걸이.jpg";
        var src = document.getElementById("header");
        src.appendChild(img);
    }
    else if(response[0].present=="벨트"){
        var img = document.createElement("img");
        img.src = "../assets/imgs/벨트.jpg";
        var src = document.getElementById("header");
        src.appendChild(img);
    }
    else if(response[0].present=="비타민"){
        var img = document.createElement("img");
        img.src = "../assets/imgs/비타민.jpg";
        var src = document.getElementById("header");
        src.appendChild(img);
    }
    else if(response[0].present=="시계"){
        var img = document.createElement("img");
        img.src = "../assets/imgs/시계.jpg";
        var src = document.getElementById("header");
        src.appendChild(img);
    }
    else if(response[0].present=="유산균"){
        var img = document.createElement("img");
        img.src = "../assets/imgs/유산균.jpg";
        var src = document.getElementById("header");
        src.appendChild(img);
    }
    else if(response[0].present=="지갑"){
        var img = document.createElement("img");
        img.src = "../assets/imgs/지갑.jpg";
        var src = document.getElementById("header");
        src.appendChild(img);
    }
    else if(response[0].present=="크림"){
        var img = document.createElement("img");
        img.src = "../assets/imgs/크림.jpg";
        var src = document.getElementById("header");
        src.appendChild(img);
    }
    else if(response[0].present=="향수"){
        var img = document.createElement("img");
        img.src = "../assets/imgs/향수.jpg";
        var src = document.getElementById("header");
        src.appendChild(img);
    }
    else if(response[0].present=="화장품"){
        var img = document.createElement("img");
        img.src = "../assets/imgs/화장품.jpg";
        var src = document.getElementById("header");
        src.appendChild(img);
    }
    else if(response[0].present=="콜라겐"){
        var img = document.createElement("img");
        img.src = "../assets/imgs/콜라겐.jpg";
        var src = document.getElementById("header");
        src.appendChild(img);
    }
}

function submitToServer() {
    // console.log(localStorage.getItem("gender"));
    // console.log(localStorage.getItem("age"));
    // console.log(localStorage.getItem("event"));
    axios.post('http://127.0.0.1:5000/get', {
            gender: localStorage.getItem("gender"),
            age: localStorage.getItem("age"),
            event: localStorage.getItem("event")
        })
        .then(function (response) {
            setTimeout(exitLoading,3000);
            appendResults(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

