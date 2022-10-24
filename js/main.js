const abc = ["º","1","2","3","4","5","6","7","8","9","0","?","¡",
                    "Q","W","E","R","T","Y","U","I","O","P","^","+",
                        "A","S","D","F","G","H","G","J","K","L","Ñ","´","Ç",
                            "Z","X","C","V","B","N","M",",",".","-"];

const frag = document.createDocumentFragment();

for(var i = 0; i < abc.length; i++) {
    var key = document.createElement("div");
    key.innerText = abc[i];
    frag.appendChild(key);
 }

document.body.appendChild(frag);