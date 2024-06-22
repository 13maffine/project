document.getElementById("open-modal-btn").addEventListener("click", function(){
    document.getElementById("my-modal").classList.add("open");
}) 

document.getElementById("close-my-modal-btn").addEventListener("click", function(){
    document.getElementById("my-modal").classList.remove("open");
}) 

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape"){
        document.getElementById("my-modal").classList.remove("open");
    }
});

document.querySelector("#my-modal .modal_box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
})

const placeholder = document.getElementById('other');
const radioButton1 = document.getElementById('p100');
const radioButton2 = document.getElementById('p200');
const radioButton3 = document.getElementById('p300');
const radioButton4 = document.getElementById('p400');
const radioButton5 = document.getElementById('p500');


placeholder.addEventListener('click', function() {
    radioButton1.checked = false;
    radioButton2.checked = false;
    radioButton3.checked = false;
    radioButton4.checked = false;
    radioButton5.checked = false;
});