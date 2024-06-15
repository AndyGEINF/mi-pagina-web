const myImage = document.querySelector("#spain");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "https://live.staticflickr.com/5471/14399913416_bb78edd786_b.jpg") {
    myImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/a/a9/Bandera_LGBT_Catalu%C3%B1a.jpg");
  } else {
    myImage.setAttribute("src", "https://live.staticflickr.com/5471/14399913416_bb78edd786_b.jpg");
  }
};

let vecImages = ["images/amego.jpg","images/best_friends.jpg", "images/body_shaming.jpg",
  "images/both_autism.jpg", "images/chupa_teta.jpg","images/cortesito.jpg","images/dame_cigarro.jpg",
  "images/estaban_chingando.jpg","images/fa_sol.jpg","images/trio_lalala.jpg"];


const myMeme = document.querySelector("#clickImagen");

function mostrarImagen(countClicks) {
  if(countClicks%20 === 0) {
    let i=(countClicks/20)-1;
    if(i===0){
      myMeme.style.visibility='visible';
    }
    myMeme.setAttribute("src", vecImages[i]);
  }
  
}


let countClicks = 0;


const myButton = document.querySelector("button");
myButton.onclick = () => {
  countClicks++;
  const myclicks = document.querySelector("#clicks");
  myclicks.textContent = countClicks;
  mostrarImagen(countClicks);
  if (countClicks === 201) {
    countClicks = 1;
    myclicks.textContent = countClicks;
    
  }
}






  