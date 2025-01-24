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
        <div >
            <label class=" dark:text-white sm:p-8 inline-block w-full p-1 rounded-ss-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-00 mb-2 text-2xl font-extrabold text-center">Summary</label>
     <div>
        <div class="bg-white rounded-lg md:p-8" id="stats" role="tabpanel" aria-labelledby="stats-tab" ref={statsRef}
        >
            <dl class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto sm:grid-cols-3 xl:grid-cols-6 sm:p-8">
                <div class="flex flex-col items-left justify-center">
                    <dt class="mb-2 text-2xl font-extrabold">Net Weight</dt>
                    <dd class="text-gray-500  font-extrabold text-2xl">{props.summary()[0]}</dd>
                </div>
                <div class="flex flex-col items-left justify-center">
                    <dt class="mb-2 text-2xl font-extrabold">Weight-Bag</dt>
                    <dd class="text-gray-500 dark:text-gray-600 font-extrabold text-2xl">{props.summary()[1]}</dd>
                </div>
                <div class="flex flex-col items-left justify-center">
                    <dt class="mb-2 text-2xl font-extrabold">Graded Bags</dt>
                    <dd class="text-gray-500 dark:text-gray-600 font-extrabold text-2xl">{props.summary()[2]}</dd>
                </div>
                <div class="flex flex-col items-left justify-center">
                    <dt class="mb-2 text-2xl font-extrabold">Packed Bags</dt>
                    <dd class="text-gray-500 dark:text-gray-600 font-extrabold text-2xl">{props.summary()[3]}</dd>
                </div>
                <div class="flex flex-col items-left justify-center">
                    <dt class="mb-2 text-2xl font-extrabold">Packed Quantity</dt>
                    <dd class="text-gray-500 dark:text-gray-600 font-extrabold text-2xl">{props.summary()[4]}</dd>
                </div>
                <div class="flex flex-col items-left justify-center">
                    <dt class="mb-2 text-2xl font-extrabold">Graded Quantity</dt>
                    <dd class="text-gray-500 dark:text-gray-600 font-extrabold text-2xl">{props.summary()[5]}</dd>
                </div>
            </dl>
        </div>
   </div>
        </div>
    )
};