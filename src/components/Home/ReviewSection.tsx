import React from "react";

const ReviewSection = () => {
  return (
    <section className="container mx-auto lg:mt-[112px]">
      <div className="lg:flex justify-between lg:mb-60 lg:gap-20 ">
        <h3 className="lg:text-4xl font-bold text-3xl">
          Discover the Best Products Reviewed by Experts and Users Like You
        </h3>
        <p className="lg:text-lg text-base">
          Explore our extensive collection of product reviews across various
          categories. Our platform connects you with genuine insights from real
          users and experts. Make informed decisions before your next purchase!
        </p>
      </div>
      <div className="grid-cols-3 gap-3.5"></div>
    </section>
  );
};

export default ReviewSection;
