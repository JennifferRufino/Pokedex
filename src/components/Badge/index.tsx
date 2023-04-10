import { Container } from "./style"

export type BadgeProps = {
  name: string;
};

export const Badge = (props: BadgeProps) => {
  return (
    <Container className={"type--" + props.name.toLowerCase()} >
      {props.name}
    </Container>
  );
}

