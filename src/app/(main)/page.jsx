import Category from '@/components/Category';
import FeatureBooks from '@/components/FeatureBooks';
import Footer from '@/components/Footer';
import HeroBanner from '@/components/HeroBanner';
import MarqueeText from '@/components/MarqueeText';
import Readers from '@/components/Readers';
import React from 'react';

const page = () => {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <MarqueeText></MarqueeText>
      <FeatureBooks></FeatureBooks>
      <Category></Category>
      <Readers></Readers>
    </div>
  );
};

export default page;