//Author: github: CarlosACepeda <carlosalt5126@hotmail.es>

console.log("I'm alive!");

//Whenever this script is loaded, check if the user is signed in.

if(isUserLoggedIn())
{
    setUserInfoOnScreen();
}


function login()
{
    var expected_username= "teleperformance";
    var expected_password= "qwerty987654*";

    var input_username= document.getElementById("username");
    var input_password= document.getElementById("password");

    var result_username = input_username.value.localeCompare(expected_username);
    var result_password = input_password.value.localeCompare(expected_password);
    
    if(result_username == 0 && result_password == 0)
    {
        saveCredentials(input_username.value);
    }
    else
    {
        window.alert("Invalid Credentials!");
    }
}

function saveCredentials(username)
{
    sessionStorage.setItem('loggedIn', 'true');
    sessionStorage.setItem('username', username);
    location.reload();
}

function isUserLoggedIn()
{
    if(sessionStorage.getItem('loggedIn') === "true")
        return true;
    
    return false;
   
}
function setUserInfoOnScreen()
{
    var top_navbar= document.getElementById("top_navbar");

    var tag = document.createElement("a");
    var href = document.createAttribute("href");
    href.value= "secondary_page.html?page=Mi perfil";
    
    tag.setAttributeNode(href);
    var text = document.createTextNode("Mi perfil: "+sessionStorage.getItem('username'));
    tag.appendChild(text);

    top_navbar.appendChild(tag);

}

function toggleMenu()
{
    const menu = document.getElementById("menu");
    if (menu.style.display && menu.style.display !== "none" ) {
        menu.style.display = "none";
      } else {
        menu.style.display = "block";
      }
}

function handleWhenInBigScreen(e)
{
    if(e.matches)
    {
        const menu = document.getElementById("menu");
        menu.style.display = "block";
        menu.style.marginTop= ""; //Removing margin because at this point the hamburguer icon is not longer present.

        const hamburguer = document.getElementById("toggle_menu");
        hamburguer.style.display= "none";
    }
}
function handleWhenInSmallScreen(e)
{
    if(e.matches)
    {
        const menu = document.getElementById("menu");
        menu.style.display = "none";
        menu.style.marginTop= "30%"; //Added because if not, causes the menu to overlap the hamburguer icon.

        const hamburguer = document.getElementById("toggle_menu");
        hamburguer.style.display= "block";
    }
}


var loginButton= document.getElementById("login");
loginButton.onclick= login;

var toggle_menu= document.getElementById("toggle_menu");
toggle_menu.onclick= toggleMenu;


//This section is for the hamburguer menu to work correctly.

const bigScreenMediaQuery = window.matchMedia('(min-width: 701px)')
bigScreenMediaQuery.addListener(handleWhenInBigScreen)



const smallScreenMediaQuery = window.matchMedia('(max-width: 700px)');
smallScreenMediaQuery.addListener(handleWhenInSmallScreen);

// Initial check
handleWhenInSmallScreen(smallScreenMediaQuery);
handleWhenInBigScreen(bigScreenMediaQuery);


