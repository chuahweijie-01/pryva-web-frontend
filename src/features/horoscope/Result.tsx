import virgo from '../../assets/virgo.jpg'

const Result = () => {

    const result = {
        horoscope: 'VIRGO',
        date: '(Aug 24-Sep 23)',
        general:
            `Daily Horoscope Prediction says, Forge New Paths with Clarity and Confidence.

            Focus on balance today, Virgo. Embrace clarity, make thoughtful decisions, and prioritize communication to strengthen relationships.
            
            Today’s Virgo horoscope encourages focusing on personal growth and practical goals. Embrace opportunities for improvement while staying organized. Balance work and relationships by setting healthy boundaries. Trust your intuition to make thoughtful decisions. Take time for self-care and relaxation to recharge your energy. Stay confident and motivated throughout the day.
            `,
        love:
            `Today brings fresh energy to your relationships. 
            
            Open communication can strengthen bonds and create a sense of closeness. If single, trust your instincts when meeting someone new, as they may hold surprising compatibility. Couples may find joy in shared activities, deepening their connection. 
            
            Focus on honesty and balance to maintain harmony. Remember, love thrives when nurtured with care and patience. Embrace the opportunities around you, and let your heart guide your actions.
        `
    }

    return (
        <div className='border-1 border-gray-100 rounded-md py-8 px-10'>
            <div className="flex gap-30 py-15">
                <div className='flex-1 flex items-center justify-center'>
                    <img src={virgo} alt='horoscope' />
                </div>
                <div className="flex-1">
                    <div className='pb-25 px-5'>
                        <p className='text-4xl font-bold text-indigo-500 pb-3'>{result.horoscope}</p>
                        <p className='text-lg text-gray-500 pb-3'>{result.date}</p>
                        <p className='text-lg whitespace-pre-line pb-10'>{result.general}</p>
                        <p className='text-2xl pb-3'>{result.horoscope} Love Horoscope Today</p>
                        <p className='text-lg whitespace-pre-line'>{result.love}</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-end'>
                <button className="py-2 text-sm bg-black w-50 rounded-[5px] border-none text-white cursor-pointer hover:bg-gray-800">Find out more</button>
            </div>
        </div>
    )
}

export default Result