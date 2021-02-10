export default function Header() {
  const date = new Date();
  const hour = date.getHours();

  function getCurrentTime() {
    if (hour < 13) {
      return "good morning";
    } else if (hour >= 13 && hour < 17) {
      return "good afternoon";
    } else {
      return "good evening";
    }
  }

  return (
    <header className="navbar">
      <h1 style={{color:"orange"}}> {getCurrentTime()} </h1>
      {/* <br />
    <h2>It is currently {`${date.getHours() % 12}:${date.getMinutes()}`} </h2>
      <br /> */}
    </header>
  );
}
