"use client";

import { useState } from "react";

type Media = { title: string; author: string; src: string };

const currentlyReading: Media[] = [
  { title: "Empire of AI", author: "Karen Hao", src: "/images/books/empire-of-ai.jpg" },
  { title: "The Wind-Up Bird Chronicle", author: "by Haruki Murakami", src: "/images/books/wind-up-bird.jpg" },
];

const booksThatChangedMe: Media[] = [
  { title: "The Idiot", author: "by Fyodor Dostoevsky", src: "/images/books/the-idiot.jpg" },
  { title: "My Beloved World", author: "by Sonia Sotomayor", src: "/images/books/my-beloved-world.jpg" },
  { title: "The Story of a New Name", author: "Elena Ferrante", src: "/images/books/story-of-a-new-name.jpg" },
];

const films: Media[] = [
  { title: "A Beautiful Mind", author: "dir. Ron Howard", src: "/images/films/a-beautiful-mind.jpg" },
  { title: "Inception", author: "dir. Christopher Nolan", src: "/images/films/inception.jpg" },
  { title: "Scent of a Woman", author: "dir. Martin Brest", src: "/images/films/scent-of-a-woman.jpg" },
  { title: "Schindler's List", author: "dir. Steven Spielberg", src: "/images/films/schindlers-list.jpg" },
  { title: "Stepmom", author: "dir. Chris Columbus", src: "/images/films/stepmom.jpg" },
];

const geist: React.CSSProperties = {
  fontFamily: "var(--font-geist-sans), 'Geist Fallback', sans-serif",
  fontSize: "12px",
  fontWeight: 400,
  lineHeight: 1.4,
  letterSpacing: "0",
};

function MediaCard({ item }: { item: Media }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      data-cursor="link"
      style={{ width: "calc((100vw - 457px) / 5)", flexShrink: 0 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "119 / 178",
          border: "1px solid var(--foreground)",
          overflow: "hidden",
        }}
      >
        <img
          src={item.src}
          alt={`${item.title} ${item.author}`}
          loading="lazy"
          decoding="async"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity 300ms cubic-bezier(0.215, 0.61, 0.355, 1)",
          }}
        />
      </div>
      <div
        style={{
          ...geist,
          marginTop: "8px",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.2s ease",
          color: "var(--foreground)",
        }}
        aria-hidden={!hovered}
      >
        <p>{item.title}</p>
        <p>{item.author}</p>
      </div>
    </div>
  );
}

export default function Bookshelf() {
  return (
    <div>
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: 1.5,
          letterSpacing: "0",
          color: "var(--foreground)",
          marginBottom: "24px",
          whiteSpace: "nowrap",
        }}
      >
        All my life, I&apos;ve been deeply moved and shaped by the books I read and the movies I watch. I&apos;d like to share some of my favorites!
      </p>

      <div style={{ display: "flex", gap: "24px", alignItems: "stretch" }}>
        {/* Currently reading */}
        <div>
          <p style={{ ...geist, fontStyle: "italic", fontWeight: 600, marginBottom: "12px" }}>
            currently reading
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {currentlyReading.map((book) => (
              <MediaCard key={book.title} item={book} />
            ))}
          </div>
        </div>

        {/* Divider — starts at the top of the book rectangles */}
        <div
          className="book-divider"
          style={{
            width: "1px",
            height: "calc((100vw - 457px) / 5 * 178 / 119)",
            marginTop: "29px",
            alignSelf: "flex-start",
            background: "rgba(0,0,0,0.15)",
            flexShrink: 0,
          }}
        />

        {/* Books that changed me */}
        <div>
          <p style={{ ...geist, fontStyle: "italic", fontWeight: 600, marginBottom: "12px" }}>
            books that changed me
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {booksThatChangedMe.map((book) => (
              <MediaCard key={book.title} item={book} />
            ))}
          </div>
        </div>
      </div>

      {/* Films */}
      <div style={{ marginTop: "40px" }}>
        <p style={{ ...geist, fontStyle: "italic", fontWeight: 600, marginBottom: "12px" }}>
          films i wish to watch for the first time again
        </p>
        <div style={{ display: "flex", gap: "24px" }}>
          {films.map((film) => (
            <MediaCard key={film.title} item={film} />
          ))}
        </div>
      </div>
    </div>
  );
}
