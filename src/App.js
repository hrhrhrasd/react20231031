import React, { useEffect, useState } from "react";
import axios from "axios";

function App(props) {
  const [customer, setCustomer] = useState({});
  useEffect(() => {
    axios
      .get("/api/main1/sub3")
      .then((response) => response.data)
      .then((data) => setCustomer(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>{customer.customerName}</h1>
      <h1>{customer.address}</h1>
      <h1>{customer.city}</h1>
      <h1>{customer.customerID}</h1>
    </div>
  );
}

export default App;
