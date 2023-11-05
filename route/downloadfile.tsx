import * as elements from "typed-html";

function createAndDownloadFile(fileName: string, content: string): File {
  var downloadUrl = null;
  // Create a blob from the content
 var blob = new Blob([content],{type : "text/plain;charset=utf-8"});
  const b: any = blob;
  //A Blob() is almost a File() - it's just missing the two properties below which we will add
  b.lastModifiedDate = new Date();
  b.name = fileName;

  return b as File;
}
export const downloadElement = (content: string) => {
  return createAndDownloadFile("task.ics", content);
};
