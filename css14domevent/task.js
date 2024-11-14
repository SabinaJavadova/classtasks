document.querySelectorAll(".question").forEach(element =>{
    element.addEventListener("click",function () {
        document.querySelectorAll(".content").forEach(el=>{

           if ( el.style.height== "200px") {
                el.style.height="0";
            }
            else if (el.style.height="0px") {
                el.style.height= "200px";
            }

        })

    })
})