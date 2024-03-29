import React,{useState} from "react";
import summer from "./images/summer.jpg"
import winter from "./images/winter.jpg"
import rainy from "./images/rainy.jpg"

const App=()=>{

     const [latitude,setLatitude]=useState(0.00) 
     const [longitude,setLongitude]=useState(0.00)
     const [hemisphere,sethemisphere]=useState("NA")
     const [month,setMonth]=useState(()=>{return new Date().getMonth()+1})

    function fetchLocation(){
        if(navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition((position)=>
            {
              setLatitude(position.coords.latitude)
              setLongitude(position.coords.longitude)
                     
                if(position.coords.latitude>0)
                {
                  sethemisphere("Northern Hemisphere")
                }
                else if (position.coords.latitude<0)
                {
                  sethemisphere("Southern Hemisphere")
                }
                else{sethemisphere("Equator")}       
            })

        }
    }

return (
    <div>
        <button onClick={fetchLocation}>Get Location </button>
        <h1>latitude:{latitude}</h1>
        <h1>longitude:{longitude}</h1>
        <h1>Hemisphere:{hemisphere}</h1>
        <h1>Month:{month}</h1>

          {
            hemisphere && ((hemisphere=="Northern Hemisphere" && (month>=3 && month<=6))||
              (hemisphere=="Southern Hemisphere" && (month>=3 && month<=6)))
            &&(
                <div>
                    <h1>Welcome to Summer Season</h1>
                    <img src={summer} alt="summer" width={800} height={500}/>
                 </div>
            )
          }
          
          {
            hemisphere && ((hemisphere=="Northern Hemisphere" && (month<=2 || month>=12))||
            (hemisphere=="Southern Hemisphere" &&(month>=12 || month<=2) ))
            &&(
                <div>
                  <h1>Welcome to Winter Season</h1>
                  <img src={winter} alt="winter" width={800} height={500}/>
                </div>
              )
          }
          {
            hemisphere && ((hemisphere=="Northern Hemisphere" && (month<=11 && month>=7))||
            (hemisphere=="Southern Hemisphere" &&(month>=7 && month<=11) ))
            &&(
                <div>
                  <h1>Welcome to Rainy Season</h1>
                  <img src={rainy} alt="rainy" width={800} height={500}/>
                </div>
              )

          }
    </div>
)
}

export default App;