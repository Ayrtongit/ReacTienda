import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar"
export default function Home() {

  return (
    <div>
        
      <Head>
        <title>PrimerPreEntrega1Regino</title>
        <meta name="description" content="Index" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      


         <div className="transition flex justify-center duration-700 text-center">
         <Navbar></Navbar>
         </div>
      


 




            
          
        
 
    </div>
  );
}
