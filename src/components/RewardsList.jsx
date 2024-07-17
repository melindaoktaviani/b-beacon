import React from 'react';
import RewardCard from './RewardCard';

const rewardsData = [
  {
    image:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/c41c72ba681fd86be916e25e1b4777b106862d3b0487f70b0b43ffc6239ca684?apiKey=ccf78d4ef6544615a01756b290b630ea&',
    title: 'Potongan 50% solaria',
    points: 400,
    validFrom: '12/05/2024',
    validTo: '12/06/2024',
  },
  {
    image:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/8efdb30c4e16c46496353270b853269b804e498a00b1c2b8da82b755c7f0fafe?apiKey=ccf78d4ef6544615a01756b290b630ea&',
    title: 'Potongan 30% pembelian shopee - max Rp15.000',
    points: 200,
    validFrom: '12/05/2024',
    validTo: '12/06/2024',
  },
  {
    image:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/e4a8d786b1e4040025d43d6070097d2cbd1a6b3405908290cd78f50d3041673d?apiKey=ccf78d4ef6544615a01756b290b630ea&',
    title: 'Potongan 10% favehotel',
    points: 250,
    validFrom: '12/05/2024',
    validTo: '12/06/2024',
  },
];

const RewardsList = () => {
  return (
    <div className="flex flex-col self-center mt-28 w-full max-w-[1298px] max-md:mt-10 max-md:max-w-full">
      {rewardsData.map((reward, index) => (
        <React.Fragment key={index}>
          <RewardCard {...reward} />
          {index < rewardsData.length - 1 && <div className="mt-16" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default RewardsList;
