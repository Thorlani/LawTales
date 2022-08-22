import React from 'react'
import Navbar from './component/Navbar';
import Herosection from './component/Herosection';
import Search from './component/Search';
import Subscribe from './component/subscribe';
import Footer from './component/Footer';
import Subtopic from './component/Subtopic';
import Card from './component/card';

const Field = () => {

  const details = [
    {
    title: 'Criminal Law',
    description: 'Check out all criminal law related cases with pictoria illustration to help you understand',
    image: './asset/cardImage.svg',
    }, 
    {
    title: 'Civil Law',
    description: 'Check out all civil law related cases with pictoria illustration to help you understand',
    image: './asset/cardImage.svg',
    }, 
    {
    title: 'Commercial Law',
    description: 'Check out all civil law related cases with pictoria illustration to help you understand',
    image: './asset/cardImage.svg',
    }, 
    {
    title: 'Tax Law',
    description: 'Check out all civil law related cases with pictoria illustration to help you understand',
    image: './asset/cardImage.svg',
    },
    {
    title: 'Oil and Gas',
    description: 'Check out all civil law related cases with pictoria illustration to help you understand',
    image: './asset/cardImage.svg',
    },
    {
    title: 'Sport Law',
    description: 'Check out all civil law related cases with pictoria illustration to help you understand',
    image: './asset/cardImage.svg',
    },
    {
    title: 'Mineral Law',
    description: 'Check out all civil law related cases with pictoria illustration to help you understand',
    image: './asset/cardImage.svg',
    },
    {
    title: 'Human Right',
    description: 'Check out all civil law related cases with pictoria illustration to help you understand',
    image: './asset/cardImage.svg',
    },
  ]


  return (
    <>
      <Navbar active={'field'} />
      <Herosection
        title="See Cases Across All Fields of Law" 
        subtitle="Find law cases in this page based on the categories of law"
        btn="See Cases"
        img1="./asset/humanRights.svg"
        img2="./asset/criminalLaw.svg"
        img3="./asset/corporateLaw.svg"
      />
      <Search />
      <Subtopic
        title="Fields of Law"
        subtitle="Choose from over 20 Fields of law to see the cases in each field"
      />
      <Card
        content={""}
        active="field"
        cardData={details}
      />
      <h2 className='text-center mt-[90px] mb-[50px] text-[36px] font-semibold px-[8%]'>About The Fields of Law</h2>
      <div className='w-full h-fit grid lg:grid-cols-2 mt-[30px] px-[8%] gap-x-[75px]'>
        <div id='grid' className='w-full'>
          <img src="./asset/criminalLaw.svg" alt="shelf" id='one' />
          <img src="./asset/humanRights.svg" alt="suit" id='two' />
          <img src="./asset/corporateLaw.svg" alt="illusion" id='three' />
        </div>
        <div className='mt-[80px] lg:mt-0 w-full flex flex-col justify-between 2xl:justify-around'>
          <div>
            <p className='tracking-wide text-base leading-[1.9rem] lg:text-sm lg:leading-[3rem] xl:text-lg xl:leading-[5rem] 2xl:leading-[9rem] max-w-3xl text-left 2xl:text-center 2xl:max-w-full 2xl:px-[6%] 2xl:text-[2rem]'>There are several fields of Law you will come across during your legal studies. On LawTales we have listed 20 fields of law with over 100 cases in each field of Law. LawTales have provided a comprehensive details of each cases under this field. It suffices to add however that there are number of smaller fields of Law. this is simply meant to be a general overview of the most common fields of Law.</p>
          </div>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </>
  )
}

export default Field