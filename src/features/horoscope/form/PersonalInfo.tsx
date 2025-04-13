const PersonalInfo = (props: any) => {

    return (
        <div className='border-1 border-gray-200 rounded-md py-8 px-10'>
            <form onSubmit={props.handleFormSubmit}>
                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="col-span-full">
                        <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                            Name
                        </label>
                        <div className="mt-2">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                onChange={props.handleOnChange} value={props.formData.name}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="year" className="block text-sm/6 font-medium text-gray-900">
                            Year
                        </label>
                        <div className="mt-2">
                            <input
                                id="year"
                                name="year"
                                type="number"
                                onChange={props.handleOnChange} value={props.formData.year}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="day" className="block text-sm/6 font-medium text-gray-900">
                            Day
                        </label>
                        <div className="mt-2">
                            <input
                                id="day"
                                name="day"
                                type="number"
                                onChange={props.handleOnChange} value={props.formData.day}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="month" className="block text-sm/6 font-medium text-gray-900">
                            Month
                        </label>
                        <div className="mt-2">
                            <input
                                id="month"
                                name="month"
                                type="number"
                                onChange={props.handleOnChange} value={props.formData.month}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>
                </div>
                <div className='pb-10'></div>
                <div>
                    <button className="py-2 text-sm bg-black w-50 rounded-[5px] border-none text-white cursor-pointer hover:bg-gray-800">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default PersonalInfo