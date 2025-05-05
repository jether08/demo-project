export function addTimestampToString(inputString) {
    const timestamp = Date.now(); // Get current timestamp
    return `${inputString}-${timestamp}`; // Add timestamp to input string
  }