import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='mt-50'>
            <div className="border-t border-black/5 bg-white flex items-center justify-between mt-auto px-10 py-6 flex-col sm:flex-row">
                <div className="flex gap-6 text-lg pb-2 sm:pb-0">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>
                <div className="text-sm text-gray-400">
                    Copyright © Joliss Workspace
                </div>
            </div>
        </footer>
    )
}

export default Footer