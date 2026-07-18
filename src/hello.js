export function greeting(name) {
  const recipient = name?.trim() || "world";

  return `Hello, ${recipient}!`;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(greeting(process.argv[2]));
}
