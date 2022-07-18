async function apiCall(){
    const loadingPage=document.getElementById("content");
    const pushItems=document.createElement('div');
    pushItems.style.marginTop="30px";

   const data= await fetch("https://jsonplaceholder.typicode.com/users");
   const users= await data.json();
   users.forEach(user => {
    pushItems.innerText += user.name;
    });
    console.log(users);
    loadingPage.appendChild(pushItems);
}

window.addEventListener("scroll",a);
function a(){
    const scrolable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled =window.scrollY;

    if(scrolled===scrolable){ 
   return apiCall();

}
}