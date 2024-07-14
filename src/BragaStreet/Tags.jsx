import React from 'react';

function Tags() {
  const tags = ['Citywalk', 'street'];

  return (
    <div className="flex gap-5 items-start self-start mt-7 ml-7 text-2xl font-medium whitespace-nowrap text-neutral-700 max-md:ml-2.5">
      {tags.map((tag, index) => (
        <div key={index} className="justify-center px-5 py-2.5 rounded-3xl bg-zinc-300">
          {tag}
        </div>
      ))}
    </div>
  );
}

export default Tags;