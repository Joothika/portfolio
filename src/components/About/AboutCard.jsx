import React from "react";

const AboutCard = ({ aboutContent, addMainCSS, addSchoolCSS, degreeCSS }) => {
  return (
    <div
      className={`border flex items-center flex-col  border-shadowColor/20 bg-aboutColor shadow-md shadow-shadowColor/20 ${addMainCSS}`}
    >
      <img
        src={aboutContent?.img}
        className={`xl:w-32 xl:h-32 w-20 h-20 object-cover`}
      />
      <h1 className="text-white mt-2 mb-2 md:mt-4 text-center text-xs lg:text-sm px-6 leading-5">
        {aboutContent?.title}
      </h1>
      {aboutContent?.school ? (
        <div className="grid grid-cols-2  w-full my-4 justify-items-center ">
          <span className="cool-span-1 ">
            <h4 className={`text-grayColor text-center ${addSchoolCSS}`}>
              {aboutContent?.degree.twelth}
            </h4>
            <small
              className={`text-grayColor text-center ml-4 ${addSchoolCSS}`}
            >
              {aboutContent?.passout.twelth}
            </small>
            <p className={`text-white mt-4 ${addSchoolCSS}`}>
              PER: {aboutContent?.score.twelth}
            </p>
          </span>
          <span className="cool-span-1">
            <h4 className={`text-grayColor text-center ${addSchoolCSS}`}>
              {aboutContent?.degree.tenth}
            </h4>
            <small
              className={`text-grayColor text-center ml-4 ${addSchoolCSS}`}
            >
              {aboutContent?.passout.tenth}
            </small>
            <p className={`text-white mt-4 ${addSchoolCSS}`}>
              PER: {aboutContent?.score.tenth}
            </p>
          </span>
        </div>
      ) : (
        <>
          <h4 className={`text-grayColor ${degreeCSS}`}>
            {aboutContent?.degree}
          </h4>
          <small className="text-grayColor mt-1 lg:mt-0">
            {aboutContent?.passout}
          </small>
          <p className="text-white mt-2 md:mt-4  md:text-xs  lg:text-sm ">
            {aboutContent?.percent ? `PERCENT: ` : `CGPA: `}
            {aboutContent?.score}
          </p>
        </>
      )}
    </div>
  );
};

export { AboutCard };
