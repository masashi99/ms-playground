type Props = {
  message: string;
};

export function MainPagePresentation(props: Props) {
  return (
    <div>
      <p>{props.message}</p>
    </div>
  );
}
