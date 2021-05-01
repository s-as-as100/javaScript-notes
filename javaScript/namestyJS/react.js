// // import React from 'react'

// // const employees = [ {
// //     id:1,
// //     name: "mohd",
// //     salary: 5000
// // },
// //   {
// //       id:2 ,
// //       name:"harry",
// //       salary:10000

// //   },

// //    {
// //        id:3,
// //        name:"saifi",
// //        salary:20000
// //    }

// // ]

// //  const Lists = () => {
// //      return ( 

// //         <ul>
// //          <div>
// //              {
// //                  employees.map((employee)=> (<div key={employee.id}>
                    
// //                         <li>{employee.name}</li>
// //                         <li>{employee.salary}</li>
                    

// //                  </div>) )
// //              }
// //          </div>
// //          </ul>
// //       );
// //  }
  
// //  export default Lists;



// import React, {useEffect}from 'react';




// const Albums = () => {
    
//  const getAlbum = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/albums/")
//     console.log(response)
// }

// useEffect(()=>{
//    getAlbum()
// })
//     return ( 
//         <div>
//             <h1>get albums</h1>
//         </div>
//      );
// }
 
// export default Albums;