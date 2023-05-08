import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import DefinitionItem from "../components/DefinitionItem";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hooks/useGame";
import { Platform } from "../entities/Platform";
import CriticScore from "../components/CriticScore";
import { Publisher } from "../entities/Publisher";
import GameAttributes from "../components/GameAttributes";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
    </>
  );
};

export default GameDetailPage;
