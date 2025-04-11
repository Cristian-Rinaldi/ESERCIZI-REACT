import { useEffect, useState } from "react";

const Clock = () => {
  const [data, setData] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // const idIterval = setInterval(() => {
    //   setData(new Date().toLocaleTimeString());
    // }, 1000);
    // return () => {
      clearInterval(idIterval);
    };
  }, []);
  return (
    <div>
      <h2>{data}</h2>
    </div>
  );
};
export default Clock;
