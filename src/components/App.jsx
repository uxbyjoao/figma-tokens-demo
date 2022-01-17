import Button from "./Button/Button";

// import tokens from "../../tokens/input/_site.json";

function App() {
  return (
    <div
      style={{
        margin: "0 auto",
        maxWidth: "900px",
        minHeight: "100vh",
        paddingTop: "100px",
        // We consume a theme from the raw JSON file here
        // backgroundColor: tokens.theme.colors.background,
      }}
    >
      <div
        style={{
          display: "inline-flex",
          gap: "20px",
        }}
      >
        <Button type="primary">This button uses SASS</Button>
        <Button type="secondary">This button also uses SASS</Button>
      </div>
    </div>
  );
}

export default App;
