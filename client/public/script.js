const form = document.querySelector("form#getData");
const form2 = document.querySelector("form#saveData");
const title = document.querySelector("h1");
const input = document.querySelector("input");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const result = await fetch('http://localhost:3000');
    const {data} = await result.json();
    
    title.innerHTML = data;
})

form2.addEventListener("submit", async (event) => {
    event.preventDefault();

    fetch('http://localhost:3000/create-user', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({name: input.value})
    })
})