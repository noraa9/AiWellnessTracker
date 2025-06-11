const getWellnessAdvice = async (calories, steps, sleep, mood) => {
    try {
        const response = await fetch('/api/wellness', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ calories, steps, sleep, mood })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Ошибка API');
        }

        return data.advice || "Не удалось получить совет.";
    } catch (error) {
        console.error("API Route error:", error);
        return "Произошла ошибка при получении совета по здоровью.";
    }
};

export default getWellnessAdvice;
