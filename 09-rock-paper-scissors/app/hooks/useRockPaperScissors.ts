import { ChangeEvent, useCallback, useRef, useState } from "react";
import { Choices } from "../types";

export enum GameResult {
  PLAYER = "PLAYER",
  MACHINE = "MACHINE",
  DRAW = "DRAW",
}

interface RockPaperScissorsProps {
  gameLengthSeconds: number;
}

export const useRockPaperScissors = ({
  gameLengthSeconds,
}: RockPaperScissorsProps) => {
  const [playerChoice, setPlayerChoice] = useState(-1);
  const [machinePlayerChoice, setMachinePlayerChoice] = useState(-1);
  const [result, setResult] = useState<GameResult>();
  const [timeRemaining, setTimeRemaining] = useState(gameLengthSeconds);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const playerChoiceRef = useRef(playerChoice);
  playerChoiceRef.current = playerChoice;

  const onChoiceChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.getAttribute("value");

      if (inputValue) {
        setPlayerChoice(parseInt(inputValue));
      }
    },
    [setPlayerChoice]
  );

  const decideGame = () => {
    const min = 0;
    const max = 2;

    if (playerChoiceRef.current === -1) {
      setErrorMessage("No choice made!");
      setResult(GameResult.MACHINE);
      return;
    }

    // Get the machine player to make a choice
    const machineChoice = Math.floor(Math.random() * (max - min + 1) + min);
    setMachinePlayerChoice(machineChoice);

    // Rock breaks scissors
    // Paper covers rock
    // Scissors cut paper
    // Or Draw
    if (
      (machineChoice === Choices.ROCK &&
        playerChoiceRef.current == Choices.SCISSORS) ||
      (machineChoice === Choices.PAPER &&
        playerChoiceRef.current === Choices.ROCK) ||
      (machineChoice === Choices.SCISSORS &&
        playerChoiceRef.current === Choices.PAPER)
    ) {
      setResult(GameResult.MACHINE);
    } else if (machineChoice === playerChoiceRef.current) {
      setResult(GameResult.DRAW);
    } else {
      setResult(GameResult.PLAYER);
    }
  };

  const play = () => {
    setErrorMessage("");
    setTimeRemaining(gameLengthSeconds);

    if (gameLengthSeconds) {
      const countdown = setInterval(() => {
        setTimeRemaining((timerValue) => {
          return timerValue! - 1;
        });
      }, 1000);

      setTimeout(() => {
        clearInterval(countdown);
        decideGame();
      }, gameLengthSeconds * 1000);
    }
  };

  return {
    machinePlayerChoice: Choices[machinePlayerChoice]?.toLowerCase(),
    playerChoice: Choices[playerChoice]?.toLowerCase(),
    result,
    onChoiceChange,
    play,
    timeRemaining,
    errorMessage,
    error: !!errorMessage,
  };
};
