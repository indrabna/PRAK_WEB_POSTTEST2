let users = []
let form = document.getElementById('form')


form.addEventListener("submit",function(e) {
    document.getElementById('result').innerHTML=""
    e.preventDefault()
    let username = document.getElementById('nama').value
    let pw = document.getElementById('pw').value
    let eml = document.getElementById('eml').value

    if (nama == "" || pw == "" || eml == "") {
        alert("Harap isi semua kolom");}
    
    let user = {
        username: username,
        password: pw,
        email: eml
    }

    document.getElementById('nama').value=""
    document.getElementById('pw').value=""
    document.getElementById('eml').value=""

    if (localStorage.getItem('users')) {
        users = localStorage.getItem('users')
        users = JSON.parse(users)
        users.push(user)
        localStorage.setItem('users', JSON.stringify(users))
        alert("Congratulations, youre registered !")
        window.location.href = "index.html"
    }
    else {
        users.push(user)
        localStorage.setItem('users', JSON.stringify(users))
        alert("Congratulations, youre registered !")
        window.location.href = "index.html"
   
    }
})
const tombol = document.getElementById("masuk");
tombol.onclick = login;
function redirect() {
    window.location.href = 'webphotologin.html';
}


function login(e){
    const login = document.querySelector('.login');
    e.preventDefault();
    const emailAddress = document.getElementById("emllogin").value;
    const passWord = document.getElementById("passlogin").value;

    // ngambil nilai array dari localstorage
    const users = JSON.parse(localStorage.getItem("users"));
    // localStorage.setItem("username-logged-in", users[i].username)

    //Periksa apakah array users ada dan tidak kosong
    if (users && users.length) {
    // Melakukan perulangan pada array 
    for (let i = 0; i < users.length; i++) {
        if (emailAddress == users[i].email && passWord == users[i].password) {
            localStorage.setItem("username-logged-in", users[i].username)
            window.location.href="webphotologin.html";
            alert("Login Successful !");
            return; 
        }
    }
    }

    // jika salah penginputan
    alert("Invalid Email or Password");
    }

