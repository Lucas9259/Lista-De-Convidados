window.addEventListener('DOMContentLoaded', (event) => {
    const addGuestBtn = document.getElementById("addGuestBtn");
    const clearBtn = document.getElementById("clearBtn");
    const guestList = document.getElementById("guestList");
  
    // Event listener para adicionar convidado
    addGuestBtn.addEventListener("click", (event) => {
      event.preventDefault(); // Prevenindo o comportamento padrão do botão de enviar
      const fullnameInput = document.getElementById("fullname");
      const relationshipInput = document.getElementById("relationship");
      const ageRadios = document.getElementsByName("age");
      let ageValue = "";
      for (let i = 0; i < ageRadios.length; i++) {
        if (ageRadios[i].checked) {
          ageValue = ageRadios[i].value;
          break;
        }
      }
  
      if (fullnameInput.value === "" || relationshipInput.value === "" || ageValue === "") {
        alert("Preencha todos os campos antes de adicionar um convidado.");
      } else {
        const newGuest = document.createElement("li");
        newGuest.innerText = `${fullnameInput.value} - ${relationshipInput.value} - ${ageValue}`;
        guestList.appendChild(newGuest);
        fullnameInput.value = "";
        relationshipInput.value = "";
        ageRadios[0].checked = true;
        alert("Convidado adicionado com sucesso! Boa Festa !! ");
      }
    });
  
    // Event listener para limpar lista de convidados
    clearBtn.addEventListener("click", (event) => {
      event.preventDefault(); // Prevenindo o comportamento padrão do botão de enviar
      guestList.innerHTML = "";
    });
  });
  
