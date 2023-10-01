"use client";
import Home from "@/components/Home";
import GetIn from "@/components/auth/GetIn";
import { useUser } from "@/context/UserContext";
import client from "@/utils/graphql/client";
import { ApolloProvider } from "@apollo/client";
import React from "react";
import { Toaster } from "react-hot-toast";

const page = () => {
  const { userName } = useUser();

  return (
    <>
      <Toaster />
      <ApolloProvider client={client}>
        {userName ? (
          <div>
            <Home />
          </div>
        ) : (
          <div>
            <GetIn />
          </div>
        )}
      </ApolloProvider>
    </>
  );
};

export default page;
