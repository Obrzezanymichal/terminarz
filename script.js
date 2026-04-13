function ile_dni(miesiac_nr, rok) {
    if (miesiac_nr == 2) {
        if (rok % 4 == 0 && (rok % 100 != 0 || rok % 400 == 0)) {
            return 29;
   }else {
return 28
   }}
}
function DniwRoku(miesiac_nr,rok) {
switch (miesiac_nr) {
    case 1: 
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
case 12:
  return 31;

  case 4:
  case 6:
  case 9:
 case 11:
  return 30;
}
}

function kafelki_kalendarza(ile) {
    const kalendarz = document.querySelector("#kalendarz");

    Array.from(kalendarz.children).forEach((item) => {
        item.remove();
    });
    let i = weekDay(1, miesiac, rok); 
do {
let kafelek = document.createElement("div");
kafelek.classList.add("kafelek_kal");
kalendarz.appendChild(kafelek);
i--;
} while (i > 0);

for (let i = 1; i <=ile; i++) {
    let kafelek = document.createElement("div");
    kafelek.classList.add("kafelek_kal");
    let daySpan = document.createElement("span");
    let infoDay = document.createElement("p");
    daySpan.textContent = i;
    infoDay.textContent = dniTygodnia[weekDay(i, miesiac, rok)];
    kafelek.appendChild(daySpan);
    kafelek.appendChild(infoDay);

    if (
        new Date().getDate() == i &&
        rok == new Date().getFullYear()
    ) {
        kafelek.classList.add("toDay");
    } else {
        kafelek.classList.add("colored");
    }
    kalendarz.appendChild(kafelek); 
}
let miesiac = new Date().getMonth() + 1;
let rok = new Date().getFullYear();
}
//TODO



function showPOPUP(content) {
    let popup = document.querySelector(".back-drop");
    let contentWrap;
    if (!popup) {
        const backDrop = document.createElement("div");
        backDrop.classList.add("backdrop");
        document.body.appendChild(backDrop);
        const popWrap = document.createElement("section");
        popWrap.classList.add("pop-wrap");
        const pHeader = document.createElement("header");
        contentWrap = document.createElement("section");
        const pFooter = document.createElement("footer");

        pHeader.textContent="szczegóły";
        const btn = document.createElement("button");
        pFooter.appendChild(btn);
        // btn.addEventListener("click", ) //TODO

        backDrop.appendChild(popWrap);
        popWrap.appendChild(pHeader);

        const close = document.createElement("button");
        close.textContent="X";
        close.addEventListener("click" , hiddenPOPUP);
        pHeader.appendChild(close);

        popWrap.appendChild(contentWrap);
        popWrap.appendChild(pFooter);
    }else {
        contentWrap = popup.querySelector("section");
        popup.classList.remove("hidden");
    }
    Array.from(contentWrap,children).forEach(item)  
        item.remove();
    
    }
