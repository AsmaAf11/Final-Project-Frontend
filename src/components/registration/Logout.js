import React, { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

export default function Logout() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      window.location.replace("http://localhost:3000/login");
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
  };

  if (show) {
    return (
      <Alert
        variant="secondary"
        onClose={() => setShow(false)}
        dismissible
        className="text-center col-md-6 m-auto "
        style={{padding:10}}
      >
        {/* <Alert.Heading>Logout</Alert.Heading> */}
        <div>
          {loading === false && (
            <Fragment>
              <h4 style={{textTransform:'capitalize', paddingBottom:20}}>Are you sure you want to logout?</h4>
              <Button variant="outline-dark" onClick={handleLogout}>
                Logout
              </Button>
            </Fragment>
          )}
        </div>
      </Alert>
    );
  }
  return <></>;
}

//   return (
//     <div>
//       {loading === false && (
//         <Fragment>
//           <h1>Are you sure you want to logout?</h1>
//           <input type="button" value="Logout" onClick={handleLogout} />
//         </Fragment>
//       )}
//     </div>
//   );
// }
