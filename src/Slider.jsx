import React from "react";

function handleChange(){
    if(document.getElementById("theme").checked){
        var cardList = document.getElementsByClassName("postCard");
        document.body.style.backgroundColor = "black"
        document.getElementById("topHeader").style.backgroundColor = "#6c5494"
        document.getElementById("footer").style.backgroundColor = "#bc94ea"
        for(var i=0; i<cardList.length; i++){
            cardList[i].style.backgroundColor = "#1d1d1d";
            cardList[i].style.color = "white";
        }
    }
    else{
        cardList = document.getElementsByClassName("postCard");
        document.body.style.backgroundColor = "white"
        document.getElementById("topHeader").style.backgroundColor = "#f5ba13"
        document.getElementById("footer").style.backgroundColor = "#eee"
        for(i=0; i<cardList.length; i++){
            cardList[i].style.backgroundColor = "white";
            cardList[i].style.color = "black";
        }
    }
    
    //document.getElementsByClassName("postCard").style.backgroundColor = "black"
}

function Slider(){
    return <div class="container">
            <label className="switch"><input type="checkbox" id="theme" onChange={handleChange}/><div></div>
        </label>
    </div>
}

export default Slider;

