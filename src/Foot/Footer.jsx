import React from "react";

const Footer = () => {
  return (
    <div className="footer" style={{ height: "400px", width: "100%",marginTop:"20%" }}>
      <div
        className="div1"
        style={{ display: "flex", backgroundColor: "#545871" }}
      >
        <div style={{ marginLeft: "20px" }}>
          <h3>Get Email Deals & Earn Cashback</h3>
        </div>
        <input
          type="text"
          placeholder="enter email address..."
          style={{
            borderRadius: "10px",
            height: "40px",
            marginTop: "10px",
            marginLeft: "50px",
            width: "20%",
          }}
        />
      </div>
      <hr />
      <div
        className="div2"
        style={{
          display: "flex",

          backgroundColor: "#545871",
          color: "white",
          cursor: "pointer",
        }}
      >
        <div style={{ margin: "10px" }}>About us</div>
        <div style={{ margin: "10px" }}>Help</div>
        <div style={{ margin: "10px" }}>Accessibility Statement</div>
        <div style={{ margin: "10px" }}>Countact Us</div>
        <div style={{ margin: "10px" }}>Partner With Us</div>
        <div style={{ margin: "10px" }}>Services</div>
        <div style={{ margin: "10px" }}>County/Region</div>
        <div style={{ margin: "10px" }}>Connect</div>
        <div style={{ margin: "10px" }}>Own your Own Shop Site</div>
      </div>
      <hr />

      <div
        className="div3"
        style={{
          textAlign: "start",
          marginLeft: "20px",
          cursor: "pointer",
          color: "black",
        }}
      >
        <div>
          © 1997-2022 Market America, Inc. or its affiliates. All other
          designated trademarks, copyrights, and brands are the property of
          their respective owners.
        </div>
        <div>
          Only Customers will receive cashback on qualifying purchases.
          UnFranchise Owners/Shop Consultants will receive increased IBV instead
          of cashback on qualifying purchases.
        </div>
        <div className="state1" style={{ fontSize: "20px", marginTop: "5px" }}>
          Privacy Policy | Terms of Use | Advertising Disclosure | Return Policy
          | Shipping Information
        </div>
      </div>
      <hr />
      <div
        className="div4"
        style={{ display: "flex", marginLeft: "30%", marginTop: "10px" }}
      >
        <div style={{ textAlign: "center" }}>
          <img
            style={{ height: "80px" }}
            src="https://www.shop.com/feo-cdn/7/F/BIyWLz__s.webp"
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <img
            style={{ height: "80px" }}
            src="https://www.shop.com/feo-cdn/z/b/qA5FJf0J4.webp"
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <img
            style={{ height: "80px" }}
            src="https://www.shop.com/feo-cdn/m/S/eK8gl_JjY.webp"
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <img
            style={{ height: "80px" }}
            src="https://www.shop.com/feo-cdn/0/q/U9W4qM8Kw.webp"
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <img
            style={{ height: "80px" }}
            src="https://www.shop.com/feo-cdn/o/0/XUDdhleMQ.webp"
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <img
            style={{ height: "80px" }}
            src="https://www.shop.com/feo-cdn/u/P/cg2zbaz_s.webp"
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <img
            style={{ height: "80px" }}
            src="https://seal.digicert.com/seals/cascade/?tag=mcRGO2B9&referer=www.shop.com&format=png&lang=en&seal_number=3&seal_size=m&an=min"
          />
        </div>
      </div>
      <img
        src="https://seal.digicert.com/seals/cascade/?tag=mcRGO2B9&referer=www.shop.com&format=png&lang=en&seal_number=3&seal_size=m&an=min"
        alt=""
      />
    </div>
  );
};

export default Footer;
