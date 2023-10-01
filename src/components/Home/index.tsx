import { contextStates } from "@/context/UserContext";
import React, { useEffect } from "react";
import NotAuthenticated from "../auth/NotAuthenticated";
import NoteTaker from "./NoteTaker";
import PinnedNotes from "./PinnedNotes";
import UnpinnedNotes from "./UnpinnedNotes";

const Home = () => {
  const { userName } = contextStates();

  return userName ? (
    <div>
      <NoteTaker />
      <PinnedNotes />
      <UnpinnedNotes />
    </div>
  ) : (
    <NotAuthenticated />
  );
};

export default Home;
