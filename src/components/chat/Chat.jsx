import React, { useState, useRef } from "react";
import "./Chat.css";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDu1EE_qwQA1T1VVRNeIiHnTDlB6_k--v8",
  authDomain: "cookeat-chat.firebaseapp.com",
  projectId: "cookeat-chat",
  storageBucket: "cookeat-chat.appspot.com",
  messagingSenderId: "152795736230",
  appId: "1:152795736230:web:216cdb39fde4cdcc1f2c67",
  // apiKey: "AIzaSyC6D0grOhuSkF_BabvP8j2Y0UULdZKOf2M",
  // authDomain: "chat-try-fe02a.firebaseapp.com",
  // projectId: "chat-try-fe02a",
  // storageBucket: "chat-try-fe02a.appspot.com",
  // messagingSenderId: "198241356483",
  // appId: "1:198241356483:web:619e506f8808a37896b076",
  // measurementId: "G-EP2CRG50F8",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function Chat() {
  const [user] = useAuthState(auth);

  return (
    <div className="Chat">
      <header className="chat-header">
        <button className="chatbutton" onClick={() => auth.signOut()}>
          Sortir du chat
        </button>
      </header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
  function SignIn() {
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    };
    return (
      <button className="chatbutton" onClick={signInWithGoogle}>
        Se connecter au chat
      </button>
    );
  }

  function SignOut() {
    return (
      auth.currentUser && (
        <button className="chatbutton" onClick={() => auth.signOut()}>
          Sortir du chat
        </button>
      )
    );
  }

  function ChatRoom() {
    const dummy = useRef();
    const messagesRef = firestore.collection("messages");
    const query = messagesRef.orderBy("createdAt").limit(50);
    const [messages] = useCollectionData(query, { idField: "id" });
    const [formValue, setFormValue] = useState("");
    const sendMessage = async (e) => {
      e.preventDefault();
      const { uid, photoURL } = auth.currentUser;
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL,
      });
      setFormValue("");

      dummy.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
      <>
        <main className="bodychat">
          {messages &&
            messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
          <div ref={dummy}></div>
        </main>
        <form className="chatform" onSubmit={sendMessage}>
          <input
            className="chatapp"
            placeholder="let's chat"
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
          />
          <button className="chatbutton" type="submit">
            Envoyer
          </button>
        </form>
      </>
    );
  }

  function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
    const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

    return (
      <div className={`message ${messageClass}`}>
        <img className="chatimg" src={photoURL} alt="chatpic" />
        <p className="chat-text">{text}</p>
      </div>
    );
  }
}

export default Chat;
