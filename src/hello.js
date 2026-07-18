export function greeting(name, language, shout = false) {
  const isSpanish = language === "es";
  const recipient = name?.trim() || (isSpanish ? "mundo" : "world");
  const message = `${isSpanish ? "Hola" : "Hello"}, ${recipient}!`;

  return shout ? message.toUpperCase() : message;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const shout = args.includes("--shout");
  const [name, language] = args.filter((arg) => arg !== "--shout");

  console.log(greeting(name, language, shout));
}
