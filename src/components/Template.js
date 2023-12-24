// similar vala content in Login and signup pages 
import React from "react";
import frameImage from "../assets/frame.png"
import LoginForm from "./LoginForm";
import SignupForm from "./Signupform";
import {FcGoogle} from "react-icons/fc"
// props ke help se data ayega i.e title on pages and description 1 & 2
const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {
    return (
        <div className="flex w-11/12 justify-between max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0">
            <div className="w-11/12 max-w-[450px] mx-0">
                <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]"
                >
                    {title}
                </h1>
                <p className="text-[1.125rem] leading[1.625rem] mt-4">
                    <span className="text-richblack-100 ">{desc1}</span>
                    <br></br>
                    <span className="text-blue-100  italic">{desc2}</span>
                </p>
                {/* form type ayge which form we should render login ya sign up k aform render karna he  */}
                {formType === "signup" ?
                    (<SignupForm setIsLoggedIn={setIsLoggedIn} />) :// sign up component ko render karenge // log in component ko render karenge
                    (<LoginForm setIsLoggedIn={setIsLoggedIn} />)}
                <div className="flex w-full items-center my-4 gap-x-2">
                    {/* form ke niche k eline or OR option ke liye */}
                    <div className=" w-full h-[1px]  bg-richblack-700"></div>
                    <p className="text-richblack-700 font-medium leadin[1.375rem]">OR</p>
                    <div   className=" w-full h-[1px] bg-richblack-700" ></div>
                </div>

                <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
                border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-3 ">
                    <FcGoogle/>
                    <p>Sign Up With Google</p>
                </button>
            </div>


            {/* image jo he vo */}
            <div className="relative w-11/12 max-w-[450px]">
                <img src={frameImage}
                    alt="pattern"
                    width={558}
                    height={504}
                    loading="lazy" />

                {/* uske uper vali image  */}
                <img src={image}
                    alt="pattern"
                    width={558}
                    height={490}
                    loading="lazy"
                    className="absolute -top-4 right-4 "
                     />
            </div>

        </div>
    )
}

export default Template;