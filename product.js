/*
Konzeption & Zielsetzung:

Das Ziel ist es die Produkte dynamisch generieren zu lassen, der Content wird in der products.json gepflegt.
Beim Aufrufen der Seite werden die Produkte aus der JSON geladen und auf der Seite dargestellt.

Ruft ein Nutzer beispielsweise die Seite bzw. den Slug "product.html?id=1" auf, so wird die Kerze mit der ID 1 aus der Datenbank geladen und dargestellt.
Die ID wird aus dem Slug ausgelesen und in der JSON gesucht.


Extra:
Die URLS könnten auch so aussehen:
 /product/1

Dazu müsste die URL History mittels JavaScript manipuliert werden, und bestenfalls eine Weiterleitung in der .htaccess hinterlegt werden.
Diese Funktion ist jedoch für den alleinigen Zweck der Übung nicht notwendig.

*/


    let slugID = null;
    if (window.location.search) {
        // Produkt ID aus dem Slug auslesen
        slugID = window.location.search.split("=")[1];
    }

// Funktion zum Laden der Produkte aus der JSON mittels plain JavaScript ohne JQUERY
    function loadProduct(slugID) {
        let products = null;
        let product = null;
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "products.json");
        xhr.onload = function () {
            if (this.status === 200) {
                // JSON in ein JavaScript Objekt umwandeln und in der Variable products speichern
                products = JSON.parse(this.responseText).products;
                product = products.find(product => product.id == slugID);
                implementProduct(product);
            }
        };
        xhr.send();
    }

    {
        function implementProduct(product) {
            // Change Site Title
            document.querySelector("title").innerHTML = product.name;
            // Get Dynamic Product Elements
            let productImage = document.getElementById("productImage");
            let productName = document.getElementById("productName");
            let productDescription = document.getElementById("productDescription");
            let productPrice = document.getElementById("productPrice");

            // Set Values
            productName.innerHTML = product.name;
            productDescription.innerHTML = product.description;
            productPrice.innerHTML = product.price.net + " " + product.price.currency;
            productImage.src = product.image.src;
            productImage.alt = product.image.alt;

        }
    }
    if (slugID !== null) {
        loadProduct(slugID);
    } else {
        window.location = "/";
    }
