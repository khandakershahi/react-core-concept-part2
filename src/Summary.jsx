/**
 * components
 * JSX
 * Props
 * State
 * Events
 * [Condtional Rendering]
 *
 */

/**
 * 1. just write a simple fetch with json conversion
 * 2. wrap the data loading components under suspense
 */

/**
 * 1. API: url: https://jsonplaceholder.typicode.com/users
 */

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => console.log(data))

// const loadData = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = res.json();
//     return data;
// }

/**
 * 1. event trigger
 * 2. state
 * 3. data load from api
 * 4. loop throught to display data
 * 5. why we use key pop
 */