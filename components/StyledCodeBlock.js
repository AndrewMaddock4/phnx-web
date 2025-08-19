import { CodeBlock, dracula } from "react-code-blocks";

function StyledCodeBlock({ code, language }) {
  return <CodeBlock text={code} language={language} showLineNumbers={true} theme={dracula} wrapLines={true} />;
}

export default StyledCodeBlock;
