import { CodeBlock, dracula } from "react-code-blocks";

function StyledCodeBlock({ code, language }) {
  return (
    <div className="w-full mx-auto">
      <CodeBlock text={code} language={language} showLineNumbers={true} theme={dracula} wrapLines={true} CodeBlock />;
    </div>
  );
}

export default StyledCodeBlock;
