import { useEffect, useState } from "react";

function Home() {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  function handleStart() {
    setStart(true);
  }
  useEffect(() => {
    if (!start) return;
    const interval = setInterval(() => {
      setTime(time + 1);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, [time, start]);
  return (
    <div>
      <h1>{time}</h1>
      <input type="button" value="Start" onClick={handleStart} />
    </div>
  );
}
export default Home;
