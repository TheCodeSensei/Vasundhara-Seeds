import React from "react";
import { useRef } from "react";

export default function Summary(props){
    const statsRef = useRef(null);
    
    function handleClick(){ 
        if (statsRef.current) {
            // Toggle the hidden class
            statsRef.current.classList.toggle('hidden');
            // Scroll into view if making it visible
            if (!statsRef.current.classList.contains('hidden')) {
              statsRef.current.scrollIntoView({ behavior: 'smooth' });
            }
          }
   };
 


    return (
        <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    {/* <div class="sm:hidden">
        <label htmlFor="tabs" class="sr-only">Select tab</label>
        <select id="tabs" class="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>SUMMARY</option>
            <option>SUMMARY</option>
            <option>SUMMARY</option>
        </select>
    </div> */}
    {/* <ul class="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
        <li class="w-full"> */}
            <button id="stats-tab" data-tabs-target="#stats" type="button" role="tab" aria-controls="stats" aria-selected="true" class=" dark:text-white sm:p-8 inline-block w-full p-4 rounded-ss-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 mb-2 text-2xl font-extrabold" onClick={handleClick}>Summary</button>
        {/* </li>
    </ul> */}
    <div id="fullWidthTabContent" class="border-t border-gray-200 dark:border-gray-600">
        <div class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="stats" role="tabpanel" aria-labelledby="stats-tab" ref={statsRef}
        >
            <dl class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">Total Bags</dt>
                    <dd class="text-gray-500 dark:text-gray-600 font-extrabold text-2xl">{props.summary()[0]}</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">Weight-Bag</dt>
                    <dd class="text-gray-500 dark:text-gray-600 font-extrabold text-2xl">{props.summary()[1]}</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">Net Weight</dt>
                    <dd class="text-gray-500 dark:text-gray-600 font-extrabold text-2xl">{props.summary()[2]}</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">Graded Bags</dt>
                    <dd class="text-gray-500 dark:text-gray-600 font-extrabold text-2xl">{props.summary()[3]}</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">Packed Bags</dt>
                    <dd class="text-gray-500 dark:text-gray-600 font-extrabold text-2xl"></dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">Packed Quantity</dt>
                    <dd class="text-gray-500 dark:text-gray-600 font-extrabold text-2xl"></dd>
                </div>
            </dl>
        </div>
   </div>
        </div>
    )
};