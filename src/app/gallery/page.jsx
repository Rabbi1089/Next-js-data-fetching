import Image from "next/image";
import React from "react";

const galleryPage = () => {
  return (
    <div className=" m-5 ">
      <h1 className=" text-4xl text-blue-700 uppercase text-center font-serif">
        Welcome to photo world
      </h1>
      
      <div className=" gap-7 p-10 ">
       
        { 
            [1,2,3,4]?.map(img=>
                <Image className=" mt-7 mx-auto" key={img} src={`/images/${img}.jpg`} alt="" height={960} width={1020} />
            )
        }
      </div>
    </div>
  );
};

export default galleryPage;
