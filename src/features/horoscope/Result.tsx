import virgo from '../../assets/virgo.jpg'

const Result = (props: any) => {

    const result = props.result;
   
    return (
        <div className='border-1 border-gray-200 rounded-md py-8 px-2 sm:px-10'>
            <div className="flex flex-col sm:flex-row gap-30 py-15">
                <div className='flex-1 flex items-center justify-center'>
                    <img src={virgo} alt='horoscope' />
                </div>
                <div className="flex-1">
                    <div className='pb-25 px-5'>
                        <p className='text-4xl font-bold text-indigo-500 pb-3'>{result.horoscope}</p>
                        <p className='text-lg text-gray-500 pb-3'>{result.date}</p>
                        <p className='text-sm sm:text-lg whitespace-pre-line pb-10'>{result.general}</p>
                        <p className='text-lg sm:text-2xl pb-3'>{result.horoscope} Love Horoscope Today</p>
                        <p className='text-sm sm:text-lg whitespace-pre-line'>{result.love}</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-end'>
                <button className="py-2 text-sm bg-black w-full sm:w-50 rounded-[5px] border-none text-white cursor-pointer hover:bg-gray-800">Find out more</button>
            </div>
        </div>
    )
}

export default Result