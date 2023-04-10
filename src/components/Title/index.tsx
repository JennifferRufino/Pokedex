import { Text } from "./style";

interface TitleProps  {
  text: string;
};

export const Title = (props: TitleProps) => {
  return <Text>{props.text}</Text>;
}

