import React from 'react'
import Navbar from './component/Navbar';
import Herosection from './component/Herosection';
import Search from './component/Search';
import Subtopic from './component/Subtopic';
import Card from './component/card';
import Subscribe from './component/subscribe';
import Footer from './component/Footer';


const Home = () => {

  const details = [
    {
    title: 'Gani v The state',
    description: 'Case 10002',
    image: './asset/cardImage.svg',
    },
    {
    title: 'Gani v The state',
    description: 'Case 10002',
    image: './asset/cardImage.svg',
    },
    {
    title: 'Gani v The state',
    description: 'Case 10002',
    image: './asset/cardImage.svg',
    },
    {
    title: 'Gani v The state',
    description: 'Case 10002',
    image: './asset/cardImage.svg',
    },
  ]

  const details1 = [
    {
      title: 'Criminal Law',
      description: 'Check out all criminal law  related cases with pictoria illustration to help you understand',
      image: './asset/cardImage.svg',
    },
    {
      title: 'Civil Law',
      description: 'Check out all civil law related cases with pictoria illustration to help you understand',
      image: './asset/cardImage.svg',
    },
    {
      title: 'Commercial Law',
      description: 'Check out all commercial law related cases with pictoria illustration to help you understand',
      image: './asset/cardImage.svg',
    },
    {
      title: 'Tax Law',
      description: 'Check out all Tax law related cases with pictoria illustration to help you understand',
      image: './asset/cardImage.svg',
    },
    {
      title: 'Oil and Gas',
      description: 'Check out all criminal law related cases with pictoria illustration to help you understand',
      image: './asset/cardImage.svg',
    },
    {
      title: 'Sport Law',
      description: 'Check out all civil law related cases with pictoria illustration to help you understand',
      image: './asset/cardImage.svg',
    },
    {
      title: 'Mineral Law',
      description: 'Check out all commercial law related cases with pictoria illustration to help you understand',
      image: './asset/cardImage.svg',
    },
    {
      title: 'Human Right',
      description: 'Check out all probono law related cases with pictoria illustration to help you understand',
      image: './asset/cardImage.svg',
    },
  ]
  
  return (
    <>
      <Navbar active={'home'} />
      <Herosection
        title="The Law is in Your Hands" 
        subtitle="Learn all law related cases with ease, including pictorial event of the cases"
        btn="Get Started"
        img1="./asset/book.svg"
        img2="./asset/balance.svg"
        img3="./asset/liberty.svg"
      />
      <Search />
      <Subtopic
        title="Checkout Top Searched Cases"
        subtitle="Checkout the four most searched cases on Lawtales with pictorial event of each case"
      />
      <Card 
        content={"withImage"}
        active="about"
        cardData={details}
      />
      <Subtopic
        title="Cases in Different Fields of Law"
        subtitle="LawTales have listed over 20 fields of law with different cases in each fields"
      />
      <Card 
        content={""}
        active="home"
        cardData={details1}
      />
      <div className='px-[8%] mt-[100px]'>
        <h1 className='text-center mb-[80px] font-bold text-4xl'>Searching For a Case on LawTales?</h1>
        <img src="./asset/find&read.svg" alt="Find and read the case you want." className='w-full object-contain' />
      </div>
      <Subscribe />
      <Footer />
    </>
  )
}

export default Home