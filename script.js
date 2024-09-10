// const form = document.querySelector('form');
// const input = document.querySelector('input');
// const ul = document.querySelector('ul');



// form.onsubmit = (e) => {
//     e.preventDefault();
//     if (!input.value) {
//         alert('please fill input')
//     } else {
//         const li = document.createElement('li');
//         const button = document.createElement('button');

//         li.innerHTML = input.value;
//         ul.appendChild(li);
//         input.value = "";
//         button.innerHTML = "X"
//         li.appendChild(button);



//         li.onclick = () => {
//             li.remove()

//         }


//     }

// }

// -----------------to do list-------------------

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const p = document.querySelector('p')
const clear = document.querySelector('#clear-all-btn');
const add = document.querySelector('#add-todo-btn')

form.onsubmit = (e) => {
    e.preventDefault();
    if (!input.value) {
        alert('Please fill input')
    }
    else {
        const li = document.createElement('li');
        ul.style.textDecoration = "none";
        const trashButton = document.createElement('button');

        //button style
        trashButton.style.padding = "10px";
        trashButton.style.border = "none";
        trashButton.style.color = "white";
        trashButton.style.borderRadius = "5px";
        trashButton.style.backgroundColor = "#e74c3c";
        
        //--------------------------------------------//
        li.innerHTML = input.value;
        ul.appendChild(li);
        input.value = "";
        trashButton.innerHTML = `<i class="fa-solid fa-trash"></i>`
        li.appendChild(trashButton);

        const count = document.getElementsByTagName('li').length
        p.innerHTML = `You have ${count} pending tasks`
        li.onclick = () => {
            li.style.textDecoration = "line-through"
        }
        li.ondblclick = () => {
            li.style.textDecoration = "none";

        }

        trashButton.onclick = () => {
            li.remove()

            const count = document.getElementsByTagName('li').length
            p.innerHTML = `You have ${count} pending tasks`
            
        }
    }
}

clear.onclick = () => {
    ul.innerHTML=""
    const count = document.getElementsByTagName('li').length
            p.innerHTML = `You have ${count} pending tasks`
}



