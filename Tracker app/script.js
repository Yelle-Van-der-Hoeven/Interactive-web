const habits = [
    {
        id: 1,
        name: "Fitness",
        duration: "1u",
        date: "2025-02-14",
        status: "Goed"
    },
    {
        id: 2,
        name: "Meditatie",
        duration: "15 min",
        date: "2025-02-15",
        status: "Uitstekend"
    },
    {
        id: 3,
        name: "Lezen",
        duration: "30 min",
        date: "2025-02-16",
        status: "Matig"
    },
    {
        id: 4,
        name: "Wandelen",
        duration: "45 min",
        date: "2025-02-17",
        status: "Goed"
    },
    {
        id: 5,
        name: "Water drinken",
        duration: "8 glazen",
        date: "2025-02-18",
        status: "Uitstekend"
    },
    {
        id: 6,
        name: "Yoga",
        duration: "40 min",
        date: "2025-02-19",
        status: "Goed"
    },
    {
        id: 7,
        name: "Schrijven",
        duration: "20 min",
        date: "2025-02-20",
        status: "Matig"
    },
    {
        id: 8,
        name: "Piano spelen",
        duration: "1u",
        date: "2025-02-21",
        status: "Uitstekend"
    },
    {
        id: 9,
        name: "Opruimen",
        duration: "30 min",
        date: "2025-02-22",
        status: "Goed"
    },
    {
        id: 10,
        name: "Tekenen",
        duration: "45 min",
        date: "2025-02-23",
        status: "Goed"
    }
];

const habitList = document.getElementById("habit-list");
const habitDetail = document.getElementById("habit-detail");
const backButton = document.getElementById("back-button");

habits.forEach((habit) => {
    const li = document.createElement("li");
    li.textContent = `${habit.name} - ${habit.date}`;
    li.onclick = () => showDetail(habit);
    habitList.appendChild(li);
});

function showDetail(habit) {
    document.getElementById("habit-name").textContent = habit.name;
    document.getElementById(
        "habit-duration"
    ).textContent = `Duur: ${habit.duration}`;
    document.getElementById("habit-date").textContent = `Datum: ${habit.date}`;
    document.getElementById(
        "habit-status"
    ).textContent = `Status: ${habit.status}`;
    habitList.style.display = "none";
    habitDetail.classList.remove("hidden");
}

backButton.onclick = () => {
    habitDetail.classList.add("hidden");
    habitList.style.display = "block";
};
