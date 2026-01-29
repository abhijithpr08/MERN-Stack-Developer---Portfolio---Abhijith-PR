import React from "react";

interface PageProps {
  params: {
    name: string;
  };
}

const TeamDetailsPage = async ({ params }: PageProps) => {
  const name = params.name;

  return <div>TeamDetailsPage {name}</div>;
};

export default TeamDetailsPage;
