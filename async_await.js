async function playerStart() {
    const firstMove = await movePlayer(100, 'Left'); // Pause
    const secondMove = await movePlayer(400, 'Left'); // Pause
    await movePlayer(10, 'Right'); // Pause
    await movePlayer(330, 'Left'); // Pause
}

async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json()
    console.log(data);
}

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function () {
    try {
        const [users, posts, albums] = await Promise.all(urls.map(url =>
            fetch(url).then(resp => resp.json())
        ))
        console.log('users', users)
        console.log('posts', posts)
        console.log('albums', albums)
    } catch (err) {
        console.log('error', err)
    }
}
