// "Open Apostille" butonuna tıklayınca belirli PDF dosyasını açar
document.getElementById("openApostille").addEventListener("click", function () {
    window.open("apostille.pdf", "_blank"); // "apostille.pdf" dosyasının yolu
});

// "Open Document" butonuna tıklayınca belirli PDF dosyasını açar
document.getElementById("openDocument").addEventListener("click", function () {
    window.open("document.pdf", "_blank"); // "document.pdf" dosyasının yolu
});
