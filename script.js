//parentNode.appendChild(childNode)
//parentNode.insertBefore(newNode, referenceNode)
//parentNode.removeChild(child)

//div.style.color = "blue";
//div.setAttribute("style", "color: blue; background: white;");

//div.style.backgroundColor;
//div.style["background-color"];


let inputVar = document.querySelector(".inp");
let buttonVar = document.querySelector(".btn");
let listVar = document.querySelector(".lst");

buttonVar.classList.add('btn');


function capitalize(str) {
    if (!str) return "";

    let res = str.split("");

    for (let i = 0; i < res.length; i++) {
        if (res[i] === " ") res.splice(i, 1);
    }
    
    res = res[0].toUpperCase() + res.slice(1).join("");

    return res;
}

function separateNumbers(str) {
    let arr = str.split("");
    let string = [];
    let number = [];

    for (let i = 0; i < arr.length; i++) {
        if ("1234567890".includes(arr[i])) {
            number.push(arr[i]);
        } else {
            string.push(arr[i])
        }
    }

    return [string.join(""), number.join("")];
}


function addItem(event) {
    let [str, num] = separateNumbers(inputVar.value);    

    inputVar.value = "";

    const li = document.createElement('li');
    const spanStr = document.createElement('span');
    const spanNum = document.createElement('span');

    li.appendChild(spanNum);
    li.appendChild(spanStr);

    spanStr.classList.add("spanStr");
    spanNum.classList.add("spanNum");

    spanStr.textContent = capitalize(str);
    if (num === "") {
        spanNum.textContent = "x0";
        spanNum.style.color = "whitesmoke";
        spanStr.style.color = "#C9A84C";
    }
    if (parseInt(num) > 0) spanNum.textContent = "x" + num;
    if (num < 10) spanNum.style.marginRight = "36px";
    if (num > 99) spanNum.style.marginRight = "13px";


    if (str !== "") {
        listVar.appendChild(li);
        inputVar.focus();
    }

    li.addEventListener('click', () => listVar.removeChild(li));
}



buttonVar.addEventListener('click', addItem);

inputVar.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        
        buttonVar.click();
    };
});



