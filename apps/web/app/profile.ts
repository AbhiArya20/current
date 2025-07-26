// import { authClient } from "./auth-client";

// // Two factor related functions

// const enableTwoFactor = async () => {
//   const data = await authClient.twoFactor.enable({
//     password, // the user password is required
//   }); // this will enable two factor
// };

// const disableTwoFactor = async () => {
//   const data = await authClient.twoFactor.disable({
//     password, // the user password is required
//   }); // this will disable two factor
// };

// const signInWith2Factor = async () => {
//   const data = await authClient.signIn.email({
//     //...
//   });
//   //if the user has two factor enabled, it will redirect to the two factor page
// };

// const verifyTOTP = async () => {
//   const data = await authClient.twoFactor.verifyTOTP({
//     code: "123456", // the code entered by the user
//     /**
//      * If the device is trusted, the user won't
//      * need to pass 2FA again on the same device
//      */
//     trustDevice: true,
//   });
// };

// // Functions to use in server side
// const { headers, response } = await auth.api.signInEmail({
//   returnHeaders: true,

//   body: {
//     email: "john@doe.com",
//     password: "password",
//     name: "John Doe",
//   },
//   headers: await headers(), // optional but would be useful to get the user IP, user agent, etc.
// });

// await auth.api.verifyEmail({
//   query: {
//     token: "my_token",
//   },
// });

// try {
//   await auth.api.signInEmail({
//     body: {
//       email: "",
//       password: "",
//     },
//   });
// } catch (error) {
//   if (error instanceof APIError) {
//     console.log(error.message, error.status);
//   }
// }
