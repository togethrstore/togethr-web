import React from "react";
import Footer from "../components/Footer";
import Headerr from "../components/Headerr";

export default function CancellationPolicy() {
  return (
    <>
      <Headerr />
      <div className="flex items-center justify-center">
        <div className="w-full max-w-4xl xl:max-w-7xl flex flex-col items-start py-10 lg:py-20 px-6 lg:px-0">
          <div className="bold text-black text-xl lg:text-2xl">
            Cancellation & Refund Policy
          </div>
          <div className="text-[#51636F] text-base lg:text-lg regular py-4">
            TOGETHR EXPERIENCE STORES PVT LTD believes in helping its customers
            as far as possible, and has therefore a liberal cancellation policy.
            Under this policy:
          </div>
          <div className="flex flex-col gap-y-1">
            <li className="marker:text-[#51636F] text-[#51636F] regular text-base lg:text-lg">
              Cancellations will be considered only if the request is made
              immediately after placing the order. However, the cancellation
              request may not be entertained if the orders have been
              communicated to the vendors/merchants and they have initiated the
              process of shipping them.
            </li>
            <li className="marker:text-[#51636F] text-[#51636F] regular text-base lg:text-lg">
              TOGETHR EXPERIENCE STORES PVT LTD does not accept cancellation
              requests for perishable items like flowers, eatables etc. However,
              refund/replacement can be made if the customer establishes that
              the quality of product delivered is not good.
            </li>
            <li className="marker:text-[#51636F] text-[#51636F] regular text-base lg:text-lg">
              In case of receipt of damaged or defective items please report the
              same to our Customer Service team. The request will, however, be
              entertained once the merchant has checked and determined the same
              at his own end. This should be reported within Only same day days
              of receipt of the products. In case you feel that the product
              received is not as shown on the site or as per your expectations,
              you must bring it to the notice of our customer service within
              Only same day days of receiving the product. The Customer Service
              Team after looking into your complaint will take an appropriate
              decision.
            </li>
            <li className="marker:text-[#51636F] text-[#51636F] regular text-base lg:text-lg">
              In case of complaints regarding products that come with a warranty
              from manufacturers, please refer the issue to them. In case of any
              Refunds approved by the TOGETHR EXPERIENCE STORES PVT LTD, it’ll
              take 6-8 Days days for the refund to be processed to the end
              customer.
            </li>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
