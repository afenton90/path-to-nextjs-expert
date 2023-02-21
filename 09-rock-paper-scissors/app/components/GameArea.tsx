"use client";

import { initOptions } from "../settings/options";
import { useEffect } from "react";
import { useRockPaperScissors } from "../hooks/useRockPaperScissors";
import { Choices } from "../types";

interface GameAreaProps {
  gameLengthSeconds: number;
}

export const GameArea = ({ gameLengthSeconds }: GameAreaProps) => {
  useEffect(() => {
    initOptions();
  }, []);

  const {
    onChoiceChange,
    machinePlayerChoice,
    playerChoice,
    play,
    result,
    timeRemaining,
  } = useRockPaperScissors({ gameLengthSeconds });

  return (
    <div>
      <fieldset>
        <legend>Choice</legend>
        <label>
          <span>Rock</span>
          <input
            name="playerChoice"
            value={Choices.ROCK}
            type="radio"
            onChange={onChoiceChange}
          />
        </label>
        <label>
          <span>Paper</span>
          <input
            name="playerChoice"
            value={Choices.PAPER}
            type="radio"
            onChange={onChoiceChange}
          />
        </label>
        <label>
          <span>Scissors</span>
          <input
            name="playerChoice"
            value={Choices.SCISSORS}
            type="radio"
            onChange={onChoiceChange}
          />
        </label>
      </fieldset>
      <button onClick={play}>Play</button>
      <p>
        Machine Choice <b>{machinePlayerChoice}</b>
      </p>
      <p>
        Player Choice <b>{playerChoice}</b>
      </p>
      <p>
        Result: <b>{result}</b>
      </p>
      <div>
        <p>Time Remaining: {timeRemaining} seconds</p>
      </div>
    </div>
  );
};
