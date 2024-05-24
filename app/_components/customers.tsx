import Image from "next/image";
import React from "react";
import adobe from "../../public/assets/adobe.svg";
import britishCouncil from "../../public/assets/british-council.svg";
import linkedin from "../../public/assets/linkedin.svg";
import microsoft from "../../public/assets/microsoft.svg";
import nationalGeographic from "../../public/assets/national-geographic.svg";

const Customers = () => {
  return (
    <div className="hidden sm:flex sm:items-center sm:pt-4">
      {[adobe, britishCouncil, linkedin, microsoft, nationalGeographic].map(
        (logo, index) => {
          return <Image key={index} className="h-32" src={logo} alt="" />;
        }
      )}
    </div>
  );
};

export default Customers;
