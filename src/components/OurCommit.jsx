import React, { lazy, Suspense } from "react";
import Loader from "../icons/Loader";

const OurCommit = () => {
  const commitmentsData = [
    {
      icon: "User2",
      title: "Patient-Centric Approach",
      description:
        "We prioritize patient well-being. Our commitment ensures a stress-free experience through skilled professionals and compassionate care.",
    },
    {
      icon: "fas fa-check-circle",
      title: "Quality Assurance",
      description:
        "Dedicated to top-quality standards. Advanced equipment, sterile procedures, and meticulous attention ensure accurate and reliable results.",
    },
    {
      icon: "fas fa-clock",
      title: "Timely and Convenient Service",
      description:
        "Urgent tests? Our promise is swift service without compromising accuracy. Online scheduling and multiple locations make it seamless.",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Ethical and Confidential Handling",
      description:
        "Privacy is vital. We follow ethical practices in handling samples. Personal and medical data are confidential, aligned with regulations.",
    },
    {
      icon: "fas fa-graduation-cap",
      title: "Continuous Training and Development",
      description:
        "Investing in staff expertise. Our commitment includes ongoing training. Phlebotomists and techs stay updated with the latest practices.",
    },
    {
      icon: "fas fa-hands-helping",
      title: "Community Engagement and Outreach",
      description:
        "Beyond tests, we serve. Organizing drives and awareness events, we give back. Healthier communities are our contribution and goal.",
    },
  ];

  const CommitmentTab = ({ icon, title, description }) => {
    const IconComponent = loadIconComponent(icon);
    return (
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="our-commit">
          <Suspense
            fallback={
              <div>
                <Loader />
              </div>
            }
          >
            {IconComponent && <IconComponent height="5rem" />}
          </Suspense>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
  };

  // Use lazy loading for dynamic import
  const loadIconComponent = (icon) => {
    const LazyComponent = lazy(() =>
      import(`../icons/${icon}`).catch(() => ({ default: () => null }))
    );

    return LazyComponent;
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <span className="line"></span>
          <span className="heading">Our Commitments</span>
          <span className="line"></span>
        </div>

        {commitmentsData.map((commitment, index) => (
          <CommitmentTab
            key={index}
            icon={commitment.icon}
            title={commitment.title}
            description={commitment.description}
          />
        ))}
      </div>
    </div>
  );
};

export default OurCommit;
