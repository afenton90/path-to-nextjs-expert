import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { cookies } from "next/headers";
import { GameArea } from "./components/GameArea";
import { getSettingValue, SettingsOptions } from "./settings/options";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const nextCookies = cookies();

  const gameLengthSeconds = getSettingValue<number>(
    SettingsOptions.GameLength,
    nextCookies
  );

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <Link href="/settings" className={styles.card}>
          <h2 className={inter.className}>
            Settings <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Change the rules of the game</p>
        </Link>

        <GameArea gameLengthSeconds={gameLengthSeconds!} />
      </div>
    </main>
  );
}
