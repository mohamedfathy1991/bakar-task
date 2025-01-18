import axios from "axios";
import React, { useEffect, useState } from "react";
import VisaLogo from "./VisaLogo";

export default function Visa() {
  const [data, setdata] = useState();
  const [loading, setloading] = useState(true);
  const [isVisible, setisVisible] = useState(false);
  const url = "https://www.bakarcompany.somee.com/api/IssueCard/get-card-data";

  useEffect(() => {
    axios
      .get(url)
      .then((data) => {
        console.log(data.data);
        setdata(data.data);
        setloading(false);
      })
      .catch((err) => {
        setloading(false);

        console.log("err");
      });
  }, []);

  return (
    <>
    {loading?<div className=" h-screen flex  justify-center items-center text-xl">Loading ....</div>:""}
     
      {data ? (
        <div className="  sm:mx-14 m-auto  pt-8">
          <div className="">
            <div className=" my-5 flex gap-2 items-center border  ps-4 border-black ">
              <svg
                class="w-14 h-14 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M17.4 12.6h1l-.3-1.4v-.4l-.2.4-.5 1.4Z" />
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M2 6.3c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-12Zm12.5 3.2c.4 0 .8 0 1.1.2l-.1 1h-.1a2 2 0 0 0-1-.3c-.5 0-.7.3-.7.5s.2.3.7.5c.7.4 1 .8 1 1.3 0 1-.8 1.7-2.2 1.7-.6 0-1.1-.2-1.4-.3l.2-1h.1c.4.2.7.3 1.2.3.4 0 .8-.2.8-.5 0-.2-.2-.3-.7-.6-.5-.2-1.1-.6-1.1-1.3 0-.9 1-1.5 2.2-1.5Zm3.5 0h1l1 4.8h-1.2l-.2-.7H17l-.3.7h-1.3l1.9-4.4c.1-.3.3-.3.7-.3Zm-6.2 0h-1.3l-.8 4.8H11l.8-4.8Zm-4.5 3.3-.1-.7-.5-2.2c0-.3-.3-.3-.6-.4h-2v.1l1.2.5.1.2 1.1 4H8l2-4.7H8.7l-1.3 3.2Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="text-2xl">{data?.cardholderName}</span>
            </div>

            <div className="   mt-[50px]   md:px-8 border text-xl  border-black">
              <VisaLogo />

              <div className=" md:text-xl py-5 ">
                {" "}
                •••• •••• •••• {data.last4}{" "}
              </div>
              <div className="   flex justify-between py-3">
                <div>
                  <p>card holder</p>
                  <p>{data.cardholderName}</p>
                </div>
                <div>
                  <p>Expire Date</p>
                  <p>
                    {data.expiryMonth}/{data.expiryYear}
                  </p>
                </div>
                <div>
                  <p
                    onClick={() => setisVisible(!isVisible)}
                    className=" cursor-pointer"
                  >
                    CVC
                  </p>
                  <p> {isVisible ? data.cvc : "•••"}</p>
                </div>
              </div >
              
            </div>

            {/* table details */}
            <div className="mt-5 px-1">
            <div class=" my-1  grid  grid-cols-2  ">
                <div class="    ">Card Number</div>
                <div class="   ">•••• •••• •••• {data.last4}</div>
              </div>
              <div class=" my-1 grid  grid-cols-2  ">
                <div class="   ">CVC</div>
                <div class="     ">{isVisible ? data.cvc : "•••"}</div>
              </div>
              <div class="  my-1 grid  grid-cols-2  ">
                <div class="    ">Expitation</div>
                <p>
                  {data.expiryMonth}/{data.expiryYear}
                </p>
              </div>
              <div class=" my-1 grid  grid-cols-2  ">
                <div class="    ">Status</div>
                <div class="    ">
                  <span className=" p-1 border border-black">Active</span>
                </div>
              </div>
              <div class=" my-1 grid  grid-cols-2  ">
                <div class="    ">Card holder</div>
                <div class="    ">{data.cardholderName}</div>
              </div>
              <div class=" my-1 grid  grid-cols-2  ">
                <div class="    ">Card type</div>
                <div class="     ">
                  <span className=" ">Virtual</span>
                </div>
              </div>
              <div class="my-1  grid  grid-cols-2  ">
                <div class="    ">Created At</div>
                <div class="     ">
                  {" "}
                  {new Date(Date.now()).toLocaleString()}
                </div>
              </div>
              <div class=" my-1 grid  grid-cols-2  ">
                <div class="     ">Blling address</div>
                <div class="     ">
                  {" "}
                  <p> 123 Main street</p>
                  <p>San Francisco,CA,9411,US</p>
                </div>
              </div>
              
            </div>

       {/* footer part  */}
            <footer className="my-[50px] text-lg">
              <div className="custom-card">
                Freeze card
              </div>
              <div className="custom-card">
                Replace card
              </div>
              <div className=" custom-card ">
                Cancle card
              </div>
            </footer>
          </div>
        </div>
      ) : (
       <div className="h-screen flex justify-center items-center text-2xl">no data err in connection</div>
      )}
    </>
  );
}
