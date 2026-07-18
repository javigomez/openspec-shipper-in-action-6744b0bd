export function greeting(name, language) {
  const isSpanish = language === "es";
  const recipient = name?.trim() || (isSpanish ? "mundo" : "world");

  return `${isSpanish ? "Hola" : "Hello"}, ${recipient}!`;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(greeting(process.argv[2], process.argv[3]));
}
