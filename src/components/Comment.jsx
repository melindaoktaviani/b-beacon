/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import CommentCard from './CommentCard';

const Comment = () => {
const comments = [
{
avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/afa0af0f4c968a2d24ad17d32f6dfc5b88463437a5e5147705cdf4aff2d6a78e?apiKey=f1eae6bff4b84f6c976bb84317adcec5&",
name: "Eleanor Pena",
content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation."
},
{
avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/22640118f71d55f874c7195e4726b8b32d81cce6d52ff0dae29b39c7a2081ff6?apiKey=f1eae6bff4b84f6c976bb84317adcec5&",
name: "Cody Fisher",
content: "Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"
},
{
avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/278ada93e9d4e19005b2272bd31e77d9c4b8b728aec51b393e23ef33750c16aa?apiKey=f1eae6bff4b84f6c976bb84317adcec5&",
name: "Leslie Alexander",
content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation."
}
];

return (
<section className="mt-24 max-md:mt-10">
  <h2 className="self-center text-4xl font-semibold text-center text-black capitalize mix-blend-hard-light">
    Comment
  </h2>
  <div className="flex gap-5 justify-between self-center px-5 mt-7 w-full max-w-[1161px] max-md:flex-wrap max-md:max-w-full">
    {comments.map((comment, index) => (
      <CommentCard key={index} {...comment} />
    ))}
  </div>
</section>
);
};

export default Comment;