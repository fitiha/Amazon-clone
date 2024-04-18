import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        {/* the id, title, price, rating and image are passed as a props */}
        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Ken wood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>

        <footer className="footer_main">
          <div className="footer_style">
            <div>
              <h4 className="links_head">Get to Know Us</h4>
              <a href="#hi" className="links">Careers</a> <br />
              <a href="#hi" className="links">Blog</a> <br />
              <a href="#hi" className="links">About Amazon</a> <br />
              <a href="#hi" className="links">Investor Relations</a> <br />
              <a href="#hi" className="links">Amazon Devices</a> <br />
              <a href="#hi" className="links">Amazon Science</a> <br />
            </div>
            <div>
              <h4 className="links_head">Make Money with Us</h4>
              <a href="#hi" className="links">Sell products on Amazon</a> <br />
              <a href="#hi" className="links">Sell on Amazon Business</a> <br />
              <a href="#hi" className="links">Sell apps on Amazon</a> <br />
              <a href="#hi" className="links">Become an Affiliate</a> <br />
              <a href="#hi" className="links">Advertise Your Product</a> <br />
              <a href="#hi" className="links">Self-Publish with us</a> <br />
              <a href="#hi" className="links">Host an Amazon Hub</a> <br />
            </div>

            <div>
              <h4 className="links_head">Amazon Payment Products</h4>
              <a href="#hi" className="links">Amazon Business Card</a> <br />
              <a href="#hi" className="links">Shop with Points</a> <br />
              <a href="#hi" className="links">Reload Your Balance</a> <br />
              <a href="#hi" className="links">Amazon Currency Converter</a> <br />
            </div>

            <div>
              <h4 className="links_head">Let Us Help You</h4>
              <a href="#hi" className="links">Amazon and COVID-19</a> <br />
              <a href="#hi" className="links">Your Account</a> <br />
              <a href="#hi" className="links">Your Orders</a> <br />
              <a href="#hi" className="links">Shipping Rates & Policies</a> <br />
              <a href="#hi" className="links">Return & Replacements</a> <br />
              <a href="#hi" className="links">Manage Your Content and Devices</a> <br />
              <a href="#hi" className="links">Amazon Assistant</a> <br />
              <a href="#hi" className="links">Help</a> <br />
            </div>
          </div>

          <p className="name">Amazon clone, developed by  <span className="orange_name"> Natnael Fisseha</span></p>
        </footer>
      </div>
    </div>
  );
}

export default Home;