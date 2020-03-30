export function parseUser(message: string) {
  const regex = /<@(\w+)|\w+>/;
  const match = regex.exec(message);
  return match[1];
}
