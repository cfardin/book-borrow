import FeatureBooks from '@/components/FeatureBooks';
import HeroBanner from '@/components/HeroBanner';
import MarqueeText from '@/components/MarqueeText';
import React from 'react';

const page = () => {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <MarqueeText></MarqueeText>
      <FeatureBooks></FeatureBooks>
    </div>
  );
};

export default page;