const button = document.querySelector("#emoji");

const emoji=[
    "🤣",
    "😂",
    "😍",
    "😊",
    "😭",
    "🥰",
    "😎",
    "😃",
    "😜",
    "😆",
];

button.addEventListener('mouseover',() => {
    const randomEmoji = emoji[Math.floor(Math.random() * emoji.length)];
    document.querySelector("#emoji").innerHTML = randomEmoji;
})
