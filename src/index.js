
// WRITE YOUR CODE BELOW!

const dogsList = document.querySelector('.dogs-list')
const mainList = document.querySelector('.main')

const addNewDog = document.querySelector('.dogs-list__button--add')
// console.log(addNewDog)
addNewDog.addEventListener('click',() => {
    // console.log('sami')
    mainList.innerHTML = ''
    const dogsCards = document.createElement('section')
    dogsCards.classList = 'main__dog-section'
    mainList.append(dogsCards)
    
    const h2 =  document.createElement('h2')
    h2.innerText = 'Add a new Dog'
    dogsCards.append(h2)

    const form = document.createElement('form')
    form.setAttribute('class','form')

    const nameLabel = document.createElement('label')
    form.append(nameLabel)
    nameLabel.setAttribute('for','name')
    nameLabel.innerText = "Dog's name"
    
    const inputName = document.createElement('input')
    form.append(inputName)
    inputName.setAttribute('type','text')
    inputName.setAttribute('id','name')
    inputName.setAttribute('name','name')

    const image = document.createElement('label')
    form.append(image)
    image.setAttribute('for','image')
    image.innerText = "Dog's picture"

    const inputImage = document.createElement('input')
    form.append(inputImage)
    inputImage.setAttribute('type','url')
    inputImage.setAttribute('id','image')
    inputImage.setAttribute('name','image')

    const bioName = document.createElement('label')
    form.append(bioName)
    bioName.setAttribute('for','bio')
    bioName.innerText = "Dog's bio"

    const textArea = document.createElement('textarea')
    form.append(textArea)
    textArea.setAttribute('rows','5')
    textArea.setAttribute('id','bio')
    textArea.setAttribute('name','bio')

    const submit = document.createElement('input')
    form.append(submit)
    submit.setAttribute('type','submit')
    submit.setAttribute('id','submit')
    submit.setAttribute('name','submit')
    submit.setAttribute('value',"Let's add a dog!")
    submit.setAttribute('class','form__button')


    dogsCards.append(form)
})

for(let i = 0; i < data.length; i++){

    const dogs = document.createElement('li')
    dogs.classList.add('dogs-list__button')

    dogs.innerText = data[i].name
    dogsList.append(dogs)


    dogs.addEventListener('click',() => {

        mainList.innerHTML = ''
        const dogsCards = document.createElement('section')
        dogsCards.classList = 'main__dog-section'
        mainList.append(dogsCards)
        
        const h2 =  document.createElement('h2')
        h2.innerText = data[i].name
        dogsCards.append(h2)

        //image
        const image = document.createElement('img')
        image.setAttribute('src', data[i].image)
        dogsCards.append(image)

        const bio = document.createElement('h3')
        bio.innerText = 'Bio'
        dogsCards.append(bio)

        const bioInfo = document.createElement('p')
        bioInfo.innerText = data[i].bio
        dogsCards.append(bioInfo)

        const naughty = document.createElement('p')
        naughty.innerText = `Is naughty? ${data[i].isGoodDog}`
        naughty.style.fontStyle = 'italic'
        dogsCards.append(naughty)

        const goodDog =  document.createElement('button')
        goodDog.classList = 'form-button'
        goodDog.innerText = 'Good dog!'

        const badDog = document.createElement('button')
        badDog.classList = 'form-button'
        badDog.innerText = 'Bad dog!'
        

        if (data[i].isGoodDog === true){
            dogsCards.append(goodDog)
        } else {
            dogsCards.append(badDog)
        }
    })


}