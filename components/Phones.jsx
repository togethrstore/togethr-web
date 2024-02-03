const phones = [
  {
    Name: "Motorola g54 5G",
    Price: 13999.0,
    Batteryscore: 86.0,
    Displayscore: 75.0,
    Secondparameter: 80.5,
    Thirdparameter: 63.0,
    Fourthparameter: 38.0,
  },
  {
    Name: "Redmi 12 5G",
    Price: 13499.0,
    Batteryscore: 85.0,
    Displayscore: 70.0,
    Secondparameter: 77.5,
    Thirdparameter: 54.0,
    Fourthparameter: 37.0,
  },
  {
    Name: "Xiaomi Redmi 13C 5G",
    Price: 12499.0,
    Batteryscore: 78.0,
    Displayscore: 62.0,
    Secondparameter: 70.0,
    Thirdparameter: 56.0,
    Fourthparameter: 33.0,
  },
  {
    Name: "realme C67 5G",
    Price: 14499.0,
    Batteryscore: 86.0,
    Displayscore: 81.0,
    Secondparameter: 83.5,
    Thirdparameter: 58.0,
    Fourthparameter: 32.0,
  },
  {
    Name: "POCO M6 5G",
    Price: 10999.0,
    Batteryscore: 78.0,
    Displayscore: 62.0,
    Secondparameter: 70.0,
    Thirdparameter: 56.0,
    Fourthparameter: 33.0,
  },
  {
    Name: "realme C53",
    Price: 10999.0,
    Batteryscore: 79.0,
    Displayscore: 69.0,
    Secondparameter: 74.0,
    Thirdparameter: 57.0,
    Fourthparameter: 24.0,
  },
  {
    Name: "Xiaomi Redmi 13C",
    Price: 8999.0,
    Batteryscore: 73.0,
    Displayscore: 59.0,
    Secondparameter: 66.0,
    Thirdparameter: 62.0,
    Fourthparameter: 21.0,
  },
  {
    Name: "OPPO Reno8 T 5G",
    Price: 12765.0,
    Batteryscore: 86.0,
    Displayscore: 73.0,
    Secondparameter: 79.5,
    Thirdparameter: 58.0,
    Fourthparameter: 37.0,
  },
  {
    Name: null,
    Price: null,
    Batteryscore: null,
    Displayscore: null,
    Secondparameter: null,
    Thirdparameter: null,
    Fourthparameter: null,
  },
  {
    Name: null,
    Price: null,
    Batteryscore: null,
    Displayscore: null,
    Secondparameter: null,
    Thirdparameter: null,
    Fourthparameter: null,
  },
  {
    Name: "POCO X5",
    Price: 12999.0,
    Batteryscore: 70.0,
    Displayscore: 79.0,
    Secondparameter: 74.5,
    Thirdparameter: 61.0,
    Fourthparameter: 37.0,
  },
  {
    Name: null,
    Price: null,
    Batteryscore: null,
    Displayscore: null,
    Secondparameter: null,
    Thirdparameter: null,
    Fourthparameter: null,
  },
  {
    Name: "Samsung Galaxy A14 5G",
    Price: 16999.0,
    Batteryscore: 78.0,
    Displayscore: 64.0,
    Secondparameter: 71.0,
    Thirdparameter: 58.0,
    Fourthparameter: 34.0,
  },
  {
    Name: "POCO M6 Pro 5G",
    Price: 11999.0,
    Batteryscore: 85.0,
    Displayscore: 70.0,
    Secondparameter: 77.5,
    Thirdparameter: 54.0,
    Fourthparameter: 37.0,
  },
  {
    Name: "Samsung galaxy m14 5G",
    Price: 11499.0,
    Batteryscore: 83.0,
    Displayscore: 69.0,
    Secondparameter: 76.0,
    Thirdparameter: 59.0,
    Fourthparameter: 36.0,
  },
  {
    Name: "Xiaomi Redmi Note 13",
    Price: 17940.0,
    Batteryscore: 86.0,
    Displayscore: 88.0,
    Secondparameter: 87.0,
    Thirdparameter: 66.0,
    Fourthparameter: 36.0,
  },
  {
    Name: null,
    Price: null,
    Batteryscore: null,
    Displayscore: null,
    Secondparameter: null,
    Thirdparameter: null,
    Fourthparameter: null,
  },
  {
    Name: "realme 11 pro 5g",
    Price: 23999.0,
    Batteryscore: 77.0,
    Displayscore: 84.0,
    Secondparameter: 80.5,
    Thirdparameter: 69.0,
    Fourthparameter: 42.0,
  },
  {
    Name: "Poco x5 Pro 5g",
    Price: 25999.0,
    Batteryscore: 74.0,
    Displayscore: 85.0,
    Secondparameter: 79.5,
    Thirdparameter: 72.0,
    Fourthparameter: 46.0,
  },
  {
    Name: "POCO F4 5G 8GB RAM\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t",
    Price: 29999.0,
    Batteryscore: 65.0,
    Displayscore: 83.0,
    Secondparameter: 74.0,
    Thirdparameter: 77.0,
    Fourthparameter: 56.0,
  },
  {
    Name: "Samsung Galaxy A34 8GB RAM",
    Price: 27499.0,
    Batteryscore: 83.0,
    Displayscore: 83.0,
    Secondparameter: 83.0,
    Thirdparameter: 67.0,
    Fourthparameter: 43.0,
  },
  {
    Name: "realme GT Neo 3 5G",
    Price: 25999.0,
    Batteryscore: 79.0,
    Displayscore: 81.0,
    Secondparameter: 80.0,
    Thirdparameter: 72.0,
    Fourthparameter: 56.0,
  },
  {
    Name: "vivo V27",
    Price: 32999.0,
    Batteryscore: 80.0,
    Displayscore: 86.0,
    Secondparameter: 83.0,
    Thirdparameter: 74.0,
    Fourthparameter: 50.0,
  },
  {
    Name: "POCO X6 5G",
    Price: 21999.0,
    Batteryscore: 69.0,
    Displayscore: 92.0,
    Secondparameter: 80.5,
    Thirdparameter: 66.0,
    Fourthparameter: 45.0,
  },
  {
    Name: "Motorola Edge 40 Neo",
    Price: 24999.0,
    Batteryscore: 76.0,
    Displayscore: 89.0,
    Secondparameter: 82.5,
    Thirdparameter: 72.0,
    Fourthparameter: 42.0,
  },
  {
    Name: "Infinix Zero 30 5G",
    Price: 21999.0,
    Batteryscore: 67.0,
    Displayscore: 81.0,
    Secondparameter: 74.0,
    Thirdparameter: 77.0,
    Fourthparameter: 51.0,
  },
  {
    Name: "realme 11 5G",
    Price: 19999.0,
    Batteryscore: 84.0,
    Displayscore: 74.0,
    Secondparameter: 79.0,
    Thirdparameter: 54.0,
    Fourthparameter: 34.0,
  },
  {
    Name: null,
    Price: null,
    Batteryscore: null,
    Displayscore: null,
    Secondparameter: null,
    Thirdparameter: null,
    Fourthparameter: null,
  },
  {
    Name: "Xiaomi Redmi Note 12 Pro 5G",
    Price: 23999.0,
    Batteryscore: 74.0,
    Displayscore: 83.0,
    Secondparameter: 78.5,
    Thirdparameter: 72.0,
    Fourthparameter: 41.0,
  },
  {
    Name: null,
    Price: null,
    Batteryscore: null,
    Displayscore: null,
    Secondparameter: null,
    Thirdparameter: null,
    Fourthparameter: null,
  },
  {
    Name: "iQOO Neo 7",
    Price: 24999.0,
    Batteryscore: 96.0,
    Displayscore: 85.0,
    Secondparameter: 90.5,
    Thirdparameter: 70.0,
    Fourthparameter: 63.0,
  },
  {
    Name: "Samsung Galaxy A15 5G",
    Price: 19499.0,
    Batteryscore: 82.0,
    Displayscore: 76.0,
    Secondparameter: 79.0,
    Thirdparameter: 57.0,
    Fourthparameter: 36.0,
  },
  {
    Name: null,
    Price: null,
    Batteryscore: null,
    Displayscore: null,
    Secondparameter: null,
    Thirdparameter: null,
    Fourthparameter: null,
  },
  {
    Name: "Redmi note 12 5g",
    Price: 16999.0,
    Batteryscore: 70.0,
    Displayscore: 78.0,
    Secondparameter: 74.0,
    Thirdparameter: 60.0,
    Fourthparameter: 35.0,
  },
  {
    Name: "OnePlus Nord CE 3 lite 5G",
    Price: 19999.0,
    Batteryscore: 90.0,
    Displayscore: 75.0,
    Secondparameter: 82.5,
    Thirdparameter: 62.0,
    Fourthparameter: 40.0,
  },
  {
    Name: null,
    Price: null,
    Batteryscore: null,
    Displayscore: null,
    Secondparameter: null,
    Thirdparameter: null,
    Fourthparameter: null,
  },
  {
    Name: "Samsung Galaxy M34",
    Price: 17499.0,
    Batteryscore: 88.0,
    Displayscore: 83.0,
    Secondparameter: 85.5,
    Thirdparameter: 65.0,
    Fourthparameter: 39.0,
  },
  {
    Name: null,
    Price: null,
    Batteryscore: null,
    Displayscore: null,
    Secondparameter: null,
    Thirdparameter: null,
    Fourthparameter: null,
  },
  {
    Name: "Xiaomi Redmi Note 13 Pro Plus",
    Price: 31999.0,
    Batteryscore: 96.0,
    Displayscore: 92.0,
    Secondparameter: 94.0,
    Thirdparameter: 68.0,
    Fourthparameter: 52.0,
  },
  {
    Name: "Xiaomi Redmi Note 13 Pro",
    Price: 25999.0,
    Batteryscore: 97.0,
    Displayscore: 92.0,
    Secondparameter: 94.5,
    Thirdparameter: 68.0,
    Fourthparameter: 46.0,
  },
  {
    Name: "POCO X6 Pro",
    Price: 26999.0,
    Batteryscore: 73.0,
    Displayscore: 92.0,
    Secondparameter: 82.5,
    Thirdparameter: 74.0,
    Fourthparameter: 82.0,
  },
  {
    Name: "Samsung Galaxy S21 FE",
    Price: 31999.0,
    Batteryscore: 60.0,
    Displayscore: 80.0,
    Secondparameter: 70.0,
    Thirdparameter: 74.0,
    Fourthparameter: 56.0,
  },
  {
    Name: "Google Pixel 6A",
    Price: 43999.0,
    Batteryscore: 69.0,
    Displayscore: 68.0,
    Secondparameter: 68.5,
    Thirdparameter: 71.0,
    Fourthparameter: 63.0,
  },
  {
    Name: "Nothing Phone 1",
    Price: 29999.0,
    Batteryscore: 74.0,
    Displayscore: 80.0,
    Secondparameter: 77.0,
    Thirdparameter: 70.0,
    Fourthparameter: 47.0,
  },
  {
    Name: "Motorola Edge 40",
    Price: 26999.0,
    Batteryscore: 74.0,
    Displayscore: 87.0,
    Secondparameter: 80.5,
    Thirdparameter: 74.0,
    Fourthparameter: 57.0,
  },
  {
    Name: "realme GT 2 Pro 5G",
    Price: 29999.0,
    Batteryscore: 81.0,
    Displayscore: 87.0,
    Secondparameter: 84.0,
    Thirdparameter: 72.0,
    Fourthparameter: 68.0,
  },
  {
    Name: "realme 11 Pro Plus",
    Price: 27999.0,
    Batteryscore: 80.0,
    Displayscore: 84.0,
    Secondparameter: 82.0,
    Thirdparameter: 77.0,
    Fourthparameter: 45.0,
  },
  {
    Name: "POCO F5 256GB",
    Price: 29999.0,
    Batteryscore: 78.0,
    Displayscore: 86.0,
    Secondparameter: 82.0,
    Thirdparameter: 70.0,
    Fourthparameter: 72.0,
  },
  {
    Name: "Samsung Galaxy A25 5G",
    Price: 26999.0,
    Batteryscore: 85.0,
    Displayscore: 85.0,
    Secondparameter: 85.0,
    Thirdparameter: 64.0,
    Fourthparameter: 39.0,
  },
  {
    Name: "OnePlus Nord 3 5G",
    Price: 29999.0,
    Batteryscore: 79.0,
    Displayscore: 91.0,
    Secondparameter: 85.0,
    Thirdparameter: 75.0,
    Fourthparameter: 60.0,
  },
  {
    Name: null,
    Price: null,
    Batteryscore: null,
    Displayscore: null,
    Secondparameter: null,
    Thirdparameter: null,
    Fourthparameter: null,
  },
  {
    Name: "vivo V29",
    Price: 32999.0,
    Batteryscore: 71.0,
    Displayscore: 91.0,
    Secondparameter: 81.0,
    Thirdparameter: 70.0,
    Fourthparameter: 46.0,
  },
  {
    Name: "OPPO Reno10 5G",
    Price: 32999.0,
    Batteryscore: 73.0,
    Displayscore: 84.0,
    Secondparameter: 78.5,
    Thirdparameter: 74.0,
    Fourthparameter: 45.0,
  },
  {
    Name: "OnePlus 10R 5G",
    Price: 34999.0,
    Batteryscore: 92.0,
    Displayscore: 83.0,
    Secondparameter: 87.5,
    Thirdparameter: 68.0,
    Fourthparameter: 57.0,
  },
  {
    Name: "vivo V27 Pro 256GB",
    Price: 39990.0,
    Batteryscore: 78.0,
    Displayscore: 81.0,
    Secondparameter: 79.5,
    Thirdparameter: 75.0,
    Fourthparameter: 63.0,
  },
  {
    Name: "iQOO Neo 7 Pro",
    Price: 30999.0,
    Batteryscore: 96.0,
    Displayscore: 87.0,
    Secondparameter: 91.5,
    Thirdparameter: 78.0,
    Fourthparameter: 75.0,
  },
  {
    Name: "OnePlus 11R 5G",
    Price: 39999.0,
    Batteryscore: 96.0,
    Displayscore: 90.0,
    Secondparameter: 93.0,
    Thirdparameter: 73.0,
    Fourthparameter: 77.0,
  },
  {
    Name: "Nothing Phone (2)",
    Price: 39999.0,
    Batteryscore: 81.0,
    Displayscore: 86.0,
    Secondparameter: 83.5,
    Thirdparameter: 72.0,
    Fourthparameter: 76.0,
  },
  {
    Name: "OPPO Reno11 Pro",
    Price: 39999.0,
    Batteryscore: 92.0,
    Displayscore: 87.0,
    Secondparameter: 89.5,
    Thirdparameter: 76.0,
    Fourthparameter: 64.0,
  },
  {
    Name: "Samsung Galaxy S22",
    Price: 39999.0,
    Batteryscore: 77.0,
    Displayscore: 82.0,
    Secondparameter: 79.5,
    Thirdparameter: 79.0,
    Fourthparameter: 70.0,
  },
  {
    Name: "vivo V29 Pro",
    Price: 39999.0,
    Batteryscore: 72.0,
    Displayscore: 91.0,
    Secondparameter: 81.5,
    Thirdparameter: 76.0,
    Fourthparameter: 59.0,
  },
  {
    Name: "Google Pixel 7a",
    Price: 39999.0,
    Batteryscore: 65.0,
    Displayscore: 81.0,
    Secondparameter: 73.0,
    Thirdparameter: 78.0,
    Fourthparameter: 62.0,
  },
  {
    Name: "Google Pixel 7",
    Price: 46999.0,
    Batteryscore: 64.0,
    Displayscore: 77.0,
    Secondparameter: 70.5,
    Thirdparameter: 78.0,
    Fourthparameter: 62.0,
  },
  {
    Name: "Oppo Reno 10 Pro",
    Price: 37999.0,
    Batteryscore: 71.0,
    Displayscore: 84.0,
    Secondparameter: 77.5,
    Thirdparameter: 78.0,
    Fourthparameter: 46.0,
  },
  {
    Name: "Samsung Galaxy A54 5G",
    Price: 35499.0,
    Batteryscore: 76.0,
    Displayscore: 86.0,
    Secondparameter: 81.0,
    Thirdparameter: 71.0,
    Fourthparameter: 47.0,
  },
  {
    Name: "Samsung Galaxy Z Flip 3",
    Price: 44999.0,
    Batteryscore: 49.0,
    Displayscore: 81.0,
    Secondparameter: 65.0,
    Thirdparameter: 72.0,
    Fourthparameter: 61.0,
  },
  {
    Name: "Motorola Razr 40",
    Price: 44999.0,
    Batteryscore: 66.0,
    Displayscore: 88.0,
    Secondparameter: 77.0,
    Thirdparameter: 72.0,
    Fourthparameter: 48.0,
  },
  {
    Name: "Samsung Galaxy S24 Ultra",
    Price: 129999.0,
    Batteryscore: 96.0,
    Displayscore: 97.0,
    Secondparameter: 96.5,
    Thirdparameter: 86.0,
    Fourthparameter: 99.0,
  },
  {
    Name: "vivo X100 Pro 5G",
    Price: 89999.0,
    Batteryscore: 79.0,
    Displayscore: 94.0,
    Secondparameter: 86.5,
    Thirdparameter: 92.0,
    Fourthparameter: 98.0,
  },
  {
    Name: "iQOO 12 5G",
    Price: 52999.0,
    Batteryscore: 80.0,
    Displayscore: 94.0,
    Secondparameter: 87.0,
    Thirdparameter: 84.0,
    Fourthparameter: 97.0,
  },
  {
    Name: "vivo X100",
    Price: 63999.0,
    Batteryscore: 96.0,
    Displayscore: 93.0,
    Secondparameter: 94.5,
    Thirdparameter: 89.0,
    Fourthparameter: 98.0,
  },
  {
    Name: "Samsung Galaxy S23 Ultra 5G",
    Price: 124999.0,
    Batteryscore: 87.0,
    Displayscore: 93.0,
    Secondparameter: 90.0,
    Thirdparameter: 90.0,
    Fourthparameter: 91.0,
  },
  {
    Name: "Samsung Galaxy S23 5G",
    Price: 69999.0,
    Batteryscore: 73.0,
    Displayscore: 89.0,
    Secondparameter: 81.0,
    Thirdparameter: 83.0,
    Fourthparameter: 86.0,
  },
  {
    Name: "Apple iPhone 15 Pro Max",
    Price: 156900.0,
    Batteryscore: 93.0,
    Displayscore: 93.0,
    Secondparameter: 93.0,
    Thirdparameter: 91.0,
    Fourthparameter: 98.0,
  },
  {
    Name: "OnePlus 11",
    Price: 56999.0,
    Batteryscore: 77.0,
    Displayscore: 90.0,
    Secondparameter: 83.5,
    Thirdparameter: 79.0,
    Fourthparameter: 87.0,
  },
  {
    Name: "Apple iPhone 15",
    Price: 84900.0,
    Batteryscore: 78.0,
    Displayscore: 78.0,
    Secondparameter: 78.0,
    Thirdparameter: 82.0,
    Fourthparameter: 94.0,
  },
  {
    Name: "Apple iPhone 14 Pro",
    Price: 119900.0,
    Batteryscore: 74.0,
    Displayscore: 89.0,
    Secondparameter: 81.5,
    Thirdparameter: 87.0,
    Fourthparameter: 94.0,
  },
  {
    Name: "Samsung Galaxy S23 FE",
    Price: 54999.0,
    Batteryscore: 58.0,
    Displayscore: 88.0,
    Secondparameter: 73.0,
    Thirdparameter: 82.0,
    Fourthparameter: 71.0,
  },
  {
    Name: "Apple iPhone 15 Plus",
    Price: 92990.0,
    Batteryscore: 89.0,
    Displayscore: 78.0,
    Secondparameter: 83.5,
    Thirdparameter: 82.0,
    Fourthparameter: 97.0,
  },
  {
    Name: "OnePlus Open",
    Price: 139999.0,
    Batteryscore: 77.0,
    Displayscore: 92.0,
    Secondparameter: 84.5,
    Thirdparameter: 83.0,
    Fourthparameter: 93.0,
  },
];

