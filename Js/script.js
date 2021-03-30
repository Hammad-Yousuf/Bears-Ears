// First Modal

document.getElementById('_first').addEventListener('click', ()=>{
    document.getElementById('_first-modal').classList.add('appear-modal')
})

document.getElementById('_close-modal').addEventListener('click', ()=>{
    document.getElementById('_first-modal').classList.remove('appear-modal')
})

// Second Modal

document.getElementById('_second').addEventListener('click', ()=>{
    document.getElementById('_second-modal').classList.add('appear-modal')
})

document.getElementById('_second-close-modal').addEventListener('click', ()=>{
    document.getElementById('_second-modal').classList.remove('appear-modal')
})

// Third Modal

document.getElementById('_third').addEventListener('click', ()=>{
    document.getElementById('_third-modal').classList.add('appear-modal')
})

document.getElementById('_third-close-modal').addEventListener('click', ()=>{
    document.getElementById('_third-modal').classList.remove('appear-modal')
})
