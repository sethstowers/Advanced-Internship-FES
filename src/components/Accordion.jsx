import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const Accordion = ({title, paragraph}) => {

    const [accordionOpen, setAccordionOpen] = useState(false)

  return (

      <div className="border-b-[1px] border-[#bac8ce] mb-2">
        <div className=" cursor-pointer flex items-center justify-between gap-1"
        onClick={() => setAccordionOpen(!accordionOpen)}
        >
        <h1 className="text-[#032b41] text-[24px] font-medium leading-tight py-6 max-md:text-[20px]">
          {title}
        </h1>
        <div>
        <IoIosArrowUp className={`text-[#032b41] text-[36px] max-md:text-[30px] duration-300 ${accordionOpen ? '-rotate-180' : ''}`}/>
        </div>
        </div>
        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0' }`}>
          <p className={`text-[#394547] leading-tight overflow-hidden max-md:text-[14px]`}>
          {paragraph}
          </p>
        </div>
      </div>

  );
};

export default Accordion;
