import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

export function NFT() {
  let { nftAddress } = useParams();
  const [data, setData] = useState({});
  const location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    setData(location.state?.data || {});
  }, []);

  /* 
      title: "No Penalties",
    status: "Owned",
    image: "",
    amount: 1,
    gradient: "to bottom left, #FADD46, #FFB547 ",
    address: "0x0000000000000000000000000000000000000000",
  */

  return (
    <div className="row">
      <div className="col-lg-8 offset-lg-2">
        <h1>NFT</h1>
        <h3>NFT address: {nftAddress}</h3>
        <div
          style={{
            background: `linear-gradient(${data.gradient})`,
            height: 300,
          }}
        ></div>
        <p>Title: {data.title}</p>
        <p>Amount: {data.amount}</p>
        <button onClick={() => navigate("/wallet")}>Go back</button>
      </div>
    </div>
  );
}
