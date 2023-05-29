import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { SigmadexButton } from "../SigmadexButton";

export function NFT() {
  let { nftAddress } = useParams();
  const [data, setData] = useState({});
  const location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    setData(location.state?.data || {});
  }, []);

  return (
    <div className="row" style={{ marginBottom: 100 }}>
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
        <SigmadexButton buttonText="Go Back" func={() => navigate("/wallet")} />
      </div>
    </div>
  );
}
