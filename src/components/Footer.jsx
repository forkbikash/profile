import React from "react";

const Footer = () => {
  return (
    <div className="container d-flex justify-content-around">
      <div>
        <div>Powered by bread</div>
        <section class="social d-flex justify-content-around">
          <a href="">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="">
            <i class="fab fa-twitter"></i>
          </a>
        </section>
      </div>
      <div>
        <div>&copy; Bread 2021 All rights reserved</div>
        <div>
          <ul className="d-flex justify-content-around footer-ul">
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
