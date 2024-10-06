// import { useEffect, useState } from "react";
// import { ClimbingBoxLoader } from "react-spinners";
// import { useNavigate } from "react-router-dom"; // import useNavigate for redirection

// function Success() {
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Stop loading after 4 seconds
//     const loaderTimer = setTimeout(() => {
//       setLoading(false);
//     }, 4000);

//     // Redirect after 6 seconds
//     const redirectTimer = setTimeout(() => {
//       navigate("/"); 
//     }, 6000);

//     // Cleanup timers when component unmounts
//     return () => {
//       clearTimeout(loaderTimer);
//       clearTimeout(redirectTimer);
//     };
//   }, [navigate]);

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       {loading ? (
//         <ClimbingBoxLoader color="#00CC99" />
//       ) : (
//         <div>
//           <h2 className="text-3xl font-semibold mb-4">Order Successful! ✅</h2>
//           <p>Your order has been successfully placed.</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Success;




import { useEffect, useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";
import { useNavigate } from "react-router-dom"; // import useNavigate for redirection

function Success() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 8000); // Set loading to false after 3 seconds

    setTimeout(() => {
      navigate("/"); 
    }, 9000);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <ClimbingBoxLoader color="#00CC99" />
      ) : (
        <div>
          <h2 className="text-3xl font-semibold mb-4">Order Successful! ✅</h2>
          <p>Your order has been successfully placed</p>
        </div>
      )}
    </div>
  );
}

export default Success;















// import { useEffect, useState } from "react";
// import { ClimbingBoxLoader } from "react-spinners";

// function Success() {
//     const [loading,setLoading]=useState(true);
//     useEffect(()=>{
//       setTimeout(()=>{
//         setLoading(false);
//       },3000);
//     },[]);
//     return(
//         <div className="flex flex-col items-center justify-center h-screen">
//             {
//                 loading ? <ClimbingBoxLoader  color="#00CC99" /> :
//             <div>
//                 <h2 className="text-3xl font-semibold mb-4">Order Successful! ✅</h2>
//                 <p>Yoyr order has been sucessfully placed</p>
//             </div>
//             }
         
//         </div>
//     )
// }
// export default Success;
