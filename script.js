const contactList = document.getElementById("contact-list");

function createContact() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    if (name && phone) {
        const contact = document.createElement("div");
        contact.classList.add("contact");

        const nameField = document.createElement("input");
        nameField.type = "text";
        nameField.value = name;
        nameField.disabled = true;

        const phoneField = document.createElement("input");
        phoneField.type = "text";
        phoneField.value = phone;
        phoneField.disabled = true;

        const editButton = document.createElement("button");
        editButton.textContent = "Ändra";
        editButton.onclick = function () {
         
            if (nameField.disabled && phoneField.disabled) {
                nameField.disabled = false;
                phoneField.disabled = false;
                editButton.textContent = "Spara";
            } else {
                
                nameField.disabled = true;
                phoneField.disabled = true;
                editButton.textContent = "Ändra";
            }
        };

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Radera";
        deleteButton.onclick = function () {
            
            contactList.removeChild(contact);
        };

        contact.appendChild(nameField);
        contact.appendChild(phoneField);
        contact.appendChild(editButton);
        contact.appendChild(deleteButton);

        contactList.appendChild(contact);

        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
    } else {
        console.log("Fyll i både namn och telefonnummer");
    }
}

