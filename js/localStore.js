function selectGender(getInput) {
    localStorage.setItem("gender", getInput);
    window.location.href = './Select_Age.html';
}

function selectAge(getInput) {
    if(localStorage.setItem("ten", getInput)){
        window.location.href = './Select_Event_ten.html';
    }
    else if(localStorage.setItem("twenty", getInput)){
        window.location.href = './Select_Event_twenty.html';
    }
    else if(localStorage.setItem("forty", getInput)){
        window.location.href = './Select_Event_forty.html';
    }
    else if(localStorage.setItem("sixty", getInput)){
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

