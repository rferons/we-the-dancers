export default {
  random(length) {
    if (!length) {
      length = 6
    }
    return Math.random().toString(16).substring(2, length);
  }
}