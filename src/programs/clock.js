import { useEffect, useState } from "react";

function Clock() {
  const [ss, setss] = useState();
  const [mm, setmm] = useState();
  const [hh, sethh] = useState();

  useEffect(() => {
    let timer = setInterval(() => {
      const date = new Date();
      setss(date.getSeconds());
      if (date.getMinutes() !== mm) {
        setmm(new Date().getMinutes());
      }
      if (date.getHours() !== hh) {
        sethh(new Date().getHours());
      }
    }, 1000);
    () => {
      return clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <div>hh {hh}</div>
      <div>mm {mm}</div>
      <div>ss {ss}</div>
    </div>
  );
}

export default Clock;
