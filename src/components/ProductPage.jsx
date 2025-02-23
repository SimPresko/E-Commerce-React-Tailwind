import { useState } from 'react'
import { motion } from 'framer-motion'

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
      <div className='bg-sky-900 p-6 rounded-lg min-h-[300px] shadow-xl min-w-sm max-w-2xl h-140'>
        <motion.img
          key={selectedColor}
          src={product.image[selectedColor]}
          alt={product.name}
          className='w-full h-75 object-cover rounded-lg duration-150'
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0.1, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
        />
        <h2 className='text-2xl font-bold mt-4 text-sky-200'>{product.name}</h2>
        <p className='text-lg text-sky-300 pb-2'>{product.price}</p>
        <div className='my-4 flex space-x-2 h-8'>
          {product.colors.map((color) => (
            <button
              key={color}
              className={`w-15 h-6 rounded-full ${
                selectedColor === color
                  ? `ring-1 ring-white opacity-100`
                  : 'hover:scale-110 duration-200 opacity-50 hover:opacity-100 cursor-pointer'
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
        <div className='my-4 py-4 space-x-2 flex'>
          {product.sizes.map((size) => (
            <button
              key={size}
              className={` h-10 w-10 border rounded ${
                selectedSize === size
                  ? 'bg-black text-white'
                  : 'cursor-pointer hover:scale-110 duration-200'
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>

        <motion.button
          className='mt-4 w-full bg-black text-white py-2 rounded-lg cursor-pointer duration-200'
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
        >
          Add to Cart
        </motion.button>
      </div>
    </div>
  )
}

export default ProductPage
