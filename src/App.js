import { useState } from "react";
import "./tailwind.config.js";

export default function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Really reconsidering?",
      "Give it one more thought.",
      "Still convinced?",
      "Think it through again.",
      "Final opportunity to change.",
      "Any second thoughts?",
      "Reflect on it once more.",
      "Last chance to rethink.",
      "Absolutely sure about this?",
      "Reevaluating your decision?",
      "Any reservations?",
      "Feeling certain about that?",
      "A moment to reconsider.",
      "One final moment of reflection.",
      "Doubts creeping in?",
      "Any hesitations before finalizing?",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16 container">
      {yesPressed ? (
        <>
          <img src="https://media1.tenor.com/m/_q_DErEEcicAAAAC/otter-love.gif" />
          <div className="text-4xl font-bold my-4 header">Love u Pookie!!!</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDVqZ3NsZHdpd3FsaXNjY2gzeDNhZHR1M3hwcHBybGEwNDNiaXozZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RLG2ZFo3yBMHYXC36F/giphy.gif"
          />
          <h1 className="text-4xl my-4 header">
            Will you be my Valentine Pookie?
          </h1>
          <h2>(Please say yes)</h2>
          <div>
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4 yesbtn`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded nobtn"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
