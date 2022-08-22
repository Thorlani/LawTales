import React from 'react'
import Navbar from './component/Navbar';
import Herosection from './component/Herosection';
import Subscribe from './component/subscribe';
import Footer from './component/Footer';
import Subtopic from './component/Subtopic';
import Card from './component/card';

const Answer = () => {

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
      <Navbar active={'answer'} />
      <Herosection
        title="Answer Over 50 Questions in Civil Law" 
        subtitle="Lawtales provides you with an avenue to ask questions related to law"
        btn="See Questions"
        img1="./asset/hand.svg"
        img2="./asset/hands.svg"
        img3="./asset/bulb.svg"
      />
      <Subtopic
        title="Select Field of Law"
        description="Select a field of law to get over 100 questions under the chosen field of law"
      />
      <Card 
        content={""}
        active="home"
        cardData={details}
      />
      <Subscribe />
      <Footer />
    </>
  )
}

export default Answer