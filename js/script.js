for (let i = 1; i <= 5; i++) {
    let h1 = document.createElement('h1');
    h1.innerText = `Rad ${i}`;
    h1.style.fontSize = `${i}rem`;
    h1.style.backgroundColor = `rgb(30,200,${i*30}, 0.5)`
    h1.style.textAlign = "center";
    h1.style.color = "darkblue"
    document.body.appendChild(h1);
}

let container = document.createElement('div');

container.style.border = "1px solid black";
container.style.padding = "5rem";

container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.flexFlow = "row no-wrap";
container.style.gap = "15rem";
let isBlack = true;
for (let i = 0; i < 3; i++) {
    let innerContainer = document.createElement('div');

    
    switch(i) {
        case 1:
            for (let i = 9; i >= 0; i--) {
                let number = document.createElement('h1');
                number.innerText = i;
                

                number.style.backgroundColor = "white";
                number.style.width = "100%";
                
                innerContainer.appendChild(number);
                number.style.textAlign = "center"
                if (i === 8) {
                    number.style.backgroundColor = null;
                } else if (i % 2 === 0) {
                    number.style.backgroundColor = "black";
                    number.style.color = "white";
                }
               
            }
          break;
        case 2:
            const nummer = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];
            for (let i = 0; i < 10; i++) {
                let number = document.createElement('h1');
                number.innerText = nummer[i];
                innerContainer.appendChild(number);
                number.style.width = "100%";
                number.style.textAlign = "end"
                number.style.backgroundColor = "white";
                if (i === 5) {
                    number.style.backgroundColor = null;
                } else if (i % 2 === 0) {
                    number.style.backgroundColor = "black";
                    number.style.color = "white";
                }
            }
          break;
        default:
            for (let i = 0; i < 10; i++) {
                let number = document.createElement('h1');
                number.innerText = i;
                innerContainer.appendChild(number);
                number.style.textAlign = "start"
                number.style.backgroundColor = "white";
                if (i === 4) {
                    number.style.backgroundColor = null;
                }
                else if (i % 2 === 0) {
                    number.style.backgroundColor = "black";
                    number.style.color = "white";
                }
            }
    } 
    for (const child of innerContainer.children) {
        child.style.margin = "0px";
    }
    innerContainer.style.display = "flex";
    innerContainer.style.flexFlow = "column nowrap";
    
    innerContainer.style.padding = "1rem"
    innerContainer.style.backgroundColor = "lightpink";
    
    innerContainer.style.width = "1000px";
   
    container.appendChild(innerContainer);
}

document.body.appendChild(container);


