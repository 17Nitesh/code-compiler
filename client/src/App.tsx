import { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import LeftPanel from "./components/LeftPanel";
import Output from "./components/Output";
import useCodeEditor from "./hooks/useCodeEditor"
const App = () => {
  const { output, loading, error, execute } = useCodeEditor();
  const [code, setCode] = useState("");

  const [language, setLanguage] = useState("python");

  const handleRun = () => {
    console.log("Running code in", language, "code :", code);
    execute(code, language)
  };

  return (
    <div className="flex w-full h-screen bg-gray-900 text-white overflow-hidden">
      {/* Left Grid Panel */}
      <div className="w-[30%] border-r border-gray-800">
        <LeftPanel />
      </div>

      {/* Right Editor + Output */}
      <div className="flex flex-col w-[70%]">
        {/* Top Panel */}
        <div className="flex justify-between items-center px-4 py-3 bg-gray-900 border-t-2 border-r-2 border-white">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-gray-700 text-white p-2 rounded"
          >
            <option value="python">Python</option>
            <option value="cpp">C++</option>
            <option value="c">C</option>
            <option value="javascript">JavaScript</option>
          </select>

          <div className="font-bold text-2xl">Nit⋅Code</div>

          <button
            onClick={handleRun}
            className="bg-white hover:bg-gray-300 px-4 py-2 rounded text-black"
          >
            Run
          </button>
        </div>

        {/* Code Editor */}
        <div className="flex-1">
          <CodeEditor language={language} code={code} setCode={setCode} />
        </div>

        {/* Output */}
        <div className="h-[30vh] border-t border-gray-700 bg-gray-950">
          <Output loading={loading} error={error} output={output} />
        </div>
      </div>
    </div>
  );
};

export default App;
