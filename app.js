document.getElementById("searchbtn").addEventListener("click",() => {
    let seachval=document.getElementById("searchtxt").value;
   let reop={
    methord:"GET"
   };

   fetch(`http://api.weatherapi.com/v1/current.json?key=e3838eeefc21456197e90956233012&q=${seachval}`,reop)
   .then(Response=>Response.json())
   .then(data =>{
    
    console.log(data);
  
    document.getElementById("name").innerHTML=data["location"]["name"];
    document.getElementById("country").innerHTML=data["location"]["country"];
    document.getElementById("region").innerHTML=data["location"]["region"];
    document.getElementById("temp").innerHTML=data["current"]["temp_c"]+"C";
    document.getElementById("cloudy").innerHTML=data["current"]["condition"]["text"];
    document.getElementById("time").innerHTML=data["location"]["localtime"];
    document.getElementById("img").src=data["current"]["condition"]["icon"];


   })
   .then(error => console.log("error",error))
})