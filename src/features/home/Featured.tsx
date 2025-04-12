const Featured = (props: any) => {

    const features = props.features.featured;
    const renderFeaturedItems = features.map((item: any) => (
        <div key={item.id}>
            <img src={item.img} alt={item.alt} className="h-70 w-70" />
        </div>
    ))
    
    return (
        <div>
            <div className='flex justify-center pb-15'>
                <h1 className='text-3xl font-bold'>Featured Products</h1>
            </div>
            <div className="flex pb-10 gap-20 justify-center">
                {renderFeaturedItems}
            </div>
            <div>
                <p className="text-lg whitespace-pre-line">{props.features.description}</p>
            </div>
        </div>

    )
}

export default Featured