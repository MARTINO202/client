import {
  collection,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ListingItem from "../components/ListingItem";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import { db } from "../firebase";
import Homepage from "../components/Homepage"
import aboutImg from "../assets/aboutImg.jpeg"
import Testimonial from "../components/Testimonials/Testimonial"

export default function Home() {
  // Offers
  const [offerListings, setOfferListings] = useState(null);
  useEffect(() => {
    async function fetchListings() {

      const info = [
        { text: "Years experience", count: "17" },
        { text: "Sold Houses", count: "770" },
      ];
      try {
        // get reference
        const listingsRef = collection(db, "listings");
        // create the query
        const q = query(
          listingsRef,
          where("offer", "==", true),
          orderBy("timestamp", "desc"),
          limit(4)
        );
        // execute the query
        const querySnap = await getDocs(q);
        const listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setOfferListings(listings);
      } catch (error) {
        console.log(error);
      }
    }
    fetchListings();
  }, []);
  // Places for rent
  const [rentListings, setRentListings] = useState(null);
  useEffect(() => {
    async function fetchListings() {
      try {
        // get reference
        const listingsRef = collection(db, "listings");
        // create the query
        const q = query(
          listingsRef,
          where("type", "==", "rent"),
          orderBy("timestamp", "desc"),
          limit(4)
        );
        // execute the query
        const querySnap = await getDocs(q);
        const listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setRentListings(listings);
      } catch (error) {
        console.log(error);
      }
    }
    fetchListings();
  }, []);
  // Places for rent
  const [saleListings, setSaleListings] = useState(null);
  useEffect(() => {
    async function fetchListings() {
      try {
        // get reference
        const listingsRef = collection(db, "listings");
        // create the query
        const q = query(
          listingsRef,
          where("type", "==", "sale"),
          orderBy("timestamp", "desc"),
          limit(4)
        );
        // execute the query
        const querySnap = await getDocs(q);
        const listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setSaleListings(listings);
      } catch (error) {
        console.log(error);
      }
    }
    fetchListings();
  }, []);

  const info = [
    { text: "Years experience", count: "17" },
    { text: "Sold Houses", count: "770" },
  ];
  return (
    <div >
      <Homepage />
      {/*<Slider />*/}
      <div className="max-w-6xl mx-auto pt-4 space-y-6">
        {offerListings && offerListings.length > 0 && (
          <div className="m-2 mb-6">
            <h2 className="px-3 text-2xl mt-6 font-semibold">Recent offers</h2>
            <Link to="/offers">
              <p className="px-3 text-sm text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out">
                Show more offers
              </p>
            </Link>
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {offerListings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                />
              ))}
            </ul>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className="m-2 mb-6">
            <h2 className="px-3 text-2xl mt-6 font-semibold">Places for rent</h2>
            <Link to="/category/rent">
              <p className="px-3 text-sm text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out">
                Show more places for rent
              </p>
            </Link>
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {rentListings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                />
              ))}
            </ul>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className="m-2 mb-6">
            <h2 className="px-3 text-2xl mt-6 font-semibold">Places for sale</h2>
            <Link to="/category/sale">
              <p className="px-3 text-sm text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out">
                Show more places for sale
              </p>
            </Link>
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {saleListings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                />
              ))}
            </ul>
          </div>
        )}
      </div>

      <Testimonial />







      <section id="about" className="bg-black py-10 text-white">
    <div className="text-center mt-8">
      <h3 className=" text-4xl font-semibold">
        About <span className="text-cyan-600">Casey</span>
      </h3>
      <p className="text-gray-400 my-3 text-lg">Email: <a  onClick={() => window.location = 'mailto:Casey.milton@caseyhomes.com'}  className="cursor-pointer text-cyan-600">Casey.milton@caseyhomes.com</a></p>
      <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
        <div className="p-2">
          <div className=" text-gray-300 my-3">
            <p className={` text-justify leading-7 w-11/12 mx-auto`}>
            Casey Milto is a top-producing real estate agent in both Houston and Galveston County. Previously the broker/owner of RE/MAX City View located in Houston's Montrose neighborhood, Casey specializes in Houston’s Inner-Loop neighborhoods and Galveston County waterfront properties.

Casey owes his success in the highly competitive real estate field to his extensive background in city management and economic development. Prior to real estate, he worked in municipal government in La Marque, Texas, and the City of Pearland where he gained valuable knowledge of city codes and zoning requirements and developed his keen negotiating and people skills. This experience sparked his passion for real estate and helped him launch his real estate career in 2006. A real estate investor himself, Casey is a highly knowledgeable, dedicated, and trusted broker who puts his clients' best interests first. He works fervently through every aspect of the deal and treats all transactions equally, no matter the price range.

Casey maintains a home on the water near Galveston Island and loves cruising on his boat and taking his RV out for a weekend. He enjoys giving back to the community and has served on boards and committees for the Texas City / La Marque Chamber of Commerce, the Mainland Rotary Club, and the Mainland United Way. A proud member and float captain for Galveston’s Krewe of Gambrinus, Casey reigned as King Gambrinus for their 2022 Mardi Gras Parade and is on the Board of Directors for this prominent non-profit group. A member of the Houston Area Realtors Association, Texas Realtors Association and the National Realtors Association, Casey holds a B.A. degree from Texas State University at San Marcos.
            </p>
            {/*<button className='text-cyan-600'  onClick={()=>setIsOpen(!isOpen)}>{isOpen? 'Read less...': 'Read more...'}</button>
          */}
            <br />
            <br />{/*
            <a href="./src/assets/Code_a_program.pdf" download>
              <button className="btn-primary">Download CV</button>
              </a>*/}
          </div>
        </div>
        <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
          <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
            <img
              src={aboutImg}
              alt=""
              className="w-full object-cover bg-cyan-600 rounded-xl"
            /> <div className="flex mt-10 items-center gap-7">
              {info.map((content) => (
                <div key={content.text}>
                  <h3 className="md:text-4xl text-2xl font-semibold text-white">
                    {content.count}
                    <span className="text-cyan-600">+</span>{" "}
                  </h3>
                  <span className="md:text-base text-xs">{content.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
     
      <Footer />
    </div>
  );
}