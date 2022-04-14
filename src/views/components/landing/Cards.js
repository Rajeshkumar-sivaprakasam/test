import React from "react";


function Cards({ SvgImg, title, description, backgroundImg }) {
  return (
    <div
    
      className="row d-flex align-items-center bg-04 pt-50 pb-50"
      style={{width:'95vw',height:'85vh',margin:'40px',padding:'50px',borderRadius:'20px',lineHeight:"1.8",background:`url(${backgroundImg})`,backgroundSize:'cover',backgroundPosition:'center'}}
    >
      <div className="col-md-5 col-lg-6">
        <div className="rel img-block video-preview wow fadeInRight">
          <img
            class="img-fluid"
            src={SvgImg}
            alt="fundamental-image"
          />
        </div>
      </div>
      <div className="col-md-7 col-lg-6">
        <div className="txt-block wow fadeInLeft ">
          <div className="txt-box mb-20 text-center">
            <h1 className="h3-lg pb-20 text-white">{title}</h1>
            <p style={{fontSize:'20px'}} className="p-xl text-white">
              {
                description
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
