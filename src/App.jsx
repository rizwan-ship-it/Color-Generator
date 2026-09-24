import { useEffect, useState } from 'react'
import GradientCard from './components/GradientCard'
import {
  fn_conic_gradient,
  fn_linear_gradient,
  fn_radial_gradient,
  fn_rgb_genrated
} from './helper/gradientGenrated'


function App () {
  // DEFINING FORM GRADIENT DETAILS FOR NUMBER OF GRADIENTS , TYPE OF GRADIENTS
  const initialLinearGradientDetails = {
    numberOfCardGradient: 10,
    typeOfGradient: 'linear'
  }

  const [gradientDetails, setGradientDetails] = useState(
    initialLinearGradientDetails
  )

  // * DEFINE TO STORE THE GENERATED GRADIENT CARD TO RENDER ON UI
  const [genratedGradient, setGenratedGradient] = useState([])

  const handleFormInputChange = event => {
    const name = event.target.name
    const value = event.target.value

    setGradientDetails(prevState => ({ ...prevState, [name]: value }))
  }

  const handleGradientFormSubmit = event => {
    event.preventDefault()

    console.log(gradientDetails)

    if (gradientDetails.typeOfGradient === 'linear') {
      const result = fn_linear_gradient(gradientDetails.numberOfCardGradient)
      setGenratedGradient(result)
    } else if (gradientDetails.typeOfGradient === 'radial') {
     
      const result = fn_radial_gradient(gradientDetails.numberOfCardGradient)
      setGenratedGradient(result)
    } else {
      
      const result = fn_conic_gradient(gradientDetails.numberOfCardGradient);
      setGenratedGradient(result)
    }
  }

  useEffect(() => {
    const result = fn_linear_gradient(gradientDetails.numberOfCardGradient)
    setGenratedGradient(result)
  }, [])

  return (
    <div>
      <div>
        {/* Form Container */}
        <h1>Color gradient Genrated </h1>
        <form
          onSubmit={handleGradientFormSubmit}
          className='color-genrater-form'
        >
          <input
            type='number'
            name='numberOfCardGradient'
            value={gradientDetails.numberOfCardGradient}
            onChange={handleFormInputChange}
            required
            min={1}
            max={100}
          />

          <select
            name='typeOfGradient'
            value={gradientDetails.typeOfGradient}
            onChange={handleFormInputChange}
            className='select-value'>
              
            <option value='linear'>Linear</option>
            <option value='radial'>Radial</option>
            <option value='conic'>Conic</option>
          </select>
          <button type='submit'>Genrate Color</button>
        </form>
      </div>

      {/* gradient color card render here */}
      <div className='gradient-card-container'>
        {genratedGradient.map((color, index) => {
          // console.log(color)
          return <GradientCard key={index} color={color} />
        })}
      </div>
    </div>
  )
}
export default App
