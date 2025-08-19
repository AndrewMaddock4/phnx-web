"use client";
import Header from "@/components/header";
import StyledCodeBlock from "@/components/StyledCodeBlock";
import { useEffect, useState } from "react";

function Page() {
  const [dark, setDark] = useState(null);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    setDark(savedTheme === "dark");
  }, []);

  useEffect(() => {
    if (dark === null) return;

    if (dark) {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  }, [dark]);
  return (
    <main className="flex min-h-screen flex-col items-center bg-[url(/PHNX-bg.png)] bg-center bg-cover">
      <Header dark={dark} setDark={setDark} />
      <div className="fixed inset-0 bg-black/40 z-10 pointer-events-none" aria-hidden="true"></div>
      <section
        id="about-me"
        className=" w-11/12 max-w-4xl mx-auto mt-24 px-6 py-8 bg-white/90 dark:bg-gray-900/90 z-30 rounded-xl shadow flex flex-col items-center"
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Go Error Handling is Good, Actually</h2>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
          I constantly hear complaints that error handling in Go is too verbose, tedious to write, and makes code less readable. These comments have
          become highly parroted, hyperbolic, and quite frankly tiring to read. I find that writing Go with any modern tools is simple, intuitive, and
          maintainable. I also believe that the main competitor, Exception Handling, is the worse of the two systems.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-200">
          In Go, a function that can error will have a return type that is a tuple of both the expected type and the error type. When calling one of
          these functions, you can assign a return and an error variable, then check if the error exists. See the below example from the Go docs.
        </p>
        <StyledCodeBlock
          code={`f, err := os.Open("filename.ext")
if err != nil {
    log.Fatal(err)
}
// do something with the open *File f`}
          language="go"
        />
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
          This may be familiar to some, since it is similar to the Result type in Rust and Swift.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-200">
          The main other way that languages will deal with errors is via Exception Handling,think Try/Catch blocks. Error-prone functions can raise an
          exception, which will short-circuit execution and jump to the exception handler. See the following example from the JavaScript docs.
        </p>
        <StyledCodeBlock
          code={`//...
try {
  // statements to try
  monthName = getMonthName(myMonth); // function could throw exception
} catch (e) {
  monthName = "unknown";
  logMyErrors(e); // pass exception object to error handler (i.e. your own function)
}`}
          language="javascript"
        />
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
          This allows you to continue writing logic without considering which functions could throw an exception.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-200">
          Why do I dislike exception handling? That&apos;s simple; it&apos;s due to the fact that it can and will short-circuit code execution. This
          makes debugging and maintaining code tedious and unclear at times. Take the following example:
        </p>
        <StyledCodeBlock
          code={`//...
try {
    const content = ReadFileSync("path/to/your/file.json", "utf8");
    const object = JSON.parse(content);

    object.existingProperty.push("newVal");
    
    WriteFileSync("path/to/your/file.js", modifiedContent, "utf8");
    }
catch (error) {
    console.error("Error reading or writing file:", error);
}`}
          language="javascript"
        />
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
          If an error occurs, which line caused it? I don&apos;t know! Every one of those lines could throw an exception, and the only way to know is
          to read the details of the error message and find it. It&apos;s fine in a simple example like this, but as codebases grow so do the
          available places for exceptions. Do you really want to spend more time locating your bug than fixing it?
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-200">Compare this to how Golang does it:</p>
        <StyledCodeBlock
          code={`func main() {
    content, err := os.ReadFile("path/to/your/file.json")
    if err != nil {
        fmt.Println("Error reading file:", err)
        return
    }

    var object map[string]interface{}
    if err := json.Unmarshal(content, &object); err != nil {
        fmt.Println("Error parsing JSON:", err)
        return
    }

    modifiedContent, err := json.MarshalIndent(object, "", "  ")
    if err != nil {
        fmt.Println("Error encoding JSON:", err)
        return
    }

    if err := os.WriteFile("path/to/your/file.json", modifiedContent, 0644); err != nil {
        fmt.Println("Error writing file:", err)
        return
    }
}`}
          language="go"
        />
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
          Is this code longer? Yes. Is it safer? Also yes. Before you even get into the details of the error, you can already pinpoint exactly what
          process failed. A code reviewer doesn&apos;t need to know what functions can return an error, because it is explicitly handled or ignored on
          a case-by-case basis. This also reduces the amount that a reviewer&apos;s eyes need to bounce through the screen when finding what could be
          a bug. We already want to reduce if-else statements, why are try-catch statements any different?
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-200">
          I firmly believe that return value based error handling is always better than exception handling. In the modern day, readable and
          maintainable code is more important than minimizing the size of source code by orders of magnitude. Return values reduce the amount of time
          that a reviewer or maintainer needs to figure out exactly what you&apos;re doing, and where you might go wrong.
        </p>
      </section>
    </main>
  );
}

export default Page;
