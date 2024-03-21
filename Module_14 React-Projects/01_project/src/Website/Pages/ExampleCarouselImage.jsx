import React from 'react'

function ExampleCarouselImage({text,src,height}) {
  return (
    <div>
      <img
      className="d-block w-100"
      src={src} // Example image URL
      alt={text}
      height={height}
    />
    </div>
  )
}

export default ExampleCarouselImage
