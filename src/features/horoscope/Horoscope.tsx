import { useEffect, useRef, useState } from "react";
import PersonalInfo from "./form/PersonalInfo"
import Result from "./Result";
import horoscopeData from '../../data/horoscope.result.json'
import productsData from '../../data/products.result.json'
import Product from "./Product";

const Horoscope = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [formData, setFormData] = useState({
    name: "", year: "", month: "", day: ""
  })
  const [result, setResult] = useState({});
  const [products, setProducts] = useState({});

  useEffect(() => {
    if (Object.keys(result).length > 0 && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [result]);

  const handleOnChange = async (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    setResult(horoscopeData);

    const id = horoscopeData.id
    const temp = productsData.products.filter(product => product.horoscope_id === id)
    setProducts(temp)
  }

  const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

  return (
    <div className='p-10'>
      <h1 className='text-4xl font-bold pt-3 pb-5'>Horoscope</h1>
      <div className="pb-5">
        <p className='text-lg text-gray-500 pb-3'>{description}</p>
      </div>
      <div className="pb-10">
        <PersonalInfo
          formData={formData}
          handleOnChange={handleOnChange}
          handleFormSubmit={handleFormSubmit} />
      </div>
      {
        Object.keys(result).length > 0 &&
        <div ref={targetRef}>
          <div className='pb-10'>
            <Result result={result} />
          </div>
        </div>
      }{
        Object.keys(products).length > 0 &&
        <div>
          <div className='pb-10'>
            <Product products={products} />
          </div>
        </div>
      }
    </div>
  )
}

export default Horoscope