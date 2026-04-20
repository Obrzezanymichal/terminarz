<?php
$con = mysqli_connect("localhost", "root", "", "kalendarz");
mysqli_set_charset($con, "utf8mb4");

$wynik = mysqli_query($con, "SELECT * FROM zadania");
$zadania = [];
if ($wynik) {
    while($row = mysqli_fetch_assoc($wynik)) {
        $zadania[] = $row;
    }
}
?>
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Kalendarz Projekt</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="nawigacja">
        <button id="btn_back">Poprzedni</button>
        <h2 id="miesiac_rok"></h2>
        <button id="btn_next">Nastepny</button>
    </div>

    <div id="siatka"></div>

    <div id="mojPopup">
        <div class="popup-tresc">
            <span id="zamknij_X" onclick="zamknij()">[X]</span>
            <form id="formularzSpotkania">
                <h3>Ustal termin</h3>
                <hr><br>
                Data: <input type="text" id="data_w_formularzu" readonly><br><br>
                Zadanie: <input type="text" id="nazwa_wpis" placeholder="Co robimy?" required><br><br>
                <button type="button" id="zapiszPrzycisk" onclick="zapiszDane()">ZAPISZ</button>
            </form>
        </div>
    </div>

    <script>
        var daneZSerwera = <?php echo json_encode($zadania); ?>;
    </script>
    <script src="script.js"></script>
</body>
</html>
