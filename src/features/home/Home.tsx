import home from '/home-1.jpg';
import Featured from './Featured';
import featured from '../../data/featured.result.json';
import articles from '../../data/article.result.json';
import Article from './Article';

const Home = () => {

  const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

  return (
    <div className='p-10'>
      <h1 className='text-4xl font-bold pt-3 pb-5'>Home</h1>
      <div className="pb-10">
        <p className='text-lg text-gray-500 pb-3'>{description}</p>
      </div>
      <div className='flex justify-center pb-10'>
        <img src={home} alt="home" />
      </div>
      <div className='pb-10'>
        <Featured featured={featured} />
      </div>
      <div>
        <Article articles={articles} />
      </div>
    </div>
  )
}

export default Home