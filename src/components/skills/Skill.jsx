import React from 'react';

const Skill = ({ skill }) => {
  const totalStars = 5;

  return (
    <div className=''>
      <h3>{skill.name}</h3>

      <div className="">
        {[...Array(totalStars)].map((_, i) => (
        //   <span
        //     key={i}
        //     className={`star ${i < skill.rating ? "filled" : ""}`}
        //   >
        //     <i className="icon-star"></i>
        //   </span>
            <i className={`icon-star star ${i < skill.rating ? "filled" : ""}`} key={i}></i>
        ))}
      </div>
    </div>
  );
};

export default Skill;
