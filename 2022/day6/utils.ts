function findMarker(data: string, marker: number): number | undefined {
  for (let i = 0; i < data.length; i++) {
    let isMarker = true;
    for (let j = marker - 1; j > 0; j--) {
      for (let k = j - 1; k >= 0; k--) {
        if (data[i + j] == data[i + k]) {
          isMarker = false;
        }
      }
    }
    if (isMarker === true) {
      return i + marker;
    }
  }
}

export default findMarker;
