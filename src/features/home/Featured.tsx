const Featured = (props: any) => {

    const featured = props.featured.featured;
    const renderFeaturedItems = featured.map((item: any) => (
        <div key={item.id} className="flex justify-center">
            <img src={item.img} alt={item.alt} className="h-70 w-70" />
        </div>
    ))
    
    return (
        <div>
            <div className='flex justify-center pb-10'>
                <h1 className='text-3xl font-bold'>Featured Products</h1>
            </div>
            <div className="flex flex-col sm:flex-row pb-10 gap-5 sm:gap-20 justify-center">
                {renderFeaturedItems}
            </div>
            <div>
                <p className="text-lg whitespace-pre-line">{props.featured.description}</p>
            </div>
        </div>
    )
}

export default Featured