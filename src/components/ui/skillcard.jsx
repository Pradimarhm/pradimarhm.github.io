import React from 'react';

const SkillCard = ({ name, imageUrl, Description, techStack }) => {
  return (
    <div className="bg-neutral-primary-soft block w-80 h-fit max-w-sm border border-default p-4 bg-brand-1000 hover:bg-brand-950 duration-500 group">
      <img className="w-full h-auto mb-1.5" src={imageUrl} alt={name} />

      <div className="flex flex-col gap-2.5">
        <h3 className="text-brand-300 text-2xl font-bold">{name}</h3>
        <p className="text-brand-100 text-lg font-normal">{Description}</p>
        <div className="flex -space-x-4 rtl:space-x-reverse group-hover:space-x-3 transition-all duration-500">
          {techStack.map((icon, i) => (
            <img 
              key={i} 
              className="w-10 h-10 shadow-md shadow-black/80 transition-transform duration-300" 
              src={icon} 
              alt={`${name}-icon-${i}`} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
