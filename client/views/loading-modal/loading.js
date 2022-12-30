/**
 * Loading View
 */
let loadingModal;


function initLoadingModal () {
    
    loadingModal = new ModalComponent("#loading-modal");
    
    // add ellipsis to spinner
    const spinner = loadingModal.E(".lds-ellipsis");
    for (let i = 0; i < 4; i++) {
        const div = document.createElement("div");
        spinner.appendChild(div);
    }
    
    initLoadingModal = null;
}