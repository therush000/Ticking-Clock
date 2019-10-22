async function Showtime(){
    var clock = new Date();
    var hour = clock.getHours();
    var minute = clock.getMinutes();
    var seconds = clock.getSeconds();
    console.log(`${hour}:${minute}:${seconds}`)


   
}

Showtime();