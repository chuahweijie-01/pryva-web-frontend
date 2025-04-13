import productmain from '../../assets/product-main.jpg'
import productsData from '../../data/products.result.json'

const Products = () => {

  const description =
    `
    Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look:
    
    Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.     
    `;

  const products = productsData.products;
  const renderProductsItems = products.map((item: any) => (
    <div key={item.id} className='pb-5 sm:pb-15'>
      <div>
        <div className="pb-5">
          <img src={item.img} alt={item.alt} className="w-100 h-60" />
        </div>
        <div className="font-bold text-xl pb-2">{item.name}</div>
        <div className="text-gray-500 pb-2">{item.subtitle}</div>
        <div>{item.price}</div>
      </div>
    </div>
  ))

  return (
    <div className='p-10'>
      <h1 className='text-4xl font-bold pt-3 pb-5'>Products</h1>
      <div className='border-1 border-gray-200 rounded-md py-15 px-10 sm:px-30 mb-8'>
        <div className="flex flex-col sm:flex-row gap-10">
          <div>
            <img src={productmain} alt="product" />
          </div>
          <div className='flex justify-center flex-col'>
            <div className='pb-2'>
              <p className='font-bold text-3xl'>Solid Perfume</p>
            </div>
            <div className='pb-5'>
              <p className='text-gray-500'>A scent crafted for your Love Story</p>
            </div>
            <div className='pb-2'>
              <p className='font-bold text-xl'>RM 588.00</p>
            </div>
            <div className='pb-10'>
              <p className='text-gray-500 text-lg'>This fragnance was crafted based on your astrolegical chatt, representing the tendernens and strength of your bond.</p>
            </div>
            <div>
              <button className="py-2 text-sm bg-black w-full rounded-[5px] border-none text-white cursor-pointer hover:bg-gray-800">Go to Shopify</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className='text-2xl font-bold pt-3 pb-5'>Description</h1>
        <div>
          <p className='text-gray-500'>A scent crafted for your Love Story</p>
        </div>
        <div>
          <p className='text-lg whitespace-pre-line pb-10'>{description}
          </p>
        </div>
      </div>
      <div>
        <div className='pb-10'>
          <h1 className='text-3xl font-bold'>Related products</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {renderProductsItems}
        </div>
      </div>
    </div>
  )
}

export default Products