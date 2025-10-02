//  Example variables
var catName = "Yumi";          // var
let zoomLevel = 0;             // let
const favoriteFood = "fish";   // const

//  Arrays and objects 
let cats = ["Yumi", "Yuno"];
let catStats = {
    Yumi: { snacks: 0 },
    Yuno: { zoomies: 0 }
};

//  Functions 
function feedYumi() {
    let snacks = document.getElementById("yumiSnacks").value;
    snacks = parseInt(snacks);

    if (isNaN(snacks) || snacks <= 0) {
        document.getElementById("yumiResult").innerText =
            "Please enter a valid number of snacks!";
        return;
    }

    catStats.Yumi.snacks += snacks;

    let message = "";
    for (let i = 0; i < snacks; i++) {
        message += "🍗 ";
    }

    document.getElementById("yumiResult").innerText =
        `Yumi ate ${snacks} snacks! Total so far: ${catStats.Yumi.snacks} \n${message}`;
}

function zoomYuno() {
    let zoom = document.getElementById("yunoZoom").value;
    zoom = parseInt(zoom);

    if (isNaN(zoom) || zoom < 1 || zoom > 10) {
        document.getElementById("yunoResult").innerText =
            "Please enter a zoomie level between 1 and 10.";
        return;
    }

    catStats.Yuno.zoomies += zoom;

    let speed;
    if (zoom <= 3) {
        speed = "slow 🐢";
    } else if (zoom <= 7) {
        speed = "medium 🐈";
    } else {
        speed = "HYPER SPEED 🚀";
    }

    document.getElementById("yunoResult").innerText =
        `Yuno zoomed at level ${zoom} (${speed})! Total zoomies: ${catStats.Yuno.zoomies}`;
}

// --- Form validation ---
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");

    if (form) {
        const username = document.getElementById("username");
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const confirmPassword = document.getElementById("confirmPassword");
        const errorMessage = document.getElementById("errorMessage");
        const successMessage = document.getElementById("successMessage");

        // Realtime password check 
        confirmPassword.addEventListener("input", () => {
            if (password.value !== confirmPassword.value) {
                errorMessage.style.display = "block";
                errorMessage.innerText = "Passwords do not match!";
                successMessage.style.display = "none";
            } else {
                errorMessage.style.display = "none";
            }
        });

        
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            
            errorMessage.style.display = "none";
            successMessage.style.display = "none";

            if (!username.value.trim() || !email.value.trim() || !password.value || !confirmPassword.value) {
                errorMessage.innerText = "Please fill in all fields.";
                errorMessage.style.display = "block";
                return;
            }

            if (password.value !== confirmPassword.value) {
                errorMessage.innerText = "Passwords do not match!";
                errorMessage.style.display = "block";
                return;
            }

           
            successMessage.innerText =
                `Welcome, ${username.value.trim()}! 🎉 You have registered successfully.`;
            successMessage.style.display = "block";
        });
    }
});
