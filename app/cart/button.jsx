export default function Button(props) {
  return (
    <button style={{ backgroundColor: props.color ? props.color : "red", color: "white" }}>버튼</button>
  );
}
