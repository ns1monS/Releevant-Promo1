import "./Welcome.css";

export default function Welcome({ name, surname }) {
  return (
    <div className="background">
      <h1>Welcome</h1>
      <h2>
        {name} {surname}
      </h2>
    </div>
  );
}