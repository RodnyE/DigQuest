/*
 * main script
 */
let USER;

function main () {
    
    // start browser console
    eruda.init();
    
    
    // get user data
    USER = stg.getData("user", {
        name: null,
        pass: null,
        email: null,
        token: null
    });
    
    
    // start views
    initLoadingModal();
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
 * @return {String} "landscape" or "portrait"
 */
function getOrientation () {
    return innerWidth > innerHeight ? "landscape" : "portrait";
}