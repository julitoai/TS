import "../hangman/hangman.css";

export default function Hangman() {
  return (
    <>
      <h1 className="h1-hangman">Hangman</h1>
      <canvas id="myCanvas" width="200" height="100"></canvas>
    </>
  );
}
