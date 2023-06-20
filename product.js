function body(){
    document.getElementById("item1").setAttribute("class","prod")
    document.getElementById("item2").setAttribute("class","prodnone")
    document.getElementById("item3").setAttribute("class","prodnone")
    document.getElementById("item4").setAttribute("class","prodnone")
    document.getElementById("item5").setAttribute("class","prod")
    document.getElementById("item6").setAttribute("class","prod")
    document.getElementById("item7").setAttribute("class","prodnone")
    document.getElementById("item8").setAttribute("class","prod")
    document.getElementById("item9").setAttribute("class","prodnone")
    document.getElementById("item10").setAttribute("class","prodnone")
    document.getElementById("item11").setAttribute("class","prodnone")
    document.getElementById("item12").setAttribute("class","prod")
}

function skin(){
    document.getElementById("item1").setAttribute("class","prodnone")
    document.getElementById("item2").setAttribute("class","prod")
    document.getElementById("item3").setAttribute("class","prod")
    document.getElementById("item4").setAttribute("class","prod")
    document.getElementById("item5").setAttribute("class","prodnone")
    document.getElementById("item6").setAttribute("class","prodnone")
    document.getElementById("item7").setAttribute("class","prod")
    document.getElementById("item8").setAttribute("class","prodnone")
    document.getElementById("item9").setAttribute("class","prod")
    document.getElementById("item10").setAttribute("class","prod")
    document.getElementById("item11").setAttribute("class","prod")
    document.getElementById("item12").setAttribute("class","prodnone")
}

function all(){
    for(var itemnum=1;itemnum<=12;itemnum++){document.getElementById(`item${itemnum}`).setAttribute("class","prod")}
    }

function change(number){
    if(number==0){all()}
    else if(number==1){body()}
    else if(number==2){skin()}
}