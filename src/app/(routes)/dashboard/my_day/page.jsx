'use client';

import { useEffect, useState } from 'react';

export default function MyDayPage() {
  const [calories, setCalories] = useState('');
  const [steps, setSteps] = useState('');
  const [sleep, setSleep] = useState('');
  const [mood, setMood] = useState('🙂 Нормально');

const handleSubmit = () => {
    const today = new Date().toISOString().split('T')[0]; // Получаем текущую дату в формате YYYY-MM-DD
    
    const newEntry = {
        date: today,
        calories: Number(calories),
        steps: Number(steps),
        sleep: Number(sleep),
        mood,
        timestamp: Date.now()
    };

    // Получаем текущие данные
    const storedData = JSON.parse(localStorage.getItem('dailyData')) || {};
    
    // Обновляем данные за текущий день
    storedData[today] = {
        calories: newEntry.calories,
        steps: newEntry.steps,
        sleep: newEntry.sleep,
        mood: newEntry.mood,
        lastUpdated: newEntry.timestamp
    };

    // Сохраняем обратно
    localStorage.setItem('dailyData', JSON.stringify(storedData));

    // Триггерим событие storage
    window.dispatchEvent(new Event('storage'));

    // Очистка полей
    setCalories('');
    setSteps('');
    setSleep('');
    setMood('🙂 Нормально');
};
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">My Day Input</h1>

      <div className="space-y-4">
        <div>
          <label className="block font-medium">Calories:</label>
          <input
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            className="border p-2 w-full rounded"
            placeholder="Enter calories..."
          />
        </div>

        <div>
          <label className="block font-medium">Steps:</label>
          <input
            type="number"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="border p-2 w-full rounded"
            placeholder="Enter steps..."
          />
        </div>

        <div>
          <label className="block font-medium">Sleep (hours):</label>
          <input
            type="number"
            value={sleep}
            onChange={(e) => setSleep(e.target.value)}
            className="border p-2 w-full rounded"
            placeholder="Enter sleep hours..."
          />
        </div>

        <div>
          <label className="block font-medium">Mood:</label>
          <select
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            className="border p-2 w-full rounded"
          >
            <option>😄 Весёлый</option>
            <option>🙂 Нормально</option>
            <option>😐 Не очень</option>
            <option>😞 Плохо</option>
          </select>
        </div>

        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        >
          Save My Day
        </button>
      </div>
    </div>
  );
}
