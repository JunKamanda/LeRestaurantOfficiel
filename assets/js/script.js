const listes = document.querySelectorAll(".liste");
const header_nav = document.querySelector(".header_nav");
const dishs = document.querySelectorAll(".plate > .img");
const infos = document.querySelectorAll(".plate > .infos");
const prices = document.querySelectorAll(".plate > .price > p");
const menu_section = document.querySelector(".menu_section");
const topContentP =  document.querySelector(".top_content > p");
const topContentImg =  document.querySelector(".top_content > .img");
const h3Section3 = document.querySelectorAll("#h3Section3");

const h3 = document.querySelectorAll("h3");

listes.forEach((liste)=>{
    liste.addEventListener("click", ()=>{
        const active = document.querySelector(".active")
        active.classList.remove("active")
        liste.classList.add("active")
        header_nav.classList.remove("show");
    });
});

sideBtn.addEventListener("click", ()=>{
    header_nav.classList.toggle("show");
});

//APPARUTION MENU
//APPARUTION MENU
//APPARUTION MENU
window.addEventListener("scroll", ()=>{
    let scrollValueMenu = (window.scrollY + window.innerHeight) / document.body.offsetHeight;

    if (scrollValueMenu >= 0.34) {
        menu_section.classList.add("showMenu_section")
    }
});

// //APPARUTION PLATES
// //APPARUTION PLATES
// //APPARUTION PLATES
dishs.forEach((dish)=>{
    window.addEventListener("scroll", ()=>{
        let scrollValuePlate = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    
        if (scrollValuePlate >= 0.42) {
            dish.classList.add("showImg");
        }else{
            dish.classList.remove("showImg");
        }
    });
})
infos.forEach((info)=>{
    window.addEventListener("scroll", ()=>{
        let scrollValuePlate = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    
        if (scrollValuePlate >= 0.42) {
            info.classList.add("showInfos");
        }else{
            info.classList.remove("showInfos");
        }
    });
})
prices.forEach((price)=>{
    window.addEventListener("scroll", ()=>{
        let scrollValuePlate = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    
        if (scrollValuePlate >= 0.42) {
            price.classList.add("showP");
        }else{
            price.classList.remove("showP");
        }
    });
})

//APPARUTION SETION CINQ
//APPARUTION SETION CINQ
window.addEventListener("scroll", ()=>{
    let scrollValueSectionCinq = (window.scrollY + window.innerHeight) / document.body.offsetHeight;

    if (scrollValueSectionCinq >= 0.90) {
        topContentP.classList.add("showPSectionCinq");
        topContentImg.classList.add("showImgSectionCinq");
    }else{
        topContentP.classList.remove("showPSectionCinq");
        topContentImg.classList.remove("showImgSectionCinq");
    }
});

// window.addEventListener("scroll", ()=>{
//     let scrollValueSectionCinq = (window.scrollY + window.innerHeight) / document.body.offsetHeight;

//     if (scrollValueSectionCinq >= 0.22) {
//         h3Section1.classList.add("showH3")
//     }else{
//         h3Section1.classList.remove("showH3")
//     }
// });
// window.addEventListener("scroll", ()=>{
//     let scrollValueSectionCinq = (window.scrollY + window.innerHeight) / document.body.offsetHeight;

//     if (scrollValueSectionCinq >= 0.35) {
//         h3Section2.classList.add("showH3")
//     }else{
//         h3Section2.classList.remove("showH3")
//     }
// });
// window.addEventListener("scroll", ()=>{
//     let scrollValueSectionCinq = (window.scrollY + window.innerHeight) / document.body.offsetHeight;

//     h3Section3.forEach((h3)=>{
//         if (scrollValueSectionCinq >= 0.56) {
//             h3.classList.add("showH3")
//         }else{
//             h3.classList.remove("showH3")
//         }
//     })
// });
// window.addEventListener("scroll", ()=>{
//     let scrollValueSectionCinq = (window.scrollY + window.innerHeight) / document.body.offsetHeight;

//     if (scrollValueSectionCinq >= 0.69) {
//         h3Section4.classList.add("showH3")
//     }else{
//         h3Section4.classList.remove("showH3")
//     }
// })

h3.forEach((titre)=>{
    window.addEventListener("scroll", ()=>{
        let scrollValueSectionCinq = (window.scrollY + window.innerHeight) / document.body.offsetHeight;

        if (scrollValueSectionCinq >= 0.20) {
            h3Section1.classList.add("showH3")
        }

        if (scrollValueSectionCinq >= 0.30) {
            h3Section2.classList.add("showH3")
        }

        h3Section3.forEach((h3)=>{
            if (scrollValueSectionCinq >= 0.50) {
                h3.classList.add("showH3")
            }else{
                h3.classList.remove("showH3")
            }
        })
        if (scrollValueSectionCinq >= 0.60) {
            h3Section4.classList.add("showH3")
        }
        else{
            titre.classList.remove("showH3")
        }
    });
});