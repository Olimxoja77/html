let btn = document.querySelector("button");
let div = document.querySelector("div");

btn.addEventListener("click", () => {
    let inp = document.querySelector("input");
    // Отправляем данные с помощью POST-запроса
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        headers: {
            "Content-type": "application/json",  
        },
        body: JSON.stringify({
            userId: 1,
            title: inp.value, // передаем значение из input
        }),
    })
    .then((res) => res.json()) // получаем ответ в формате JSON
    .then((data) => {
        // Отображаем результат в div
        div.innerHTML += `
        <div>
            <h1>${data.title}</h1>
        </div>`;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
