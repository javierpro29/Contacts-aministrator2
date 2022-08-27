import {auth} from "./firebase.js"

//logout
const logout = document.querySelector('#logout');

logout.addEventListener('click', e => {
    e.preventDefault();

    auth
        .signOut()
        .then(() =>{
            Swal.fire({
                icon: 'warning',
                title: 'Are you sure?',
                text: "Do you wanna logout of the page",
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Exit'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        window.location.replace("index.html")
                  )
                }
              })
        });
});