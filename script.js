function generateCard() {
    document.getElementById("cardName").textContent = document.getElementById('name').value;
    document.getElementById("cardCollege").textContent = document.getElementById('college').value;
    document.getElementById("cardLocation").textContent = document.getElementById('location').value;

    if (document.getElementById('image').files[0]) {
        let reader = new FileReader();
        reader.onload = (e) => document.getElementById("cardPhoto").src = e.target.result;
        reader.readAsDataURL(document.getElementById('image').files[0]);
    }
}