import React from "react";

export default function Filtering({
  tabTwoResponse,
  tabThreeResponse,
  tabFourResponse,
  tabFiveResponse,
}) {
  const filteredByPrice = phones.filter((phone) => {
    const lowerBound = tabTwoResponse * 0.85;
    const upperBound = tabTwoResponse * 1.1;
    return phone.Price >= lowerBound && phone.Price <= upperBound;
  });

  let batteryMultiplier;
  switch (tabThreeResponse) {
    case "Under 4 hours":
      batteryMultiplier = 0.5;
      break;
    case "4 to 6 hours":
      batteryMultiplier = 0.75;
      break;
    case "6+ hours":
      batteryMultiplier = 1;
      break;
    default:
      batteryMultiplier = 1;
      break;
  }

  const filteredByBattery = filteredByPrice.map((phone) => {
    return {
      ...phone,
      FirstScore: phone.Secondparameter * batteryMultiplier,
    };
  });

  const sortedFilteredPhones = filteredByBattery.sort(
    (a, b) => b.FirstScore - a.FirstScore
  );

  // console.log(sortedFilteredPhones);

  let cameraFilterMultiplier;
  switch (tabFourResponse) {
    case "Casual photos occasionally":
      cameraFilterMultiplier = 0.5;
      break;
    case "High-quality photos for personal use":
      cameraFilterMultiplier = 0.75;
      break;
    case "Professional photography/videography":
      cameraFilterMultiplier = 1;
      break;
    default:
      cameraFilterMultiplier = 1;
      break;
  }

  const filteredByCamera = sortedFilteredPhones.map((phone) => {
    return {
      ...phone,
      SecondScore: phone.Thirdparameter * cameraFilterMultiplier,
    };
  });

  const semiFinalFilteredPhones = filteredByCamera.sort(
    (a, b) => b.SecondScore - a.SecondScore
  );

  // console.log(semiFinalFilteredPhones);

  let performanceFilterMultiplier;

  switch (tabFiveResponse) {
    case "Never":
      performanceFilterMultiplier = 0.25;
      break;
    case "Rarely (once a week or less)":
      performanceFilterMultiplier = 0.5;
      break;
    case "Occasionally (a few times a week)":
      performanceFilterMultiplier = 0.75;
      break;
    case "Daily":
      performanceFilterMultiplier = 1;
      break;
    default:
      performanceFilterMultiplier = 1;
      break;
  }

  const filteredByPerformance = semiFinalFilteredPhones.map((phone) => {
    return {
      ...phone,
      ThirdScore: phone.Fourthparameter * performanceFilterMultiplier,
    };
  });

  const finalFilteredPhones = filteredByPerformance.sort(
    (a, b) => b.ThirdScore - a.ThirdScore
  );

  console.log(finalFilteredPhones);
  const sortedByPrice = finalFilteredPhones
    .slice(0, 3) // Take only the top 3 recommendations
    .sort((a, b) => b.Price - a.Price); // Sort by price

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full flex flex-col gap-y-12 max-w-4xl xl:max-w-7xl py-12">
          <div className="flex flex-col gap-y-6 items-center lg:flex-row lg:gap-x-6">
            {sortedByPrice.map((phone, index) => (
              <div
                key={index}
                className="w-max p-4 lg:p-6 flex flex-col border-[3px] border-[#625DF533] rounded-2xl gap-y-3"
              >
                <div className="text-base lg:text-xl bold text-black">
                  {phone.Name}
                </div>
                <div className="flex justify-between">
                  <div className="px-2 lg:px-4 flex flex-col items-center gap-y-2">
                    <div className="text-sm text-[#51636F] medium text-center max-w-[5rem]">
                      Battery Score
                    </div>
                    <div className="text-[#625DF5] text-lg lg:text-xl bold">
                      <span>{phone.FirstScore}</span>/100
                    </div>
                  </div>
                  <div className="px-2 lg:px-4 flex flex-col items-center gap-y-2 border-l-2 border-r-2 border-[#625DF533]">
                    <div className="text-sm text-[#51636F] medium text-center max-w-[5rem]">
                      Performance Score
                    </div>
                    <div className="text-[#625DF5] text-lg lg:text-xl bold">
                      <span>{phone.SecondScore}</span>/100
                    </div>
                  </div>
                  <div className="px-2 lg:px-4 flex flex-col items-center gap-y-2">
                    <div className="text-sm text-[#51636F] medium text-center max-w-[5rem]">
                      Camera Score
                    </div>
                    <div className="text-[#625DF5] text-lg lg:text-xl bold">
                      <span>{phone.ThirdScore}</span>/100
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-base text-[#51636F] medium">
                    Phone price
                  </div>
                  <div className="text-lg lg:text-xl bold text-black">
                    ₹ {phone.Price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
