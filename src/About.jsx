import React from 'react'
import Navbar from './component/Navbar';
import Herosection from './component/Herosection';
import Subscribe from './component/subscribe';
import Footer from './component/Footer';
import Subtopic from './component/Subtopic';
import Card from './component/card';


const About = () => {

  const details = [
    {
    title: 'Stating the fact of cases',
    description: 'LawTales provide the fact of over 50000 cases over the world',
    image: './asset/cardImage.svg',
    }, 
    {
    title: 'Explaining cases with pictures',
    description: 'LawTales explains all cases with pictorial illustrations for better understanding',
    image: './asset/cardImage.svg',
    }, 
    {
    title: 'Answering legal questions',
    description: 'LawTales provides sections to answer legal questions and revise for exams',
    image: './asset/cardImage.svg',
    }, 
    {
    title: 'Giving platform to ask questions',
    description: 'LawTales provides section to ask any legal question you find confusing.',
    image: './asset/cardImage.svg',
    },
  ]


  return (
    <>
      <Navbar active={'about'} />
      <Herosection
        title="The Law is in Your Hands" 
        subtitle="Learn all law related cases with ease, including pictorial event of the cases"
        btn="Get Started"
        img1="./asset/book.svg"
        img2="./asset/balance.svg"
        img3="./asset/liberty.svg"
      />
      <Subtopic
        title="Our Core Values"
        subtitle=""
      />
      <Card 
        content={""}
        active="about"
        cardData={details}
      />
      <div className='w-full h-fit grid lg:grid-cols-2 mt-[100px] px-[8%] gap-x-[75px]'>
        <div id='grid' className='w-full'>
          <img src="./asset/shelf.svg" alt="shelf" id='one' />
          <img src="./asset/suit.svg" alt="suit" id='two' />
          <img src="./asset/illusion.svg" alt="illusion" id='three' />
        </div>
        <div className='mt-[40px] lg:mt-0 w-full flex flex-col justify-between 2xl:justify-around'>
          <div>
            <h2 className='font-semibold text-4xl tracking-wider text-center mb-2 lg:mb-4 xl:mb-8'>What We Offer</h2>
            <p className='tracking-wide text-base lg:text-sm xl:text-lg max-w-3xl text-left 2xl:text-center 2xl:max-w-full 2xl:px-[6%] 2xl:text-xl'>Law Tales offers you free case study and also pictorial events of cases to help students and Researchers understand the fact of cases and also remember the facts of each case without stress. We also offer cases from different aspect of Law.</p>
          </div>
          <div className='mt-[40px] lg:mt-0'>
            <h2 className='font-semibold text-4xl tracking-wider text-center mb-2 lg:mb-4 xl:mb-8'>Why LawTales?</h2>
            <p className='tracking-wide text-base lg:text-sm xl:text-lg max-w-3xl text-left 2xl:text-center 2xl:max-w-full 2xl:px-[6%] 2xl:text-xl'>Law Tales offers you free case study and also pictorial events of cases to help students and Researchers understand the fact of cases and also remember the facts of each case without stress. We also offer cases from different aspect of Law.</p>
          </div>
        </div>
      </div>
      <div className='mt-[100px] w-full px-[8%]'>
        <h2 className='font-semibold text-4xl tracking-wider text-center mb-4 lg:mb-4 xl:mb-8'>What Makes us Different</h2>
        <div className='flex flex-col-reverse lg:flex-row items-center gap-5 w-full text-center lg:text-left'>
          <p className='font-medium text-lg'>
          At law tales we offer you over 50000 cases. We do not only provide cases for users, but we also provide pictorial illustrations to help you understand the cases more. You know what they say “You might forget the words, but you will never forget pictures.
          LawTales also provide a question and answer section where users can ask questions they find difficult and they get answers from their fellow students who are more experienced in that field of law. student can also checkout the questions segment to help serve as revision before a law exam.
          </p>
          <img src="./asset/circle.svg" alt="circle of people" />
        </div>
      </div>
      <Subscribe />
      <Footer />
    </>
  )
}

export default About