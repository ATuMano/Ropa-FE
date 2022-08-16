import { Button, CardActions, CardMedia } from "@material-ui/core";
import * as React from "react";
import { CardItem, TextOverlay } from "./card-styles";

export type AllowedPosition = "center" | "top" | "bottom";

export interface CardItem {
  imageURL: string;
  text: string;
  buttons?: string[];
}

interface ImageCardProps {
  positionText?: AllowedPosition;
  card: CardItem;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  positionText = "center",
  card,
  onClick,
}) => {
  return (
    <CardItem onClick={onClick}>
      <CardMedia component="img" height="100%" image={card.imageURL} />
      {card.text && (
        <TextOverlay positionText={positionText}>{card.text}</TextOverlay>
      )}
      {!!card.buttons && (
        <CardActions>
          {card.buttons.map((button) => (
            <Button size="small">{button}</Button>
          ))}
        </CardActions>
      )}
    </CardItem>
  );
};

export default ImageCard;
