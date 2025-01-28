function tossCoin() {
    const result = Math.random( Math.ceil()) < 0.3? "Heads" : "Tails";
    let output = document.querySelector("#result")
 if ("Heads" === result) {
    console.log("Masjid");
    output.innerHTML="RESULT =  Masjid"
 }
 else if ("Tails" === result) {
    console.log("Chand");
    output.innerHTML="RESULT = Chand" 
 }
 

}
tossCoin()
