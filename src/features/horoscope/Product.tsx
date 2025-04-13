const Product = (props: any) => {
    const products = props.products;
    const renderProductsItems = products.map((item: any) => (
        <div key={item.id} className="flex-1/3 flex-col">
            <div>
                <div className="pb-5">
                    <img src={item.img} alt={item.alt} className="w-100 h-60"/>
                </div>
                <div className="font-bold text-xl pb-2">{item.name}</div>
                <div className="text-gray-500 pb-2">{item.subtitle}</div>
                <div>{item.price}</div>
            </div>
        </div>
    ))

    return (
        <div>
            <div className='pb-10'>
                <h1 className='text-3xl font-bold'>Related products</h1>
            </div>
            <div className="flex pb-10 gap-20 justify-center">
                {renderProductsItems}
            </div>
        </div>
    )
}

export default Product