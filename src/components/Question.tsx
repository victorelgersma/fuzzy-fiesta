interface QuestionProps {
  textToDisplay: string;
  onClick: () => void;
}

const Question: React.FC<QuestionProps> = ({
  textToDisplay,
  onClick,
}: QuestionProps) => {
  const style: React.CSSProperties = {
    border: "4px solid white",
    textAlign: "center",
    margin: "50px",
  };
  return (
    <div onClick={onClick} style={style}>
      <p>{textToDisplay}</p>
    </div>
  );
};

export default Question;
