let tableau = [];

let i = 0;
function showBook() {
    let nomDuLivre = document.getElementById("nom").value;
    let nomAutheur = document.getElementById("author").value;
    let anneeLivre = document.getElementById("year").value;

    addBook(nomDuLivre, nomAutheur, anneeLivre);
}

function addBook(nomDuLivre, nomAutheur, anneeLivre) {

    let local_storage_key = `livre_$(i++)`

    let bookList = document.getElementById("bookList");
    bookList.innerHTML += `<p>Titre: ${nomDuLivre}, Auteur: ${nomAutheur}, Année: ${anneeLivre}</p>`;


   localStorage.setItem(local_storage_key, [nomDuLivre, nomAutheur, anneeLivre]);
}

let data = localStorage.getItem("livre").split(",")
console.log(data[2])