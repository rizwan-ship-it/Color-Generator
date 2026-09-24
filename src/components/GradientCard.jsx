function GradientCard ({ color }) {

  console.log(color)
  
  
  const handleCopy = (colorCode) => {
    navigator.clipboard.writeText(colorCode)
    toast.success('css copied to clipboard', {
      autoClose: 500
    })
  }

  return (
    <div className='gradient-card' style={{ background: color }}>
      <button onClick={() => handleCopy(color)} className='copy-btn'>
        CSS
      </button>
    </div>
  )
}

export default GradientCard
 