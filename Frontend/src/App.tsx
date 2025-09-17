// import "prismjs/themes/prism-tomorrow.css"
// import Editor from "react-simple-code-editor"
// import prism from "prismjs"
// import Markdown from "react-markdown"
// import rehypeHighlight from "rehype-highlight";
// import "highlight.js/styles/github-dark.css";
// import axios from "axios"
// import { useState } from "react"
import './App.css'

// You will need to import the languages you want to support
// import "prismjs/components/prism-javascript";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/Home";
import TestGeneratorPage from "./components/TestGeneratorPage";

function App() {
//   const [code, setCode] = useState(`function sum(a, b) {
//   return a + b;
// }`);
//   const [review, setReview] = useState(``);
//   const [language, setLanguage] = useState("javascript");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleReviewClick = async () => {
//     setIsLoading(true);

//     try {
//       const response = await axios.post('http://localhost:3000/ai/get-tests',{
//         code
//       });
//       setReview(response.data);
//       console.log(response.data);
//     } catch (error) {
//       console.error("Failed to generate tests:", error);
//       setReview("Failed to generate tests. Please check the server connection.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

  return (
    // <>
    //   <main className='bg-black h-screen w-screen p-[1.5rem] flex gap-[0.7rem]'>
    //     <div className='left p-4 h-full basis-3/6 border border-gray-700 bg-[#000000] relative rounded-lg'>
    //       <select
    //         className='language absolute top-2 right-2 p-1 text-gray-400 text-sm bg-gray-800 border border-gray-600 rounded cursor-pointer'
    //         value={language}
    //         onChange={(e) => setLanguage(e.target.value)}
    //       >
    //         <option value="javascript">javascript</option>
    //       </select>

    //       <div className='code mt-16 max-h-[calc(100vh-14rem)] overflow-y-auto'>
    //         <Editor
    //           value={code}
    //           onValueChange={setCode}
    //           highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
    //           padding={10}
    //           style={{
    //             fontFamily: '"Fira code", "Fira Mono", monospace',
    //             fontSize: 16,
    //             backgroundColor: "#1e1e1e",
    //             color: "#d4d4d4",
    //           }}
    //           className="outline-none focus:ring-2 focus:ring-blue-500"
    //         />
    //       </div>
          
    //       <button disabled={isLoading}
    //         className={`review absolute bottom-[1rem] right-[1rem] py-[0.5rem] px-[2rem] font-medium select-none rounded-full transition-all duration-200 
    //           ${isLoading ? 'bg-gray-600 text-gray-300 cursor-not-allowed' : 'bg-[#DBDBFF] text-[#000000] hover:bg-[#c9c9ff]'}`}
    //         onClick={handleReviewClick}
    //       >
    //         {isLoading ? "Writing Tests..." : "Generate Tests"}
    //       </button>
    //     </div>
        
    //     <div className='right basis-3/6 border border-gray-700 rounded-lg p-4 bg-[#1e1e1e] text-[#d4d4d4] flex flex-col'>
    //       {/* Conditional rendering for the right panel */}
    //       {isLoading ? (
    //         <div className="flex-grow flex items-center justify-center text-gray-400">
    //           <span className="animate-pulse">Generating tests...</span>
    //         </div>
    //       ) : review ? (
    //         <div className="flex-grow overflow-y-auto">
    //           <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
    //         </div>
    //       ) : (
    //         <div className="flex-grow flex items-center justify-center text-gray-500">
    //           <p>Your generated tests will appear here.</p>
    //         </div>
    //       )}
    //     </div>
    //   </main>
    // </>

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test-generator" element={<TestGeneratorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;