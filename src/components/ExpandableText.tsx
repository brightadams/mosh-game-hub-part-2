import { Button, Text } from "@chakra-ui/react";
import React, { ReactNode, useState } from "react";

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  if (!children) return null;
  if (children.length < 300) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, limit) + "...";
  return (
    <Text>
      {summary}
      <Button
        size={"xs"}
        fontWeight={"bold"}
        marginLeft={1}
        colorScheme={"yellow"}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
