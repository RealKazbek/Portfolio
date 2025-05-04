import React from "react";

function Quote() {
  return (
    <section className="relative mt-14 md:mt-28 flex justify-end">
      <span className="absolute inline-block w-23 h-23 border border-[var(--gray)] mt-7 mr-[-80px] lg:mr-[-30px]"></span>
      <blockquote
        cite="https://chatgpt.com/"
        className="relative px-4 md:px-0 md:max-w-[712px] mx-auto flex flex-col items-end text-xl"
      >
        <p
          className="border p-8 border-[var(--gray)] font-medium
        before:content-['❛❛'] before:absolute before:-top-5 before:font-medium before:text-6xl before:text-[var(--gray)] before:bg-[var(--background)] before:bg-size-[100%_40%] before:bg-no-repeat
        after:content-['❟❟'] after:absolute after:bottom-12 after:right-8 md:after:right-4 after:font-medium after:text-6xl after:text-[var(--gray)] after:bg-[var(--background)] after:bg-size-[100%_40%] after:bg-no-repeat"
        >
          Any fool can write code that a computer can understand. Good
          programmers write code that humans can understand.
        </p>
        <footer className="border p-4 border-[var(--gray)]">
          — Martin Fowler
        </footer>
      </blockquote>
    </section>
  );
}

Quote.displayName = "Quote";

export default Quote;
