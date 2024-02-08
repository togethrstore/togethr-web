import React, { useState } from "react";
import { useEffect } from "react";
import InfoCircle from "../public/assets/images/form/info-circle.png";
import Image from "next/image";

const YourComponent = () => {
  const [responses, setResponses] = useState([]);
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/admin");
      const data = await response.json();
      console.log("Fetched data:", data); // Log the fetched data
      setResponses(data);
    } catch (error) {
      console.error("Error fetching responses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loggedIn) {
      fetchData();
    }
  }, [loggedIn]);

  const handleLogin = () => {
    if (password === "TogethrData2024") {
      setLoggedIn(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Wrong password. Please try again.");
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {!loggedIn && (
        <div className="w-full h-[70vh] justify-center items-center flex flex-col gap-y-4">
          <input
            type={showPassword ? "text" : "password"} // Conditionally set input type based on showPassword state
            className="border-[2.5px] border-[#625DF533] p-4 rounded-xl outline-none w-full lg:w-5/12 lg:mt-6 regular"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state on button click
            className="text-[#51636F] text-base medium"
          >
            {showPassword ? "Hide Password" : "Show Password"}
          </button>
          {errorMessage && (
            <div className="info-box w-full lg:w-5/12 flex gap-x-2 items-center medium text-[#51636F] text-xs lg:text-base p-2 lg:p-4 border-2 border-[#625DF533] rounded-tr-2xl rounded-bl-2xl rounded-br-2xl">
              <div className="w-6 inline-flex">
                <Image src={InfoCircle} alt="" />
              </div>
              <div>{errorMessage}</div>
            </div>
          )}
          <button
            className="w-full lg:w-max bold hero-button py-3 px-12 text-white text-lg"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      )}

      {loggedIn && loading && (
        <div className="w-full h-[70vh] flex flex-col gap-y-8 justify-center items-center">
          <div className="bold text-black text-lg lg:text-2xl">
            Data is loading, hold on!!
          </div>
          <div className="spinner"></div>
        </div>
      )}

      {loggedIn && !loading && (
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                      Name
                    </th>
                    <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                      Number
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Price
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Battery
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Camera
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Performance
                    </th>
                    <th className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {responses &&
                    responses.map((response) => (
                      <tr key={response.id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          {response.name}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          {response.number}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {response.price}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {response.battery}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {response.camera}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {response.performance}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default YourComponent;
