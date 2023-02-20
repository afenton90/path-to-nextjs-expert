import { ChangeEvent, useCallback, useState } from "react";
import { Choices } from "../types";

export const useRockPaperScissors = () => {
  const [playerChoice, setPlayerChoice] = useState(-1);
  const [machinePlayerChoice, setMachinePlayerChoice] = useState(-1);

  const onChoiceChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.getAttribute("value");

      if (inputValue) {
        setPlayerChoice(parseInt(inputValue));
      }
    },
    [setPlayerChoice]
  );

  const play = useCallback(() => {
    const min = 0;
    const max = 2;

    const choice = Math.floor(Math.random() * (max - min + 1) + min);
    setMachinePlayerChoice(choice);
  }, [setMachinePlayerChoice]);

  return {
    machinePlayerChoice: Choices[machinePlayerChoice]?.toLowerCase(),
    playerChoice: Choices[playerChoice]?.toLowerCase(),
    result: machinePlayerChoice === playerChoice,
    onChoiceChange,
    play,
  };
};
