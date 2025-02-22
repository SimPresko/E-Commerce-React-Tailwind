import { useState } from 'react'

const product = {
  name: 'Nike Air Max 270',
  price: '$129.99',
  colors: ['blue', 'red', 'green'],
  sizes: ['S', 'M', 'L', 'XL'],
  image: {
    blue: '/nike-air-max-270-blue.jpg',
    red: '/nike-air-max-270-red.jpg',
    green: '/nike-air-max-270-green.jpg',
  },
}

const ProductPage = () => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])

  return (
    <div className='gradient-bg flex justify-center items-center'>
      <div className='bg-sky-900 p-6 rounded-lg shadow-xl max-w-2xl'>
        <img className='h-100' src={product.image[selectedColor]} />
        <h2 className='text-2xl font-bold mt-4 text-sky-200'>{product.name}</h2>
        <p className='text-lg text-sky-300 pb-4'>{product.price}</p>
        <div className='mt-4 flex space-x-2'>
          {product.colors.map((color) => (
            <button
              key={color}
              className={`w-15 h-6 rounded-full ${
                selectedColor === color ? `ring-3 ring-black` : ''
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductPage
