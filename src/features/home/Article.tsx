const Article = (props: any) => {

    const articles = props.articles.articles;
    const renderArticleItems = articles.map((item: any) => (
        <div key={item.id} className="flex-1/3 flex-col">
            <div>
            <div className="pb-5">
                <img src={item.img} alt={item.alt} />
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
            <div className="flex pb-10 gap-20 justify-center">
                {renderArticleItems}
            </div>
        </div>
    )
}

export default Article