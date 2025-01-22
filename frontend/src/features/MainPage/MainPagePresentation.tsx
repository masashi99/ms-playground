type Props = {
  message: string;
};

export async function MainPagePresentation(props: Props) {
  return (
    <div>
      <p>{props.message}</p>
    </div>
  );
}
