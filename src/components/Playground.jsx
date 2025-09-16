import { useState } from "react";

const Playground = () => {
  const [code, setCode] = useState(
`function greet() {
  console.log('Hello, world!')
}
greet();`
  );
  const [output, setOutput] = useState("");

  const runCode = () => {
    try {
      const consoleLog = [];
      const originalLog = console.log;
      console.log = (...args) => {
        consoleLog.push(args.join(" "));
        originalLog(...args);
      };

      // execute
      new Function(code)();

      console.log = originalLog;
      setOutput(consoleLog.join("\n"));
    } catch (err) {
      setOutput(err.toString());
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Live Code Playground</h2>

      <div className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-40 p-3 rounded-lg bg-black text-green-400 font-mono text-sm outline-none"
        />

        <button
          onClick={runCode}
          className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition"
        >
          Run
        </button>

        <pre className="bg-black p-3 rounded-md text-green-400 text-sm overflow-auto">
          {output || "// output will appear here"}
        </pre>
      </div>
    </div>
  );
};

export default Playground;
