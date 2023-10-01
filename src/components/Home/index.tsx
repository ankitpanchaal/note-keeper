import { useUser } from "@/context/UserContext";
import React, { useEffect } from "react";
import NotAuthenticated from "../auth/NotAuthenticated";
import NoteTaker from "./NoteTaker";
import PinnedNotes from "./PinnedNotes";
import UnpinnedNotes from "./UnpinnedNotes";
import { useQuery } from "@apollo/client";
import { GET_NOTES } from "@/utils/graphql/queries";

const Home = () => {
  const { userName, refetch } = useUser();

  const pinnedResult = useQuery(GET_NOTES, {
    variables: {
      userName: userName,
      pin: true,
    },
    fetchPolicy: "network-only",
  });
  const unpinnedResult = useQuery(GET_NOTES, {
    variables: {
      userName: userName,
      pin: false,
    },
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    pinnedResult.refetch();
    unpinnedResult.refetch();
  }, [refetch]);

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
