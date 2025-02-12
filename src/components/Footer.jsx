import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#f1f6f4]">
        <div className="max-w-[1070px] mx-auto py-10 px-6 ">
          <div className="pt-8 pb-16 flex justify-between max-md:flex-col max-md:gap-8">
            <div>
              <h2 className="text-[#032b41] text-[18px] mb-4 font-semibold leading-[20px]">
                Actions
              </h2>
              <ul className="flex  flex-col gap-[12px]">
                <li className="text-[14px] text-[#394547] leading-4 cursor-not-allowed">
                  Summarist Magazine
                </li>
                <li className="text-[14px] text-[#394547] leading-4 cursor-not-allowed">
                  Cancel Subscription
                </li>
                <li className="text-[14px] text-[#394547] leading-4 cursor-not-allowed">
                  Help
                </li>
                <li className="text-[14px] text-[#394547] leading-4 cursor-not-allowed">
                  Contact us
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-[#032b41] text-[18px] mb-4 font-semibold leading-[20px]">
                Useful Links
              </h2>
              <ul className="flex  flex-col gap-[12px]">
                <li className="text-[14px] text-[#394547] leading-4 cursor-not-allowed">
                  Pricing
                </li>
                <li className="text-[14px] text-[#394547] leading-4 cursor-not-allowed">
                  Summarist Business
                </li>
                <li className="text-[14px] text-[#394547] leading-4 cursor-not-allowed">
                  Gift Cards
                </li>
                <li className="text-[14px] text-[#394547] leading-4 cursor-not-allowed">
                  Authors & Publishers
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-[#032b41] text-[18px] mb-4 font-semibold leading-[20px]">
                Company
              </h2>
              <ul className="flex  flex-col gap-[12px]">
                <li className="text-[14px] text-[#394547] leading-4 cursor-not-allowed">
                  About
                </li>
                <li className="text-[14px] text-[#394547] leading-4 cursor-not-allowed">
                  Carrers
                </li>
                <li className="text-[14px] text-[#394547] leading-4 cursor-not-allowed">
                  Partners
                </li>
                <li className="text-[14px] text-[#394547] leading-4 cursor-not-allowed">
                  Code of Conduct
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-[#032b41] text-[18px] mb-4 font-semibold leading-[20px]">
                Other
              </h2>
              <ul className="flex  flex-col gap-[12px]">
                <li className="text-[14px] text-[#394547] leading-4 cursor-not-allowed">
                  Sitemap
                </li>
                <li className="text-[14px] text-[#394547] leading-4 cursor-not-allowed">
                  Legal Notice
                </li>
                <li className="text-[14px] text-[#394547] leading-4 cursor-not-allowed">
                  Terms of Service
                </li>
                <li className="text-[14px] text-[#394547] leading-4 cursor-not-allowed">
                  Privacy Policies
                </li>
              </ul>
            </div>
          </div>
          <h2 className="text-[#032b41] text-[16px] font-medium text-center">
            Copyright &copy; 2023 Summarist
          </h2>
        </div>
      </div>
  )
}

export default Footer
