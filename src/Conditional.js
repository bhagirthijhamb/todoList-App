// import React from 'react';

// function Conditional(props) {
//     // console.log(props.isLoading) // logs 'true' an then after 1.5 sec 'false'

//     // if(props.isLoading === true) {
//     //     return (
//     //         <h1>Loading...</h1>
//     //     )
//     // } else {
//     //     return (
//     //         <h1>Some cool stuff about conditional rendering</h1>
//     //     );
//     // }

//     return (
//         // condition ? statement if true : statement if false
//         <div>
//             <h1>Navbar</h1>

//             {/* {props.isLoading === true ? <h1>Loading...</h1> : <h1>Some cool stuff about conditional rendering</h1>} */}

//             {props.isLoading ? <h1>Loading...</h1> : <h1>Some cool stuff about conditional rendering</h1>}

//             <h1>Footer</h1>
//         </div>
//     );
// }

// export default Conditional;

// // Conditional will have whats going to be displayed on the screen
// // Conditional component is receiving a props called isLoading

// // Conditional Rendering: I am going to load something on the screen if a condition is true

// ---------------------------------------------------------------------

// OPTION 2

import React from 'react';

function Conditional(props) {
    return <h1>Some cool stuff about conditional rendering</h1>
}


export default Conditional;

