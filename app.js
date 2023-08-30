const d = document;

const $button = d.querySelector('#push');
const $container = d.querySelector('.container'); 
const $containerTask = d.querySelector('#tasks');

$button.addEventListener('click', (e)=>{
    e.preventDefault();

    let $valueInput = d.querySelector('.input-task').value;
    
    if($valueInput.length === 0){
        const $p = d.createElement('p');
        $p.textContent = 'Please Enter a Task';
        $p.classList.add('validationInput');
        $container.insertAdjacentElement("afterbegin", $p);
       
       setTimeout(()=>{
           $container.removeChild($p);
       }, 2000)
       
    }else{
       $containerTask.innerHTML += `
         <div class="task">
            <span id="taskName">${$valueInput}</span>
            <button class="delete">
               <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                     <path d="M4 7l16 0"></path>
                     <path d="M10 11l0 6"></path>
                     <path d="M14 11l0 6"></path>
                     <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                     <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
               </svg>
            </button>
         </div>
       `;

       DeleteTask();
       CompleteTask();
    }

    d.querySelector('.input-task').value = '';
})

function DeleteTask(){
    let DeleteButton = d.querySelectorAll('.delete');

    DeleteButton.forEach((button,index)=>{
      button.addEventListener('click', (e)=>{
        button.parentNode.remove();
      })
    })
}

function CompleteTask(){
    let $task = d.querySelectorAll('.task');
    let taskValue = d.querySelector('#taskName');
   
    $task.forEach(tarea=>{
        tarea.addEventListener('click', (e)=>{
            e.target.classList.toggle('complete');
        })
    })
}