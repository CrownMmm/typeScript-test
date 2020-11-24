function tsDemo(data) {
  console.log("123");
  // return Math.sqrt(data.x ** 2 + data.y ** 2);
  return Math.sqrt(Math.pow(data.x, 2) + Math.pow(data.y, 2));
}
tsDemo({ x: 1, y: 2 });
