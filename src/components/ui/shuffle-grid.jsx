const aboutImage = "/assets/images/about/about.jpg";

export const ShuffleHero = () => {
  return (
    <div className="w-full">
      
    <section
      className="w-full bg-white   rounded lg:px-8 px-4 pb-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-7xl mx-auto">
        
      <div>
        <span className="block mb-4 text-xs md:text-sm text-primary font-medium">
          Who We Are ?
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold  bg-gradient-to-r from-primary-primary via-primary/80 to-gray-400 bg-clip-text text-transparent">
         Your Dependable Power Partner
        </h3>
        <p className="text-base lg:text-lg text-muted-foreground my-4 md:my-6">
       At SOLVOLT we are committed to providing high-quality, reliable solar electric solutions that meet the growing energy needs of the middle east market.
        <br />
        

Our products are carefully selected and tested to ensure strong performance in climate conditions including high temperatures, dust, and grid instability.
<br />
<br />

<span className="text-4xl md:text-6xl font-medium   bg-gradient-to-r from-primary-primary via-primary/80 to-gray-400 bg-clip-text text-transparent">
Our Core Values
</span>
<br />
<span className="text-lg  font-medium text-gray-700  ">
Innovation: 
</span>Continuous product development for better performance
<br />
<span className="text-lg leading-8 font-medium text-gray-700  ">
Integrity: 
</span>Honest partnerships and fair business<br />
<span className="text-lg  font-medium text-gray-700  ">
Sustainability: 
</span>A cleaner planet through renewable solutions<br />
<span className="text-lg  font-medium text-gray-700  ">
Support: 
</span>We grow when our partners grow
        </p>
        {/* <button
          className={cn(
            "border border-primary-primary text-primary-primary  hover:text-primary-foreground font-medium py-2 px-4 rounded-md",
            "transition-all hover:bg-primary-primary/50 hover:border-none active:scale-95",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}>
          Find a class
        </button> */}
      </div>
      <ShuffleGrid />
    </section>
    </div>
  );
};

const ShuffleGrid = () => {
  return (
    <div className="relative h-[560px] overflow-hidden rounded-3xl  p-3 ">
      <img
        src={aboutImage}
        alt="About Solvolt"
        className="h-full w-full  object-contain"
      />
    </div>
  );
};
