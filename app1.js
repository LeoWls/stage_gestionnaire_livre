let local_storage_key = "livre";

// Affiche le livre après que l'utilisateur a saisi les détails
function showBook() {
    let nomDuLivre = document.getElementById("nom").value;
    let nomAuteur = document.getElementById("author").value;
    let anneeLivre = document.getElementById("year").value;

    addBook(nomDuLivre, nomAuteur, anneeLivre);
}

// Ajoute un livre à la liste et le stocke dans le local storage
function addBook(nomDuLivre, nomAuteur, anneeLivre) {
    let bookList = document.getElementById("bookList");

    // Créer un nouvel objet livre
    let newBook = {
        titre: nomDuLivre,
        auteur: nomAuteur,
        annee: anneeLivre
    };

    // Récupérer les livres existants du local storage
    let books = JSON.parse(localStorage.getItem(local_storage_key)) || [];

    // Ajouter le nouveau livre à la liste
    books.push(newBook);

    // Mettre à jour le local storage
    localStorage.setItem(local_storage_key, JSON.stringify(books));

    // Afficher le nouveau livre
    bookList.innerHTML += `<p>Titre: ${nomDuLivre}, Auteur: ${nomAuteur}, Année: ${anneeLivre}</p>`;
}

// Charger les livres depuis le local storage et les afficher lors du chargement de la page
function loadBooks() {
    let bookList = document.getElementById("bookList");
    let books = JSON.parse(localStorage.getItem(local_storage_key)) || [];

    // Afficher chaque livre
    books.forEach(book => {
        bookList.innerHTML += `<p>Titre: ${book.titre}, Auteur: ${book.auteur}, Année: ${book.annee}</p>`;
    });
}

// Appeler loadBooks lorsque la page se charge
window.onload = loadBooks;
