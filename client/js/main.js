/**
 * main script
 */
 
function main () {
    
    // start browser console
    eruda.init(); 
    
    // start views
    initAuthView();
    initMenuView();
    initGameView();
    
    
    // force landscape
    const landscapeModal = new ModalComponent("#landscape-modal");
    setInterval(() => {
        if (getOrientation() === "landscape") landscapeModal.hide();
        else landscapeModal.show();
    }, 200);
    
    
    console.log("ready!");
}


/**
 * Get screen orientation
 * @return String - "landscape" or "portrait"
 */
function getOrientation () {
    return innerWidth > innerHeight ? "landscape" : "portrait";
}