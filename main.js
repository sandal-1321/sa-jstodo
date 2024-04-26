function submit(e) {
    e.preventDefault();
    let text = document.getElementById('text');
    let store = document.getElementsByClassName('unl');
    let ltag = document.createElement('li');
    let ptag = document.createElement('p');
    let divtag = document.createElement('div');
    let i1tag = document.createElement('i');
    let i2tag = document.createElement('i');
    i1tag.setAttribute('class', 'fa-solid fa-pen-to-square');
    i2tag.setAttribute('class', 'fa-solid fa-trash');
    i1tag.setAttribute('onclick', 'edit(event)');
    i2tag.setAttribute('onclick', 'remove(event)');
    store[0].append(ltag);
    ltag.append(ptag);
    ptag.innerText = text.value;


    localStorage.setItem("name", JSON.stringify([...JSON.parse(localStorage.getItem("name") || "[]"),
    { names: text.value }]))






    text.value = "";
    ltag.append(divtag);
    divtag.append(i1tag);
    divtag.append(i2tag);
}

function edit(e) {
    let edi = e.target.parentElement.parentElement.firstElementChild;
    edi.innerHTML = `<input type="text" id="te" placeholder="Edit..." autocomplete="off" style="outline:none;border:none;width:150px; padding:5px 8px;border-radius:10px;font-family:Britannic Bold; font-size:15px;font-weight:bold;"> <button style="outline:none;border:none; padding:5px 8px;border-radius:10px;font-family:Britannic Bold;fontt-size:15px;font-weight:bold;background-color: rgba(58,248,39,0.8);cursor: pointer;border:1px solid black;" class="btn" onclick="mysub(event)"> Done </button>`;
    let btn = document.querySelector(".btn");
    btn.addEventListener("click", mysub)

    function mysub() {
        let count = e.target.parentElement.parentElement.parentNode.firstElementChild;
        let texx = document.getElementById("te").value;
        count.innerHTML = `${texx}`;

    }
}
function edit(e) {
    let edi = e.target.parentElement.parentElement.firstElementChild;
    edi.innerHTML = `
        <input type="text" class="edit-input" placeholder="Edit..." autocomplete="off" style="outline:none; border:none; width:150px; padding:5px 8px; border-radius:10px; font-family:Britannic Bold; font-size:15px; font-weight:bold;">
        <button style="outline:none; border:none; padding:5px 8px;color: beige;border-radius:10px; font-family:Britannic Bold; font-size:15px; font-weight:bold; background-color: rgb(54, 19, 19); cursor: pointer; border:1px solid black;" class="edit-btn">
            Done
        </button>`;

    let btn = edi.querySelector(".edit-btn");
    btn.addEventListener("click", function (event) {
        let count = event.target.parentElement;
        console.log(count)
        let texx = edi.querySelector(".edit-input").value;
        count.textContent = texx;
    });
}

function remove(e) {
    let rem = e.target.parentElement.parentElement;
    rem.remove()
}
