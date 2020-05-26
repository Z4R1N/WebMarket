var Accounts = [
    {
        Username: "Red",

        Email: "Red@gmail.com",
        Password: "RedPass",

        Rank: "User",
    },

    {
        Username: "Green",

        Email: "Green@gmail.com",
        Password: "GreenPass",

        Rank: "Invester",
    },

    {
        Username: "Blue",

        Email: "Blue@gmail.com",
        Password: "BluePass",

        Rank: "Admin",
    },
]

function toggle_visibility(id) {
    var Current_container = document.getElementById(id);

    var Login_container = document.getElementById("login-container");
    var Register_container = document.getElementById("register-container");

    Login_container.style.display = 'none';
    Register_container.style.display = 'none';

    Current_container.style.display = 'block';
}

function login(){
    var Login_Email_box = document.getElementById("login_email").value;
    var Login_Password_box = document.getElementById("login_password").value;

    for(i = 0; i < Accounts.length; i++){
        if(Login_Email_box == Accounts[i].Email && Login_Password_box == Accounts[i].Password){
            alert(Accounts[i].Username + " is now online!")

            if(Accounts[i].Rank == "Admin"){
                window.location.href = "./admin.html";
                return
            }
            window.location.href = "./index.html";
            return
        }
    }
    console.log("Incorrect email or password!");
}


function register(){
    var Register_Username_box = document.getElementById("register_username").value;
    var Register_Email_box = document.getElementById("register_email").value;
    var Register_Password_box1 = document.getElementById("register_password1").value;
    var Register_Password_box2 = document.getElementById("register_password2").value;

    check = 0;
    
    for(i = 0; i < Accounts.length; i++){
        if(Register_Username_box != Accounts[i].Username){
            if(Register_Email_box != Accounts[i].Email){
                if(Register_Password_box1 == Register_Password_box2){
                    check++;
                    console.log(check);
                }
            }
        }
    }

    if(check == Accounts.length)
    {
        Accounts.push({ Username: Register_Username_box, Email: Register_Email_box, Password: Register_Password_box1, Rank: "User",});

        /*test 
        Accounts.push(
            {
                Username: document.getElementById("register_username").value,
                
                Email: document.getElementById("register_email").value,
                Password: document.getElementById("register_password1").value,
                
                Rank: "User",
            }
        );
        */

        alert("An account has been created!")
    }
}