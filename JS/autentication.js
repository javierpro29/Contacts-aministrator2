import {auth} from "./firebase.js"


/////////////////////////////////////LOGIN/////////////////////////////////////////
const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    auth
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const credencial = userCredential.user;
            loginForm.reset();
            $("#login").modal("hide");
            window.location.replace("crud.html");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Swal.fire({icon: 'warning', 
                    title: errorMessage, 
                    confirmButtonText: 'accept',
                    confirmButtonColor: '#FFC312',});
        });
});




/////////////////////////////////////SingUp/////////////////////////////////////////
const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit", (e) => {

    e.preventDefault();

    let singupEmail = document.querySelector("#singup-email").value;
    let singupPassword = document.querySelector("#singup-password").value;
    const confirmPassword = document.querySelector("#sinup-confirm-password").value;

    let alertmessage = document.querySelector("#alertmessage")

    if(singupPassword == confirmPassword){
        
        auth
            .createUserWithEmailAndPassword(singupEmail, singupPassword)
            .then((userCredential) => {
                const credencial = userCredential.user;
        
                /* Swal.fire("User save saccessfully"); */
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your user has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })

                signupForm.reset();
                $("#signup").modal("hide"); 
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Swal.fire({ 
                    icon: 'warning', 
                    title: errorMessage, 
                    confirmButtonText: 'accept', 
                    confirmButtonColor: '#FFC312'
                });
                
            })

    }else{
        alertmessage.style.display = 'block'
    }
})

