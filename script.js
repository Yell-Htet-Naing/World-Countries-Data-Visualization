let center = document.querySelector("#countries");
center.style.textAlign = "center";

let bCenter = document.querySelector(".graph-buttons");
bCenter.style.textAlign = "center"

//change heading color 

let head = document.querySelector("h2");
head.style.fontSize = "40px";
head.style.padding = "40px 0px 20px 0px";
head.style.color = "#F2A93B";

//create subtitle
let para = document.querySelector(".subtitle");
para.textContent = `Currently we have ${countries_data.length} countries`;
para.style.padding = "0 0 10px 0"

//select display area
let wrap = document.querySelector(".wrapper");
wrap.style.padding = "20px 0px 10px 0px"
wrap.style.width = "95%";
wrap.style.margin = 'auto';
wrap.style.boxShadow =  "2px 4px 4px 4px #888888";

//customize button
let but = document.querySelectorAll("button");

but.item(1).innerText.toLocaleUpperCase();

for(let i = 0;i < but.length;i++) {
    but[i].style.backgroundColor = "#F2A93B"
    but[i].style.border = "none";
    but[i].style.padding = "5px 10px";
    but[i].style.borderRadius = "3px";
    but[i].style.marginRight = "5px";
    but[i].style.textTransform = "uppercase"
    
}
                 //Show data
let ans = document.querySelector('.graph-wrapper');

ans.style.padding = "0px 100px";

let graphTitle = document.querySelector(".graph-title");


//big to small countries data 
countries_data.sort(function(a, b) {
    return b.population - a.population;
});

//skill bar percentage
let total = 0;
for(let i = 0;i < countries_data.length; i++) {
    total += countries_data[i].population;
}


//popuation  comma with 3 digit
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



let firstButton = document.querySelector('.population');
firstButton.setAttribute("onclick", "firstButtonToggle()");



let secondButton = document.querySelector('.languages');
secondButton.setAttribute("onclick", "secondButtonToggle()")


let checkOne = document.getElementById("stat");
let checkTwo = document.getElementById("stat");
function firstButtonToggle() {
    
    checkOne.innerHTML = " ";

    graphTitle.textContent = `10 Most Population countries in the world`;
        graphTitle.style.textAlign = "center"
        graphTitle.style.padding = "10px 0px";

    for(let i = 0;i <10 ;i++ ) {
        let objchangeArray = countries_data[i];

       
        let oneLine = document.createElement('div');
   
        oneLine.style.padding = "10px 0px"


        let countryName = document.createElement("p");
        countryName.style.display = "inline-block";
        countryName.style.textAlign = "left";
        countryName.style.width = "400px"
        countryName.style.textAlign = "left"
        countryName.textContent = objchangeArray.name;


        oneLine.appendChild(countryName);

        let skillDiv = document.createElement("div");
        skillDiv.setAttribute("class","container");
        
        //real percent

        let realPercent = document.createElement("div");
        let percent =  (objchangeArray.population/total) * 100;
        realPercent.style.backgroundColor = "#FFA500";
        realPercent.style.width = `${percent}%` 


        realPercent.textContent = percent.toFixed(4);  
        skillDiv.appendChild(realPercent);

        skillDiv.style.display = "inline-block"
        skillDiv.style.textAlign = "center";
        skillDiv.style.backgroundColor = "#E7E9EB"
        skillDiv.style.width = "40%"
        
        oneLine.appendChild(skillDiv)

        let langu = document.createElement("p");
      
        langu.textContent = numberWithCommas(objchangeArray.population);
        langu.style.padding = "0px 0px 0px 150px";
        langu.style.display = "inline-block"

        oneLine.appendChild(langu);

        ans.appendChild(oneLine);
       
    }    
  
}

function secondButtonToggle() {
    checkTwo.innerHTML = " ";

    graphTitle.textContent = `10 Most languages countries in the world`;
    graphTitle.style.textAlign = "center"
    graphTitle.style.padding = "10px 0px";

    //pick languages and count 
    let lan = [];
    for(let i = 0; i < countries_data.length; i++) {
        lan.push(countries_data[i].languages);
    }
    var merged = [].concat.apply([], lan);

    const count = {};
    merged.forEach(element => {
        count[element] = (count[element] || 0) + 1;
    }); 
   let check =  Object.entries(count).sort((a,b) => b[1]-a[1]);
  

    for(let i = 0;i <10 ;i++ ) {
        let objchangeArray = check[i];

        let oneLine = document.createElement('div');
        oneLine.style.padding = "10px 0px"


        let countryName = document.createElement("p");
        countryName.style.display = "inline-block";
        countryName.style.textAlign = "left";
        countryName.style.width = "400px"
        countryName.style.textAlign = "left"
        countryName.textContent = objchangeArray[0];


        oneLine.appendChild(countryName);

        let skillDiv = document.createElement("div");
        skillDiv.setAttribute("class","container");
        
        //real percent

        let realPercent = document.createElement("div");
        let percent =  (objchangeArray[1]/check.length) * 100;
        realPercent.style.backgroundColor = "#F2A93B";
        realPercent.style.width = `${percent}%` 


        realPercent.textContent = percent.toFixed(2);  
        skillDiv.appendChild(realPercent);

        skillDiv.style.display = "inline-block"
        skillDiv.style.textAlign = "left";
        skillDiv.style.backgroundColor = "#E7E9EB"
        skillDiv.style.width = "40%"
        
        oneLine.appendChild(skillDiv)

        let langu = document.createElement("p");
    
        langu.textContent = objchangeArray[1];
        langu.style.padding = "0px 0px 0px 150px";
        langu.style.display = "inline-block"

        oneLine.appendChild(langu)

        ans.appendChild(oneLine);
    }
}






    




    

   