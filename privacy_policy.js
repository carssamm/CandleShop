function openModal() {
    fetch('privacy_policy.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('modalContent').innerHTML = data;
            document.getElementById('myModal').style.display = 'block';
        })
        .catch(error => console.error('Error fetching Datenschutzerklärung:', error));
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// Schließen des Modals, wenn der Benutzer außerhalb des Modals klickt
window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        closeModal();
    }
}