import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='flex gap-2 p-2 relative w-30 overflow-auto table-container'>
      <div class="overflow-x-auto shadow-md sm:rounded-lg w-1/2 table-item">
        <h3 className='text-center bg-purple-100 py-2 px-4 text-purple-600 cursor-pointer text-2xl'>Top Five Products Summary</h3>
        <table class=" text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 px-4 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-4">
                Product name
              </th>
              <th scope="col" class="py-3 px-4">
                Color
              </th>
              <th scope="col" class="py-3 px-4">
                Category
              </th>
              <th scope="col" class="py-3 px-4">
                Price
              </th>
              <th scope="col" class="py-3 px-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th scope="row" class="py-4 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Apple MacBook Pro 17"
              </th>
              <td class="py-4 px-4">
                Sliver
              </td>
              <td class="py-4 px-4">
                Laptop
              </td>
              <td class="py-4 px-4">
                $2999
              </td>
              <td class="py-4 px-4">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
            <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="py-4 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Microsoft Surface Pro
              </th>
              <td class="py-4 px-4">
                White
              </td>
              <td class="py-4 px-4">
                Laptop PC
              </td>
              <td class="py-4 px-4">
                $1999
              </td>
              <td class="py-4 px-4">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th scope="row" class="py-4 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Magic Mouse 2
              </th>
              <td class="py-4 px-4">
                Black
              </td>
              <td class="py-4 px-4">
                Accessories
              </td>
              <td class="py-4 px-4">
                $99
              </td>
              <td class="py-4 px-4">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
            <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="py-4 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Google Pixel Phone
              </th>
              <td class="py-4 px-4">
                Gray
              </td>
              <td class="py-4 px-4">
                Phone
              </td>
              <td class="py-4 px-4">
                $799
              </td>
              <td class="py-4 px-4">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

      <div class="overflow-x-auto relative shadow-md sm:rounded-lg  w-1/2 table-item">
        <h3 className='text-center bg-purple-100 py-2 text-purple-600 cursor-pointer text-2xl'>Top Five Products Summary</h3>
        <table class=" text-sm text-left text-gray-500 dark:text-gray-400 w-2">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-4">
                Product name
              </th>
              <th scope="col" class="py-3 px-4">
                Color
              </th>
              <th scope="col" class="py-3 px-4">
                Category
              </th>
              <th scope="col" class="py-3 px-4">
                Price
              </th>
              <th scope="col" class="py-3 px-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th scope="row" class="py-4 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Apple MacBook Pro 17"
              </th>
              <td class="py-4 px-4">
                Sliver
              </td>
              <td class="py-4 px-4">
                Laptop
              </td>
              <td class="py-4 px-4">
                $2999
              </td>
              <td class="py-4 px-4">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
            <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="py-4 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Microsoft Surface Pro
              </th>
              <td class="py-4 px-4">
                White
              </td>
              <td class="py-4 px-4">
                Laptop PC
              </td>
              <td class="py-4 px-4">
                $1999
              </td>
              <td class="py-4 px-4">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th scope="row" class="py-4 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Magic Mouse 2
              </th>
              <td class="py-4 px-4">
                Black
              </td>
              <td class="py-4 px-4">
                Accessories
              </td>
              <td class="py-4 px-4">
                $99
              </td>
              <td class="py-4 px-4">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
            <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="py-4 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Google Pixel Phone
              </th>
              <td class="py-4 px-4">
                Gray
              </td>
              <td class="py-4 px-4">
                Phone
              </td>
              <td class="py-4 px-4">
                $799
              </td>
              <td class="py-4 px-4">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Dashboard