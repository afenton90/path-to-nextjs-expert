"use client";

import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { initOptions } from "./settings/options";
import { useEffect } from "react";
import { useRockPaperScissors } from "./hooks/useRockPaperScissors";
import { Choices } from "./types";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    initOptions();
  }, []);

  const { onChoiceChange, machinePlayerChoice, playerChoice, play } =
    useRockPaperScissors();

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <Link href="/settings" className={styles.card}>
          <h2 className={inter.className}>
            Settings <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Change the rules of the game</p>
        </Link>

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
      </div>
    </main>
  );
}
