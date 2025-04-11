import Contact from './form/Contact'

const About = () => {

  const about = {
    subtitle: "Subheading for description or instructions",
    content: `
    Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look: 
    
    Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.`,
    image: {
      url: "",
      alt: ""
    }
  }

  return (
    <div className='p-10'>
      <h1 className='text-4xl font-bold pt-3 pb-5'>About</h1>
      <div className="flex gap-30">
        <div className="flex-1">
          <div className='pb-25'>
            <p className='text-lg text-gray-500 pb-3'>{about.subtitle}</p>
            <p className='text-lg whitespace-pre-line'>{about.content}</p>
          </div>
          <Contact />
        </div>
        <div className='flex-1'>
          {/* image */}
        </div>
      </div>
    </div>
  )
}

export default About