import React from "react";

const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <>
      <footer className="text-center">
        <p>
          &copy; {currYear} SurajTechnical. All Rights Reserved | Terms and
          Conditions.
        </p>
      </footer>
    </>
  );
};

export default Footer;
