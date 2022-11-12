export function classNames(...names) {
  return names.filter((name) => typeof name == 'string').join(' ');
}
