import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Styles from "../../styles/style.js";
import {Link} from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name,setName] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  return (
    <div className="min h-screen bg-[#FCF5FE] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-[#682A85]">
          Register as a new user
        </h2>
      </div>

      {/* the outer box container */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 ">
          <form className="space-y-6 ">
            

            {/* email address textfield */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-grey-700"
              >
                Full name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-grey-300 rounded-md shadow-sm placeholder-grey-400 focus:outline-none focus:ring-[#] focus:border-[#682A85] sm:text-sm"
                />
              </div>
            </div>
            {/* email address textfield */}

            {/* email address textfield */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-grey-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-grey-300 rounded-md shadow-sm placeholder-grey-400 focus:outline-none focus:ring-[#] focus:border-[#682A85] sm:text-sm"
                />
              </div>
            </div>
            {/* email address textfield */}

            {/* password text field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-grey-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-grey-300 rounded-md shadow-sm placeholder-grey-400 focus:outline-none focus:ring-[#682A85] focus:border-[#682A85] sm:text-sm"
                />

                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>
            {/* password text field */}
           

              {/*submit button */}
            <div>
              <button
                type="submit"
                className="group relative w-full h-[40px] justify-center py-2 px-4 border-transparent text-sm font-medium rounded-md text-white bg-[#682A85] hover:bg-[#983ec2] "
              >
                  Submit
              </button>
            </div>
                  {/*submit button */}

                  {/*login button */}
            <div className={`${Styles.normalFlex} w-full flex item-center`}>
                  <h4 className="text-sm">Already have an account?</h4>
                  <Link to="/login" className="text-blue-600 hover:text-blue-500 text-sm font-semibold mx-2">
                    <p className="hover:underline">
                    Sign in
                    </p>
                  </Link>
              
              </div>   
                  {/*login button */}

                  
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
