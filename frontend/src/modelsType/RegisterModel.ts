// export default interface RegisterModel {
//    user:{
//     _id: string;
//     userName: string;
//     image: string;
//     company: string;
//     email: string;
//     password: string;
//     createdAt: string;
//     updatedAt: string;
//    };
//    token:string
// }
export default  interface RegisterModel {
    user: User
    token: string
  }
  
  export interface User {
    _id: string
    userName: string
    image: string
    company: string
    email: string
    password: string
    createdAt: string
    updatedAt: string
  }
  