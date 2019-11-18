function fonction1(){
    let i = 0;
    let footer = document.querySelector("footer");
    footer.addEventListener("click", function(){ 
        console.log("clique");
        i++;
        console.log(i);

    })
}

function fonction2(){
    let navbarHeader = document.getElementById("navbarHeader");
    let btn = document.querySelector("button.navbar-toggler");
    btn.addEventListener("click", function(){ 
        navbarHeader.classList.toggle("collapse");
     })
}

function fonction3(){
    let editFirstCard = document.querySelector("button.btn-outline-secondary");
    editFirstCard.addEventListener("click", function(){ 
        editFirstCard.style.color = "red";   
    })
}

function fonction4(){
    let editSecondCard = document.querySelectorAll("button.btn-outline-secondary")[1];
    editSecondCard.addEventListener("click", function(){ 
        if ( editSecondCard.style.color === "red")
            editSecondCard.style.color = "green";
        else
            editSecondCard.style.color = "red" ;
    })
}

function fonction5(){
    let navbar = document.querySelector("div.navbar");
    let bootstrapCdn = document.querySelector("link");
        navbar.addEventListener("dblclick", function(){
            if ( bootstrapCdn.getAttribute("href"))
            bootstrapCdn.setAttribute("href", "");      
            else
            bootstrapCdn.setAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");   
    });
}

function fonction6(){
    let viewBtn = document.querySelectorAll("div.btn-group > button.btn-success");
    for (let i = 0; i< viewBtn.length; i++){     
        viewBtn[i].addEventListener("mouseover", function(){  
            if (this.closest("div.card-body").querySelector("p.card-text").textContent == "")
                this.closest("div.card-body").querySelector("p.card-text").textContent = "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web";        
            else
                this.closest("div.card-body").querySelector("p.card-text").textContent = "";
        
            if (this.closest("div.card").querySelector("img.card-img-top").style.width == "20%")
                this.closest("div.card").querySelector("img.card-img-top").style.width = "100%";
            else 
                this.closest("div.card").querySelector("img.card-img-top").style.width = "20%";
        });
    }
    
}


function fonction7(){
    let flecheGris = document.querySelector("p > a.btn-secondary");
    let row = document.querySelectorAll("div.container > div.row")[1];
    flecheGris.addEventListener('click', function(){
        let cards = document.querySelectorAll("div.col-md-4");
        // cards[cards.length - 1].remove();
        // row.prepend(cards[cards.length - 1]);
        row.insertBefore(cards[cards.length - 1], cards[0]);
    });
}

function fonction8(){
    let flechePrimary = document.querySelector("p > a.btn-primary");
    let row = document.querySelectorAll("div.container > div.row")[1];
    flechePrimary.addEventListener('click', function(){
        flechePrimary.setAttribute("href", "#");
        let cards = document.querySelectorAll("div.col-md-4");
        row.insertBefore(cards[0], cards[cards.length - 1]);
        // cards[0].remove();
        // row.appendChild(cards[0]);
        // console.log(cards[0]);
    });    
}

function fonction9(){    
    let strong = document.querySelector("strong"); 
    let body = document.querySelector("body"); 
    strong.addEventListener('click', function(){
        document.addEventListener('keypress', function(c){
                // console.log(c);
                switch(c.key){
                case "a":
                    body.classList = "col-4 offset-0";
                    break;
                case "y":
                        body.classList = "col-4 offset-4";
                    break;
                case "p":
                        body.classList = "col-4 offset-8";
                    break;
                case "b":
                        body.classList = "";
                    break;
                default:
                break;
            }       
        });
    });
}



function perform(){
    fonction1();
    fonction2();
    fonction3();
    fonction4();
    fonction5();
    fonction6();
    fonction7();
    fonction8();
    fonction9();
}
perform();