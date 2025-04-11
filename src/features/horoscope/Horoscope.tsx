import PersonalInfo from "./form/PersonalInfo"
import Result from "./Result";

const Horoscope = () => {

  const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

  return (
    <div className='p-10'>
      <h1 className='text-4xl font-bold pt-3 pb-5'>Horoscope</h1>
      <div className="pb-5">
        <p className='text-lg text-gray-500 pb-3'>{description}</p>
      </div>
      <div className="pb-10">
        <PersonalInfo />
      </div>
      <div>
        <Result />
      </div>
    </div>
  )
}

export default Horoscope