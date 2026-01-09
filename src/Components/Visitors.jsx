import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";

function App() {
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    const incrementVisitor = async () => {
      const counterRef = doc(db, "visitors", "counter");

      const docSnap = await getDoc(counterRef);

      if (docSnap.exists()) {
        // Increment existing counter
        await updateDoc(counterRef, { count: increment(1) });
        setVisitors(docSnap.data().count + 1);
      } else {
        // If document doesn't exist, create it
        await setDoc(counterRef, { count: 1 });
        setVisitors(1);
      }
    };

    incrementVisitor();
  }, []);

  return (
    <div className="App">
      <h1>Welcome to my website!</h1>
      <p>Total Visitors: {visitors}</p>
    </div>
  );
}

export default App;
