const currLang = document.querySelector('.langs > img');
const langList = document.querySelector('.langs > ul');

let isOpen = false;

currLang.addEventListener('click',() => {
    isOpen = !isOpen;
    toggleList();
});

function toggleList(){
    langList.style.display = isOpen ? 'block' : 'none';
}

langList.addEventListener('click', e => {
    const target = e.target;

    if(target.tagName !== 'IMG') return;

    [
        currLang.src,
        target.src
    ] = [
        target.src,
        currLang.src
    ]
})