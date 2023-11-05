import * as elements from "typed-html";

function createAndDownloadFile(fileName: string, content: string): String {
  // Create a blob from the content
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });

  // Create an object URL for the blob
  const url = URL.createObjectURL(blob);

  return <a href={url} download={fileName} />;
}
export const downloadElement = (content: string) => {
  return createAndDownloadFile("task.ics", content);
};
