import React from "react";

const HeroHeading2 = () => {
  return (
    <div className="w-full min-h-[50vh] flex flex-col items-center justify-start p-4 gap-4">
      <span className="border text-sm text-muted-foreground py-0.5 px-3 rounded-full font-semibold">
        Business Solutions
      </span>
      <h1 className="font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center uppercase leading-tight">
        <strong className="leading-tight">
          Empowering <span className="text-primary">Businesses</span> with
          <br />
          Seamless     <span className="bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-300 dark:to-teal-300 bg-clip-text text-transparent">
            Legal & Financial
          </span>{" "} Solutions
        </strong>
      </h1>
      <p className="text-sm sm:text-base text-center text-muted-foreground max-w-lg">
      From{" "}
        <span className="bg-gradient-to-r from-yellow-600 to-orange-600 dark:from-yellow-300 dark:to-orange-300 bg-clip-text text-transparent">
          company formation
        </span>{" "}
        to{" "}
        <span className="bg-gradient-to-r from-pink-600 to-red-600 dark:from-pink-300 dark:to-red-300 bg-clip-text text-transparent">
          taxation, compliance, and financial consulting
        </span>
        , we handle the complexities so you can{" "}
        <span className="bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-300 dark:to-blue-300 bg-clip-text text-transparent">
          focus on growth
        </span>.
        <br />
        <span className="font-semibold text-accent-foreground">
          Discover how we streamline your business journey!
        </span>
      </p>
    </div>
  );
};

export default HeroHeading2;
