//inner HTML
const loading = document.getElementById('loading');
const button = document.getElementById('btn-random');
const colorAmount = document.getElementById('color-amount');

//Event listener add colors button
button.addEventListener('click', createDiv);

//create Div's
function createDiv (){
    for (i = 0; i < colorAmount.value; i++ ) {
        const div = document.createElement('div');
        loading.append(div);
        div.classList = "col-11 col-md-3 m-3 py-5 color-box text-light text-center fs-3";
        generateColor();
        createIcon();
    }; 
}
//create trash button
function createIcon() {
    const icon = document.createElement('i');
    icon.classList = "fas fa-trash-alt";
    loading.lastChild.append(icon);
    //Event listener trash button
    loading.lastChild.lastChild.addEventListener("click", e => {
        e.target.parentNode.remove();
    })
}

//generate Color
function generateColor () {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    loading.lastChild.style.backgroundColor = "#" + randomColor;
    loading.lastChild.innerHTML = "#" + randomColor;
}
