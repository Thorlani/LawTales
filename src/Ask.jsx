import React, {useState} from 'react'
import Navbar from './component/Navbar';
import Herosection from './component/Herosection';
import Subscribe from './component/subscribe';
import Footer from './component/Footer';
import { useNavigate } from 'react-router-dom';
import Subtopic from './component/Subtopic';
import Card from './component/card';

const Ask = () => {

  const navigate = useNavigate();

  const [formstage, setFormstage] = useState(1);

  const [form, setForm] = useState({
    field: '',
    question: '',
  })

  const details = [{
    title: 'Gani v The state',
    description: 'Case 10002',
    image: './asset/cardImage.svg',
  }]

  return (
    <>
      <Navbar active={'ask'} />
      <Herosection
        title="Ask Law Related Questions" 
        subtitle="Lawtales provides you with an avenue to ask questions related to law"
        btn="Get Started"
        img1="./asset/thinking.svg"
        img2="./asset/question.svg"
        img3="./asset/questionMark.svg"
      />
      {
        formstage === 1 ? (
          <>
          <h2 className='text-center mt-[90px] mb-[50px] text-[36px] font-semibold px-[8%]'>Ask a Law Related Question</h2>
          <form className='flex flex-col w-full px-[8%]'>
          <div className='flex flex-col'>
            <select name="field" className='border-[1px] border-black outline-none mb-[50px] rounded-[10px] h-[60px] indent-4'>
              <option value="">Select a Field of Law</option>
              <option value="civil">Civil Law</option>
              <option value="criminal">Criminal Law</option>
              <option value="hr">Human Right</option>
              <option value="tax">Tax Law</option>
              <option value="oil">Oil and Gas</option>
              <option value="sport">Sport Law</option>
              <option value="mineral">Mineral Law</option>
            </select>
            <textarea name="question" placeholder="Ask a Question" className='border-[1px] border-black outline-none rounded-[10px] h-[250px] indent-4 py-4 mb-[50px]' />
          </div>
          <div className='flex justify-center w-full'>
            <button type='button' onClick={() => {setFormstage(2)}} className='bg-black text-white rounded-[10px] px-7 py-3 font-bold tracking-wider'>Send</button>
          </div>
        </form>
        </>
        ) : (
          <>
            <h2 className='text-center mt-[90px] mb-[50px] text-[36px] font-semibold px-[8%]'>Question successfully submitted</h2>
            <div className='flex flex-col w-full px-[8%] justify-center items-center'>
              <img src="./asset/success.svg" alt="success" className='object-cover w-[25%]' />
              <p className='text-[20px] mt-[30px]'>You will get notified when a user answers your question</p>
              <div className='flex justify-center w-full'>
                <button type='button' onClick={() => {navigate('/answer')}} className='bg-black text-white rounded-[10px] py-3 px-7 font-bold tracking-wider mt-[30px]'>View Questions</button>
              </div>
            </div>
          </>
        )
      }
      <Subtopic 
        title="Recently Added Cases"
        subtitle=""
      />
      <Card 
        content={"withImage"}
        active="about"
        cardData={details}
      />
      <Subscribe />
      <Footer />
    </>
  )
}

export default Ask