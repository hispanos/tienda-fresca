export default class Modal {

    constructor() {

    }

    functionsModal(cerrar, abrir, modal, modalC) {
        abrir.addEventListener("click", function (e) {
            e.preventDefault();
            console.log(this.modal)
            modalC.style.opacity = 1;
            modalC.style.visibility = "visible";
            modal.classList.toggle("modal-close");
          });
          
          cerrar.addEventListener("click", function (e) {
            modal.classList.toggle("modal-close");
            setTimeout(function () {
              modalC.style.opacity = 0;
              modalC.style.visibility = "hidden";
            }, 700);
          });
          
          window.addEventListener("click", function (e) {
            console.log(e.target);
            if (e.target == modalC) {
              modal.classList.toggle("modal-close");
          
              setTimeout(function () {
                modalC.style.opacity = "0";
                modalC.style.visibility = "hidden";
              }, 700);
            }
          });
    }

}