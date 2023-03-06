"use client";

export default function GlobalError({
  error,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <head></head>
      <body>
        <h2>Something went wrong!</h2>
        <div>{JSON.stringify(error)}</div>
      </body>
    </html>
  );
}
