import React, { Suspense } from "react";
import Loader from "../icons/Loader";
import patientIcon from "../assets/images/icons/patient.png";
import Checked from "../assets/images/icons/checked.png";
import WallClock from "../assets/images/icons/wall-clock.png";
import Shield from "../assets/images/icons/shield.png";
import Mortarboard from "../assets/images/icons/mortarboard.png";
import Care from "../assets/images/icons/care.png";

const iconMap = {
  "patient.png": patientIcon,
  "checked.png": Checked,
  "wall-clock.png": WallClock,
  "shield.png": Shield,
  "mortarboard.png": Mortarboard,
  "care.png": Care,
};

const OurCommit = () => {
  const commitmentsData = [
    {
      icon: "patient.png",
      title: "Patient-Centric Approach",
      description:
        "We prioritize patient well-being. Our commitment ensures a stress-free experience through skilled professionals and compassionate care.",
    },
    {
      icon: "checked.png",
      title: "Quality Assurance",
      description:
        "Dedicated to top-quality standards. Advanced equipment, sterile procedures, and meticulous attention ensure accurate and reliable results.",
    },
    {
      icon: "wall-clock.png",
      title: "Timely and Convenient Service",
      description:
        "Urgent tests? Our promise is swift service without compromising accuracy. Online scheduling and multiple locations make it seamless.",
    },
    {
      icon: "shield.png",
      title: "Ethical and Confidential Handling",
      description:
        "Privacy is vital. We follow ethical practices in handling samples. Personal and medical data are confidential, aligned with regulations.",
    },
    {
      icon: "mortarboard.png",
      title: "Continuous Training and Development",
      description:
        "Investing in staff expertise. Our commitment includes ongoing training. Phlebotomists and techs stay updated with the latest practices.",
    },
    {
      icon: "care.png",
      title: "Community Engagement and Outreach",
      description:
        "Beyond tests, we serve. Organizing drives and awareness events, we give back. Healthier communities are our contribution and goal.",
    },
  ];

  const CommitmentTab = ({ icon, title, description }) => {
    const iconImagePath = iconMap[icon];

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
            <img src={iconImagePath} alt={title} />
          </Suspense>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
  };

  // Use lazy loading for dynamic import
  // const loadIconComponent = (icon) => {
  //   const LazyComponent = lazy(() => import(`../assets/images/icons/${icon}`));

  //   return LazyComponent;
  // };

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
