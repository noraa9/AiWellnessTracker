import {
    Apple,
    Flame,
    Footprints,
    Bed,
    Sticker,
    Sparkles
} from 'lucide-react';

import React, {useEffect, useState} from 'react';
import getWellnessAdvice from '../../../../../utils/getWellnessAdvice';
function CardInfo({calories, steps, sleep, mood}) {
    const [wellnessAdvice, setWellnessAdvice] = useState('');

useEffect(() => {
    const fetchWellnessAdvice = async () => {
        const advice = await getWellnessAdvice(calories, steps, sleep, mood);
        setWellnessAdvice(advice);
        console.log("wellnessAdvice:", advice, typeof advice);
    };
    fetchWellnessAdvice();
}, [calories, steps, sleep, mood]);


    return (
        <div className="">
            <div className="">
                <div className="p-7 border mt-4 rounded-2xl flex items-center justify-between">
                    <div className="">
                        <div className="flex mb-2 flex-row space-x-1 items-center">
                            <h2>Wellness Smart AI</h2>
                            <Sparkles className='rounded-full text-white w-10 h-10 p-2
                                                bg-gradient-to-r
                                                from-pink-500
                                                via-red-500
                                                to-yellow-500
                                                background-animate'/>
                        </div>
                       <h2 className="font-light text-md">
                        { wellnessAdvice}
                        </h2>
                    </div>
                </div>
                <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="p-7 border rounded-2xl flex items-center justify-between">
                        <div className="">
                            <h2 className='text-sm'>Calories</h2>
                            <h2 className='font-bold text-2xl'>{calories}</h2>
                        </div>
                        <Flame className='bg-[#60bd91] p-3 h-12 w-12 rounded-full text-white'/>
                    </div>
                    <div className="p-7 border rounded-2xl flex items-center justify-between">
                        <div className="">
                            <h2 className='text-sm'>Steps</h2>
                            <h2 className='font-bold text-2xl'>{steps}</h2>
                        </div>
                        <Footprints className='bg-[#60bd91] p-3 h-12 w-12 rounded-full text-white'/>
                    </div>
                    <div className="p-7 border rounded-2xl flex items-center justify-between">
                        <div className="">
                            <h2 className='text-sm'>Sleep</h2>
                            <h2 className='font-bold text-2xl'>{sleep}</h2>
                        </div>
                        <Bed className='bg-[#60bd91] p-3 h-12 w-12 rounded-full text-white'/>
                    </div>
                    <div className="p-7 border rounded-2xl flex items-center justify-between">
                        <div className="">
                            <h2 className='text-sm'>Mood</h2>
                            <h2 className='font-bold text-2xl'>{mood}</h2>
                        </div>
                        <Sticker className='bg-[#60bd91] p-3 h-12 w-12 rounded-full text-white'/>
                    </div>
                </div>
            </div>
        </div>
    );
}
// function CardInfo({caloriesList, stepsList, sleepList, moodList}) {
//     const [Calories, setCalories] = useState(0)
//     const [Steps, setSteps] = useState(0)
//     const [Sleep, setSleep] = useState(0)
//     const [Mood, setMood] = useState('')
//     const [wellnessAdvice, setWellnessAdvice] = useState('')

//     useEffect(() => {
//         if (caloriesList.length || stepsList.length || sleepList.length || moodList.length) {
//             CalculateCardInfo();
//         }
//     }, [caloriesList, stepsList, sleepList, moodList]);

//     const CalculateCardInfo = () => {
//         let totalCalories = caloriesList.reduce((acc, item) => acc + Number(item.amount || 0), 0);
//         let totalSteps = stepsList.reduce((acc, item) => acc + Number(item.amount || 0), 0);
//         let totalSleep = sleepList.reduce((acc, item) => acc + Number(item.hours || 0), 0);
//         let latestMood = moodList.length > 0 ? moodList[moodList.length - 1].mood : '';

//         setCalories(totalCalories);
//         setSteps(totalSteps);
//         setSleep(totalSleep);
//         setMood(latestMood);
//     };


//     return (
//         <div className="">
//             {caloriesList.length > 0 || stepsList.length > 0 || sleepList.length > 0 || moodList.length > 0 ? (

//                 <div className="">
//                     <div className="p-7 border mt-4 rounded-2xl flex items-center justify-between">
//                         <div className="">
//                             <div className="flex mb-2 flex-row space-x-1 items-center">
//                                 <h2>Wellness Smart AI</h2>
//                                 <Sparkles className='rounded-full text-white w-10 h-10 p-2
//                                                     bg-gradient-to-r
//                                                     from-pink-500
//                                                     via-red-500
//                                                     to-yellow-500
//                                                     background-animate'/>
//                             </div>
//                             <h2 className='font-light text-md'>
//                                 {wellnessAdvice || 'loading wellness advice...'}
//                             </h2>
//                         </div>
//                     </div>
//                     <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//                         <div className="p-7 border rounded-2xl flex items-center justify-between">
//                             <div className="">
//                                 <h2 className='text-sm'>Calories</h2>
//                                 <h2 className='font-bold text-2xl'>{Calories}</h2>
//                             </div>
//                             <Flame className='bg-[#60bd91] p-3 h-12 w-12 rounded-full text-white'/>
//                         </div>
//                         <div className="p-7 border rounded-2xl flex items-center justify-between">
//                             <div className="">
//                                 <h2 className='text-sm'>Steps</h2>
//                                 <h2 className='font-bold text-2xl'>{Steps}</h2>
//                             </div>
//                             <Footprints className='bg-[#60bd91] p-3 h-12 w-12 rounded-full text-white'/>
//                         </div>
//                         <div className="p-7 border rounded-2xl flex items-center justify-between">
//                             <div className="">
//                                 <h2 className='text-sm'>Sleep</h2>
//                                 <h2 className='font-bold text-2xl'>{Sleep}</h2>
//                             </div>
//                             <Bed className='bg-[#60bd91] p-3 h-12 w-12 rounded-full text-white'/>
//                         </div>
//                         <div className="p-7 border rounded-2xl flex items-center justify-between">
//                             <div className="">
//                                 <h2 className='text-sm'>Mood</h2>
//                                 <h2 className='font-bold text-2xl'>{Mood}</h2>
//                             </div>
//                             <Sticker className='bg-[#60bd91] p-3 h-12 w-12 rounded-full text-white'/>
//                         </div>
//                     </div>
//                 </div>
//             ) : (
//                 <></>
//             )}
//         </div>
//     )

// } 

export default CardInfo;