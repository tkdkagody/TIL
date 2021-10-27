function solution(numbers, hand) {
  function getDistance(num, currentL, currentR, keyPad, hand) {
    //현재 왼손위치 & 누르는 숫자의 거리
    const distanceL =
      Math.abs(keyPad[num][0] - keyPad[currentL][0]) +
      Math.abs(keyPad[num][1] - keyPad[currentL][1]);

    //현재 오른손위치 & 누르는 숫자의 거리
    const distanceR =
      Math.abs(keyPad[num][0] - keyPad[currentR][0]) +
      Math.abs(keyPad[num][1] - keyPad[currentR][1]);
    //두 거리가 같다면 hand에 따라서 지정
    if (distanceL === distanceR) {
      return hand === "left" ? "L" : "R";
    } else {
      return distanceL < distanceR ? "L" : "R";
    }

    //다르다면 거리가 가까운 곳에 따라서 지정
  }

  const keyPad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };

  let currentL = "*",
    currentR = "#";
  let result = "";

  for (let num of numbers) {
    if (num % 3 === 1) {
      result = result + "L";
      currentL = num;
    } else if (num % 3 === 0 && num !== 0) {
      result = result + "R";
      currentR = num;
    } else {
      result = result + getDistance(num, currentL, currentR, keyPad, hand);
      result[result.length - 1] === "L" ? (currentL = num) : (currentR = num);
    }
  }
  return result;
}
