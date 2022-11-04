const URL = 'https://api.adviceslip.com/advice'
const header = document.querySelector('.box__header')
const text = document.querySelector('.box__text')
const btn = document.querySelector('.box__btn')

const writeAdvice = (data) =>{
    console.log(data);
    header.textContent = `advice #${data.slip.id}`
    text.textContent = data.slip.advice
}



const getAdvice = () =>{
    fetch(URL).then(
        res => res.json()
    ).then(
        res => writeAdvice(res)
    ).catch(
        err => console.error("Upss something went wrong")
    )
}

btn.addEventListener('click',getAdvice)