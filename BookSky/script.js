function addContent() {
    document.getElementById("popupOverlay").style.display = "block";
    document.getElementById("popupContent").style.display = "block";
}

document.getElementById("cancelBtn").addEventListener("click", function () {
    document.getElementById("popupOverlay").style.display = "none";
    document.getElementById("popupContent").style.display = "none";
});

function addContainer() {
    var bookName = document.getElementById("bookName").value;
    var authorName = document.getElementById("authorName").value;
    var description = document.getElementById("description").value;
    var container = document.getElementById("container");
    var divElement = document.createElement("div");

    divElement.setAttribute("id", "book-container");
    divElement.innerHTML = `<h2
                style="color: #F08080;">${bookName}</h2>
                <h4 style="font-weight: bold;">${authorName}</h4>
                <p>${description}</p>
                <button onclick="deleteEvent(event)">Delete</button>`
    container.append(divElement);

    document.getElementById("popupOverlay").style.display = "none";
    document.getElementById("popupContent").style.display = "none";

}

function deleteEvent(event) {
    event.target.parentElement.remove();
}