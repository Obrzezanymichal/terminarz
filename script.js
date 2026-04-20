var dzis = new Date();
var m = dzis.getMonth();
var r = dzis.getFullYear();

function pokazKalendarz() {
    var siatka = document.getElementById("siatka");
    var tytul = document.getElementById("miesiac_rok");
    siatka.innerHTML = "";

    var nazwy = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
    tytul.innerText = nazwy[m] + " " + r;

    var ileDni = new Date(r, m + 1, 0).getDate();

    for (var i = 1; i <= ileDni; i++) {
        var mm = m + 1; if (mm < 10) mm = "0" + mm;
        var dd = i; if (dd < 10) dd = "0" + dd;
        var dataString = r + "-" + mm + "-" + dd;

        var box = document.createElement("div");
        box.className = "dzien";
        box.id = "dzien-" + dataString;
        box.innerHTML = "<b>" + i + "</b>";

        // Wyswietlanie wpisow uzywajac Twoich kolumn: dataZadania i wpis
        for (var j = 0; j < daneZSerwera.length; j++) {
            if (daneZSerwera[j].dataZadania == dataString) {
                dodajWpisDoKafelka(box, daneZSerwera[j].wpis);
            }
        }

        box.setAttribute("onclick", "otworzPopup('" + dataString + "')");
        siatka.appendChild(box);
    }
}

function dodajWpisDoKafelka(kafelek, tekst) {
    var divWpis = document.createElement("div");
    divWpis.className = "wpis-czerwony";
    divWpis.innerText = tekst;
    kafelek.appendChild(divWpis);
}

function zapiszDane() {
    var tekstZadania = document.getElementById("nazwa_wpis").value;
    var wybranaData = document.getElementById("data_w_formularzu").value;

    if(tekstZadania == "") { alert("Wpisz treść!"); return; }

    var fd = new FormData();
    fd.append('wpis', tekstZadania);
    fd.append('data_wybrana', wybranaData);

    fetch('zapisz.php', {
        method: 'POST',
        body: fd
    })
    .then(res => res.text())
    .then(wynik => {
        if (wynik.trim() == "sukces") {
            var kafelek = document.getElementById("dzien-" + wybranaData);
            if (kafelek) dodajWpisDoKafelka(kafelek, tekstZadania);
            zamknij();
            document.getElementById("nazwa_wpis").value = "";
        } else {
            alert(wynik); // Pokaze blad jesli nazwy kolumn sie nie zgadzaja
        }
    });
}

function otworzPopup(data) {
    document.getElementById("data_w_formularzu").value = data;
    document.getElementById("mojPopup").style.display = "block";
}

function zamknij() {
    document.getElementById("mojPopup").style.display = "none";
}

document.getElementById("btn_back").onclick = function() { m--; if (m < 0) { m = 11; r--; } pokazKalendarz(); };
document.getElementById("btn_next").onclick = function() { m++; if (m > 11) { m = 0; r++; } pokazKalendarz(); };

pokazKalendarz();
