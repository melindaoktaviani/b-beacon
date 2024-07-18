import React from 'react';
import StatItem from './StatItem';

function Statistics() {
  const stats = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/aafbb1880fae92dfdbce78d83289afef0b7f17c053617e858649a9009e85ba0e?apiKey=91db6128330e4119a856cf6144075cfe&", text: "75% tingkat keramaian", bgColor: "bg-rose-200" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f321eeb537c6cdab87222b670ac0a4779192719415161bf3c8ce9442a37dede2?apiKey=91db6128330e4119a856cf6144075cfe&", text: "723 liked", bgColor: "bg-green-200", iconClass: "border-4 border-black border-solid aspect-[1.08] stroke-[4px] stroke-black w-[29px]" }
  ];

  return (
    <div className="flex gap-5 justify-between mt-28 w-full max-w-[952px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      {stats.map((stat, index) => (
        <StatItem key={index} {...stat} />
      ))}
    </div>
  );
}

export default Statistics;