import { ToastContainer, toast } from 'react-toastify'

function GradientCard ({ color }) {
  console.log(color)

  const handleCopy = colorCode => {
    navigator.clipboard.writeText(colorCode)
    toast.success('css copied to clipboard', {
      autoClose: 500
    })
  }

  return (
    <div className='gradient-card' style={{ background: color }}>
      <button className='copy-btn' onClick={() => handleCopy(color)}>
        Copy
      </button>
      <ToastContainer />
    </div>
  )
}

export default GradientCard
