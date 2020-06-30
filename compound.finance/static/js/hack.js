var strx = "/markets /governance /developers /docs /ctokens /about";

function hackLinks(){
    var header = document.getElementsByTagName("header")[0]; 
    var links = header.getElementsByTagName("a");
    for(var i=0; i<links.length; i++){
        if(links[i].getAttribute("href")!==undefined && links[i].getAttribute("href")!==null && links[i].getAttribute("href").length > 0){
            /*
            links[i].setAttribute("data-href", links[i].getAttribute("href"));
            links[i].removeAttribute("href");
            */
            links[i].onclick = function(){
                link.addEventListener ("click", function (e) {
                    if (e.which === 2) 
                        e.preventDefault();
                })
                /*                
                var href = this.getAttribute("data-href");
                if(href.length > 1 && strx.includes(href)){
                    href = href.substring(1);
                    href += ".html"
                }
                window.location = href;
                */
            };
        }
    }
}
document.addEventListener('contextmenu', event => event.preventDefault());
window.addEventListener("auxclick", (event) => {
    if (event.button === 1) event.preventDefault();
  });

window.onload = function () {
    setTimeout(()=>{
        hackLinks();
    }, 3000)
}
hackLinks();