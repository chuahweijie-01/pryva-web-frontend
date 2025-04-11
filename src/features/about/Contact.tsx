import { useState } from 'react'

const Contact = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleFormSubmit = async (e: any) => {
        e.preventDefault();
    }

    return (
        <div>
            <h1 className='text-2xl font-bold'>Contact Me</h1>
            <form onSubmit={handleFormSubmit}>
                <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                            First name
                        </label>
                        <div className="mt-2">
                            <input
                                id="first-name"
                                type="text"
                                onChange={(e) => setFirstName(e.target.value)} value={firstName}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                            Last name
                        </label>
                        <div className="mt-2">
                            <input
                                id="last-name"
                                type="text"
                                onChange={(e) => setLastName(e.target.value)} value={lastName}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div className="col-span-full">
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                            Email Address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                type="email"
                                onChange={(e) => setEmail(e.target.value)} value={email}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div className="col-span-full">
                        <label htmlFor="message" className="block text-sm/6 font-medium text-gray-900">
                            Your message
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="message"
                                onChange={(e) => setMessage(e.target.value)} value={message}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>
                </div>
                <div className='pb-20'></div>
                <div>
                    <button className="py-2 text-sm bg-black w-full rounded-[5px] border-none text-white cursor-pointer">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contact