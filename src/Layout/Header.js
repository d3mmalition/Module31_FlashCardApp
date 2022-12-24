import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="jumbotron bg-transparent">
      <div className="container text-black">
        <h1 className="display-4">Flashcard-o-matic</h1>
        <p className="lead font-italic ml-1">Learn with flashcards</p>
      </div>
    </header>
  );
}

export default Header;
