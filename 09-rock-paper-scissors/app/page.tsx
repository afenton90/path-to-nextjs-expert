"use client";

import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { initOptions } from "./settings/options";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    initOptions();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <Link href="/settings" className={styles.card}>
          <h2 className={inter.className}>
            Settings <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Change the rules of the game</p>
        </Link>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Deploy <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
