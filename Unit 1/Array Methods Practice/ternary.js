let x = 25
let y = 50

if (x <= y) {
    console.log("Can you hear me now?")
} else {
    console.log("NO maybe you should shutup")
}

// {x <= y ? console.log("Can you hear me now?") : console.log("NO maybe you should shutup")}

book = {
    title: 'Coding',
    pages: 123,
    cover: 'hard-cover'
}

bookV2 = {
    ...book,
    pages: 140,
    author: 'Steve'
}