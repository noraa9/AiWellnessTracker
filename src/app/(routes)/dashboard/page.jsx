'use client'
import React, {useState, useEffect} from 'react'
import { UserButton, useUser } from '@clerk/nextjs'
import CardInfo from './_components/CardInfo';

// function Dashboard() {
//     const  {user} = useUser();

//     const [caloriesList, setCaloriesList] = useState([])
//     const [stepsList, setStepsList] = useState([])
//     const [sleepList, setSleepList] = useState([])
//     const [moodList, setMoodList] = useState([])
//     useEffect(() => {
//     if (user) {
//         const storedCalories = JSON.parse(localStorage.getItem('caloriesList')) || [];
//         const storedSteps = JSON.parse(localStorage.getItem('stepsList')) || [];
//         const storedSleep = JSON.parse(localStorage.getItem('sleepList')) || [];
//         const storedMood = JSON.parse(localStorage.getItem('moodList')) || [];

//         setCaloriesList(storedCalories);
//         setStepsList(storedSteps);
//         setSleepList(storedSleep);
//         setMoodList(storedMood);
//     }
// }, [user]);
//     return (
//         <div className="p-8">
//             <h2 className='font-bold text-4xl'>Hi, {user?.fullName}</h2>
//             <p className='text-gray-500 font-bold'>Here's what happening with your health. Lets manage your wellness</p>

//             <CardInfo
//             caloriesList={caloriesList}
//             stepsList={stepsList}
//             sleepList={sleepList}
//             moodList={moodList}
//             />
//         </div>
//     );
// }

function Dashboard() {
    const {user} = useUser();
    const [dailyData, setDailyData] = useState({});
    const [todayData, setTodayData] = useState(null);
    
    // Функция для форматирования даты
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-KZ', options);
    };
    
    // Получаем сегодняшнюю дату в формате YYYY-MM-DD
    const today = new Date().toISOString().split('T')[0];
    // Форматированная дата для отображения
    const formattedToday = formatDate(today);
    
    const loadData = () => {
        const storedData = JSON.parse(localStorage.getItem('dailyData')) || {};
        setDailyData(storedData);
        
        // Получаем данные за сегодня
        setTodayData(storedData[today] || null);
    };
    
    useEffect(() => {
        if (user) {
            loadData();
            
            const handleStorageChange = () => {
                loadData();
            };
            
            window.addEventListener('storage', handleStorageChange);
            
            return () => {
                window.removeEventListener('storage', handleStorageChange);
            };
        }
    }, [user]);

    return (
        <div className="p-8">
            <h2 className='font-bold text-4xl'>Hi, {user?.fullName}</h2>
            <p className='text-gray-500 font-bold'>Here's what happening with your health. Lets manage your wellness</p>
            
            {/* Отображаем форматированную дату */}
            <div className="my-4 text-xl font-semibold text-gray-700">
                Today: {formattedToday}
            </div>
            
            {todayData && typeof todayData === 'object' ? (
    <CardInfo
        calories={todayData.calories || 0}
        steps={todayData.steps || 0}
        sleep={todayData.sleep || 0}
        mood={todayData.mood || 'Нет данных'}
    />
) : (
    <p className="text-gray-500 mt-4">Нет данных за сегодня</p>
)}
        </div>
    );
}

export default Dashboard;