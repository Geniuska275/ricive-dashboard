import React, { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import {
  AiOutlineArrowUp,
  AiOutlineArrowDown,
  AiOutlineCloudDownload,
} from "react-icons/ai";
import { PencilIcon } from "@heroicons/react/outline";
import { FiEdit2 } from "react-icons/fi";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top' as const,
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Line Chart',
//     },
//   },
// };

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

//  const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],

function Main() {
  const [data, setData] = useState({
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "august",
      "september",
      "october",
      "november",
      "december",
    ],
    datasets: [
      {
        data: [10, 20, 40, 30, 70, 50, 40, 80, 20, 40, 60, 17],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "green",
        borderColor: "green",
        tension: 0.4,
      },
      {
        data: [20, 10, 40, 30, 60, 70, 50, 40, 30, 50, 80, 20],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "limegreen",
        borderColor: "limegreen",
        tension: 0.6,
      },
      {
        data: [26, 50, 45, 30, 60, 80, 57, 80, 30, 60, 80, 20, 80],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "limegreen",
        borderColor: "limegreen",
        tension: 0.9,
      },
    ],
  });
  const [datum, setDatum] = useState({
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset 1",
        data: [10, 20, 40, 30, 70, 50, 40, 80, 20, 40, 60, 17],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "red",
        borderColor: "red",
        tension: 0.4,
      },
    ],
  });
  const [datu, setDatu] = useState({
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        data: [10, 20, 40, 30, 70, 50, 40, 80, 20, 40, 60, 17],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "dodgerblue",
        borderColor: "dodgerblue",
        tension: 0.4,
      },
    ],
  });
  return (
    <div>
      <div className="w-full flex flex-wrap mt-6 mb-8 justify-between items-center">
        <div>
          <h1 className="font-bold text-black text-3xl">Welcome,Kingsley</h1>
          <span className="font-bold text-gray-600 mt-6">
            Measure your advertising ROI and track and report website traffic.
          </span>
        </div>
        <div className="flex justify-around items-center">
          <button className="rounded p-4  font-bold bg-white shadow m-5 px-10 hover:shadow-sm ">
            Export
          </button>
          <button className="rounded p-4  bg-green-400 shadow px-10 font-bold hover:shadow-md text-white">
            insight
          </button>
        </div>
      </div>
      <div className="flex w-full xl:w-[200px]">
        <button className="px-10 bg-white rounded p-4 font-bold rounded-l-lg border hover:text-line-900">
          12 months
        </button>
        <button className="px-10 bg-white rounded p-4 font-bold border hover:bg-yellow">
          30 days
        </button>
        <button className="px-10 bg-white rounded p-4 font-bold border">
          7 days
        </button>
        <button className="px-10 bg-white rounded p-4 font-bold rounded-r-lg border ">
          24 hours
        </button>
      </div>

      <div className="flex  flex-wrap gap-2 mt-5">
        <div className="rounded-lg bg-white shadow-sm p-6 hover:shadow-lg">
          <div className="flex justify-between items-center">
            <h2 className="font-bold">Users</h2>
            <FaEllipsisV />
          </div>
          <div className="flex  mt-3 ">
            <div className="mr-6 ">
              <h1 className="font-bold text-5xl">20.8k</h1>
              <div className="text-gray-600 flex">
                <AiOutlineArrowUp className="mt-1" />
                <span className="font-bold text-green-800 mr-2">12%</span>
                <span>vs Last Month.</span>
              </div>
            </div>
            <div style={{ width: "300px" }}>
              <Line data={datu} />
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-white shadow-sm p-6 hover:shadow-lg">
          <div className="flex justify-between items-center">
            <h2 className="font-bold">Sessions</h2>
            <FaEllipsisV />
          </div>
          <div className="flex mt-1 ">
            <div className="mr-6  ">
              <h1 className="font-bold text-5xl">26.4k</h1>
              <div className="text-gray-600 flex">
                <AiOutlineArrowDown className="mt-1 text-red-800" />
                <span className="font-bold text-red-800 mr-2">12%</span>
                <span>vs Last Month.</span>
              </div>
            </div>
            <div style={{ width: "300px" }}>
              <Line data={datum} />
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white shadow-sm p-6 hover:shadow-lg">
          <div className="flex justify-between items-center">
            <h2 className="font-bold">Sessions Duration</h2>
            <FaEllipsisV />
          </div>
          <div className="flex mt-1 ">
            <div className="mr-6 ml-2 ">
              <h1 className="font-bold text-5xl">36.8k</h1>
              <div className="text-gray-600 flex">
                <AiOutlineArrowUp className="mt-1" />
                <span className="font-bold text-green-800 mr-2">12%</span>
                <span>vs Last Month.</span>
              </div>
            </div>
            <div style={{ width: "300px" }}>
              <Line data={datu} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl mt-8 p-0 m-0">
        <div className="flex justify-between items-center border-b border-gray-100 p-4 w-full">
          <div>
            <h1 className="font-bold text-black">Total Balance</h1>
            <h1 className="text-black  text-5xl font-bold mt-4">$107,843.82</h1>
          </div>

          <button className="border bg-white px-10 p-4 rounded-lg mr-2 font-bold">
            view report
          </button>
        </div>
        <div className="p-20">
          <Line data={data} />
        </div>
      </div>

      <div className="bg-white border rounded-2xl mt-8 p-0 m-0">
        <div className="p-10">
          <div className="flex justify-between items-center mt-6 border-b p-6">
            <h1 className="text-black font-bold">Recent Transactions</h1>
            <div className="">
              <button className="border bg-white px-10 p-4 rounded-lg mr-2 font-bold">
                Download
              </button>
              <button className="border bg-white px-10 p-4 rounded-lg font-bold">
                View Report
              </button>
            </div>
          </div>
          <div className="flex w-full mt-4">
            <button className="px-10 bg-white rounded p-4 font-bold rounded-l-lg border">
              View all
            </button>

            <button className="px-10 bg-white rounded p-4 font-bold border">
              Monitored
            </button>
            <button className="px-10 bg-white rounded p-4 font-bold rounded-r-lg border">
              Unmonitored
            </button>
          </div>

          <div className="overflow-auto">
            <table className="w-full mt-10">
              <thead className="border-b-2 bg-white text-sm font-bold p-10">
                <tr>
                  <th className="p-3 tracking-wide text-left">Transactions</th>
                  <th className="p-3 tracking-wide text-left">Amount</th>
                  <th className="p-3 tracking-wide text-left">Date</th>
                  <th className="p-3 tracking-wide text-left">Category</th>
                  <th className="p-3 tracking-wide text-left">Card</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="flex p-3 text-lg font-bold  text-gray-500 mr-8">
                    <img
                      src="download (3).jpg"
                      className="rounded-3xl w-10 h-10"
                    />
                    <span className="mt-3 text-black font-bold">Spotify</span>
                  </td>
                  <td className="p-3 text-lg  font-bold  text-gray-500">
                    -$18.00
                  </td>
                  <td className="p-3 text-lg font-bold  text-gray-500">
                    Wed 1:00pm
                  </td>
                  <td className=" text-lg font-bold p-3  text-blue-600 ">
                    subsciption
                  </td>
                  <td className="p-6 px-4 text-lg font-bold  text-gray-500 flex ">
                    <img src="master.jpg" className="rounded-lg  w-10 h-10" />
                    <div className="mr-6 ml-3">
                      <h1 className="text-black font-bold">Visa 1234</h1>
                      <h2>Expiry 08/2024</h2>
                    </div>
                    <PencilIcon className="Nav-icon" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="flex p-3 text-lg font-bold  text-gray-500 mr-8">
                    <img
                      src="download (3).jpg"
                      className="rounded-3xl w-10 h-10"
                    />
                    <span className="mt-3 ml-1 text-black font-bold">
                      A Coffee
                    </span>
                  </td>
                  <td className="p-3 text-lg  font-bold  text-gray-500">
                    -$18.00
                  </td>
                  <td className="p-3 text-lg font-bold  text-gray-500">
                    Wed 1:00pm
                  </td>
                  <td className="p-3 text-lg font-bold text-pink-500">Food</td>
                  <td className="p-6 px-4 text-lg font-bold  text-gray-500 flex ">
                    <img src="visa.jpg" className=" rounded-lg w-10 h-10" />
                    <div className="mr-6 ml-3">
                      <h1 className="text-black font-bold">Visa 1234</h1>
                      <h2>Expiry 08/2024</h2>
                    </div>
                    <PencilIcon className="Nav-icon" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="flex p-3 text-lg font-bold  text-gray-500 mr-8">
                    <img
                      src="download (3).jpg"
                      className="rounded-3xl w-10 h-10"
                    />
                    <span className="mt-3 ml-1 text-black font-bold">
                      Stripe
                    </span>
                  </td>
                  <td className="p-3 text-lg  font-bold  text-green-500">
                    $88.00
                  </td>
                  <td className="p-3 text-lg font-bold  text-gray-500">
                    Wed 2:45am
                  </td>
                  <td className="p-3 text-lg font-bold  text-green-500">
                    income
                  </td>
                  <td className="p-6 px-4 text-lg font-bold  text-gray-500 flex ">
                    <img src="visa.jpg" className=" rounded-lg w-10 h-10" />
                    <div className="mr-6 ml-3">
                      <h1 className="text-black font-bold">Visa 1234</h1>
                      <h2>Expiry 08/2024</h2>
                    </div>
                    <PencilIcon className="Nav-icon" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="flex p-3 text-lg font-bold  text-gray-500 mr-8">
                    <img
                      src="images (1).png"
                      className="rounded-3xl w-10 h-10"
                    />
                    <span className="mt-3 ml-1 text-black font-bold">
                      Figma
                    </span>
                  </td>
                  <td className="p-3 text-lg  font-bold  text-gray-500">
                    -$18.00
                  </td>
                  <td className="p-3 text-lg font-bold  text-gray-500">
                    Wed 1:00pm
                  </td>
                  <td className="p-3 text-lg font-bold  text-pink-500">Food</td>
                  <td className="p-6 px-4 text-lg font-bold  text-gray-500 flex ">
                    <img src="visa.jpg" className=" rounded-3xl w-10 h-10" />
                    <div className="mr-6 ml-3">
                      <h1 className="text-black font-bold">Visa 1234</h1>
                      <h2>Expiry 08/2024</h2>
                    </div>
                    <PencilIcon className="Nav-icon" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="flex p-3 text-lg font-bold  text-gray-500 mr-8">
                    <img
                      src="download (3).jpg"
                      className="rounded-3xl w-10 h-10"
                    />
                    <span className="mt-3 ml-1 text-black font-bold">
                      TBF Bakery
                    </span>
                  </td>
                  <td className="p-3 text-lg  font-bold  text-gray-500">
                    -$18.00
                  </td>
                  <td className="p-3 text-lg font-bold  text-gray-500">
                    Wed 1:00pm
                  </td>
                  <td className="p-3 text-lg font-bold  text-blue-500">
                    Groceries
                  </td>
                  <td className="p-6 px-4 text-lg font-bold  text-gray-500 flex ">
                    <img src="master.jpg" className=" rounded-3xl w-10 h-10" />
                    <div className="mr-6 ml-3">
                      <h1 className="text-black font-bold">Visa 1234</h1>
                      <h2>Expiry 08/2024</h2>
                    </div>
                    <PencilIcon className="Nav-icon" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="flex p-3 text-lg font-bold  text-gray-500 mr-8">
                    <img
                      src="images (1).png"
                      className="rounded-3xl w-10 h-10"
                    />
                    <span className="mt-3 ml-1 text-black font-bold">
                      Fresh F&V
                    </span>
                  </td>
                  <td className="p-3 text-lg  font-bold  text-gray-500">
                    -$18.00
                  </td>
                  <td className="p-3 text-lg font-bold  text-gray-500">
                    Wed 1:00pm
                  </td>
                  <td className="p-3 text-lg font-bold  text-blue-500">
                    Groceries
                  </td>
                  <td className="p-6 px-4 text-lg font-bold  text-gray-500 flex ">
                    <img src="visa.jpg" className=" rounded-3xl w-10 h-10" />
                    <div className="mr-6 ml-3">
                      <h1 className="text-black font-bold">Visa 1234</h1>
                      <h2>Expiry 08/2024</h2>
                    </div>
                    <PencilIcon className="Nav-icon" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="flex p-3 text-lg font-bold  text-gray-500 mr-8">
                    <img
                      src="images (1).png"
                      className="rounded-3xl w-10 h-10"
                    />
                    <span className="mt-3 ml-1 text-black font-bold">
                      Stripe
                    </span>
                  </td>
                  <td className="p-3 text-lg  font-bold  text-green-500">
                    $88.00
                  </td>
                  <td className="p-3 text-lg font-bold  text-gray-500">
                    Tues 2:45pm
                  </td>
                  <td className="p-3 text-lg font-bold  text-green-500">
                    income
                  </td>
                  <td className="p-6 px-4 text-lg font-bold  text-gray-500 flex ">
                    <img src="visa.jpg" className=" rounded-3xl w-10 h-10" />
                    <div className="mr-6 ml-3">
                      <h1 className="text-black font-bold">Visa 1234</h1>
                      <h2>Expiry 08/2024</h2>
                    </div>
                    <PencilIcon className="Nav-icon" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
