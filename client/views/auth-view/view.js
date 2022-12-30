/**
 * Auth View
 */
let authView;


function initAuthView () {
    
    authView = new ViewComponent("#auth-view");
    const loginModal = new ModalComponent("#login-modal", {decoration: true});
    const signupModal = new ModalComponent("#signup-modal", {decoration: true});
    
    
    // alternate LogIn and SignUp
    loginModal.E(".open-signup").onclick = () => {
        loginModal.hide();
        signupModal.show();
    };
    
    signupModal.E(".open-login").onclick = () => {
        signupModal.hide();
        loginModal.show();
    };
    
    
    
    
    // if have an account stored
    if (USER.name) {
        loginRequest(USER)
        
        // success request
        .then(res => {
            let data = res.data;
            USER.token = data.token;
            menuView.show(); // redirect to menu
        })
        
        // fail request
        .catch(res => {
            alert(
              "HTTP " + res.status + " ERROR\n" +
              res.data
            );
            loginModal.show();
        });
        
    }
    // if not have account
    else loginModal.show();
    
    
    initAuthView = null;
    console.log("auth-view ready!");
}

//
// LogIn User
//
function loginRequest (user) {
    return ajax.post("/auth/login", {
        username: user.name,
        password: user.pass
    });
}

//
// SignUp User
//
function signupRequest (user) {
    return ajax.post("/auth/signup", {
        username: user.name,
        password: user.pass,
        rpassword: user.rpass,
        email: user.email
    });
}