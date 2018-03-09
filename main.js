//Location
var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}

//>>DoWhile
function myFunctionDoW() {
    var i;
    var text;
    var PoliPri = [3,1,3,2,3];
    var PoPLen = PoliPri.length;
  for (i=0; i<PoPLen; i++)
  {
    do {
        text += "<br> The Police Available ID:"+i+" & Pri:"+PoliPri[i];
        i++;
    }
    while (PoliPri[i]==2|PoliPri[i]==3);
document.getElementById("demoDoW").innerHTML = text;
  }
}


// >> policeSide
function myFunctionHelp()
{
  document.getElementById("demoHelp").innerHTML="HelpWorking..";

var rootRef = firebase.database().ref().child("DB/PoliceDB");
rootRef.on("child_added",snap => {
    //alert(snap.val());
    var name = snap.child("Name").val();
    var conno = snap.child("ConNo").val();
    var pri = snap.child("Pri").val();
    $("#table_body").append("<tr><td>"+name+"</td><td>"+conno+"</td><td>"+pri+"</td></tr>");
});


var rootRef2 = firebase.database().ref().child("DB/PoliceDB");
rootRef2.once('value',snap => {
    var NoPol = snap.numChildren();
    document.getElementById("demoHelp2").innerHTML = "Totlal Police: "+NoPol;

    var text = "";
    for (i=1; i<=NoPol; i++)
    {
      text += "The number is " + i + "<br>";
    }
    document.getElementById("demoHelp3").innerHTML = "Police crr Avail: <br>"+text;
});


}
