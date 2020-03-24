// console.log('client side js')
const search = document.querySelector('input')
const weatherForm = document.querySelector('form')
const errorText = document.querySelector('#error')
const resultText = document.querySelector('#weather')

weatherForm.addEventListener('submit',(e)=>{
  e.preventDefault()
  const address = search.value
  resultText.textContent ='... Loading'
  errorText.textContent = ''
  fetch(`http://localhost:8080/weather?address=${address}`).then((res)=>{
    res.json().then((data)=>{
      if(data.error){
        console.log(data.error)
        resultText.textContent =''
        errorText.textContent = data.error
      } else{
        const location = data.location
        const temp = data.data.curentTemp
        // console.log(data)
        errorText.textContent =''
        resultText.textContent = `${location} curent temperature ${temp}`
      }
    })
  })
})

const url ="http://puzzle.mead.io/puzzle"

const getData = (address = 'boston')=>{
//`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibWF4cXcxMjMiLCJhIjoiY2s3eGlpZnljMDAzNDNubXEyNDcwZXFtayJ9.8cBX8_9NPB41sSwUCnXn6Q&limit=1`
  
  fetch(`http://localhost:8080/weather?address=${location}`).then((res)=>{
    res.json().then((data)=>{
      if(data.error){
        console.log(data.error)
      } else{
        const value = data.features[0]
        const longitude = value.center[0]
        const latitude = value.center[1]
        console.log(`${longitude}, ${latitude}`)
      }
    })
  })
}
// getData('kiev')

// fetch(url, {mode: 'no-cors'}).then((response)=>{
//   response.json().then((data)=>{
//     console.log(data)
//   })
// })
