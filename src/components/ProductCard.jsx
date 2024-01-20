import React from 'react'

function ProductCard({data}) {
  return (
    <div>
       <div className='flex flex-col gap-y-5'>
        <p>{data.productName}</p>
        <p>{data.productStock}</p>
        <p>{data.productPrice}</p>
       </div>
    </div>
  )
}

export default ProductCard