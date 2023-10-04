let tmF=document.getElementById("tmeF")
let tmD=document.getElementById("tmeD")
let tmA=document.getElementById("tmeA")
let tmM=document.getElementById("tmeM")
let tmI=document.getElementById("tmeI")
let today=document.getElementById("today")
let cityText=document.getElementById("cityText")
let mySelect=document.getElementById("mySelect")


let cities= ["الجزائر العاصمة",
            "عنابة"  ,
               " وهران",
               " ادرار",
               " تمنراست "
]
for (let city of cities)
{
 const content=
  `<option>${city}</option>`

  mySelect.innerHTML+=content
}









async function fetchData(city, country) {

   
  const url = `http://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(city)}&country=${encodeURIComponent(country)}&method=3`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
   
    const data = await response.json(); 





     let prayTime=data.data.timings
    let laDate=data.data.date.gregorian.date
    // console.log(tmeF); 
    today.innerHTML=laDate
    tmF.innerText = prayTime.Fajr;
    tmD.textContent = prayTime.Dhuhr;
    tmA.textContent = prayTime.Asr;
    tmM.textContent = prayTime.Maghrib;
    tmI.textContent = prayTime.Isha;



  } catch (error) {


    console.error('An error occurred:', error);
  }
 
 

}

fetchData("Alger", "Dz")

mySelect.addEventListener("change", ()=>{
           if(mySelect.value=="عنابة")
           {
            fetchData("Annaba", "Dz")
            cityText.textContent=mySelect.value
           }
  else if (mySelect.value=="وهران")
      {
       fetchData("Oran", "Dz")
       cityText.textContent=mySelect.value
      }

      else if (mySelect.value=="الجزائر العاصمة")
      {
       fetchData("Alger", "Dz")
       cityText.textContent=mySelect.value
      }

      else if(mySelect.value=="تمنراست")
      {
        fetchData("Tamanrasset ","Dz");
        cityText.textContent=mySelect.value
      }


      
   else if(mySelect.value=="ادرار")
    {
     fetchData("Adrar", "Dz")
     cityText.textContent=mySelect.value
    
    }

    })


  



    

   


    




