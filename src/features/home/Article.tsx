const Article = (props: any) => {

    const articles = props.articles.articles;
    const renderArticleItems = articles.map((item: any) => (
        <div key={item.id} className='pb-5 sm:pb-15'>
            <div>
                <div className="pb-5">
                    <img src={item.img} alt={item.alt} className="w-100 h-60" />
                </div>
                <div className="font-bold text-xl pb-2">{item.title}</div>
                <div className="text-gray-500">{item.author}</div>
            </div>
        </div>
    ))

    return (
        <div>
            <div className='pb-10'>
                <h1 className='text-3xl font-bold'>Related articles or posts</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                {renderArticleItems}
            </div>
        </div>
    )
}

export default Article