/* funciones anonimas autoejecutables */
((d)=>{
    const $btnMenu = d.querySelector(".menu-btn");
    const $menu = d.querySelector(".menu");
    console.log("Hello")
    d.addEventListener("click", e=> {
        if(!e.target.closest(".menu-btn")) return false;
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("is-active");
        
        // if(e.target.matches(".menu a"))
        // $btnMenu.firstElementChild.classList.remove("none");
        // $btnMenu.lastElementChild.classList.add("none");
        // $menu.classList.remove("is-active");
    });
})(document);

((d)=>{
    const $form = document.querySelector(".contact-form");
    const $loader = document.querySelector(".contact-form-loader");
    const $response = document.querySelector(".contact-form-response");

    $form.addEventListener("submit", e=> {
        e.preventDefault();
        $loader.classList.remove("none");
        fetch("https://formsubmit.co/ajax/toceb22463@chysir.com",{
            method : "post",
            body : new FormData(e.target)
        })
        .then(res => {res.ok ? res.json() : Promise.reject(res)})
        .then(json => {
            console.log(json);
            location.hash = "#gracias";
            $form.reset();
        })
        .catch(err => {
            console.log(err);
            let msg = err.statusText || "Ocurrio un error al enviar, intenta nuevamente."
            $response.querySelector("h3").textContent = `Error ${err.status} : ${msg}`;
        })
        .finally(()=>{
            $loader.classList.add("none");
            setTimeout(()=>{
                location.hash = "#cerrar";
            },2000);
        })
    })
})(document);



