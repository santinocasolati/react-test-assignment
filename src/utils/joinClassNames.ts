// The function should accept array of CSS class names
// and join it in a single string, splitted by space.
export function joinClassNames(
  classNames: (string | undefined | null)[]
): string {
  
  let finalClass:string = "";

  classNames?.forEach((className) => {
    finalClass += className + " ";
  });

  if (finalClass[finalClass.length - 1] == " ") {
    finalClass = finalClass.substring(0, finalClass.length - 1);
  }
  

  return finalClass;
}
