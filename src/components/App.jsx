import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

// create Entry component
// create props to replace hardcoded data
// Import the Emojipedia const
// Map through the Emojipedia and render the entry components
function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      details={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
