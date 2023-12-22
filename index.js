const JSDOM = require("jsdom").JSDOM;
const SignaturePad = require("signature_pad");

const getSignatureSvg = (data) => {
  const window = new JSDOM().window;

  const cfg = { url: "http://localhost" };
  const dom = new JSDOM("", cfg);
  global.window = dom.window;
  global.document = dom.window.document;

  Object.keys(global.window).forEach((property) => {
    if (typeof global[property] === "undefined") {
      global[property] = global.window[property];
    }
  });

  global.Element = window.Element;
  global.Image = window.Image;
  // maybe more of: global.Whatever = window.Whatever

  global.navigator = {
    userAgent: "node.js",
  };

  const canvas = window.document.createElement("canvas");
  const signaturePad = new SignaturePad(canvas);

  signaturePad.fromData(
    data.map((x) => ({
      points: x,
    }))
  );
  const svg = signaturePad.toSVG();
  return svg;
};

console.log(
  getSignatureSvg([
    [
      {
        x: 56,
        y: 80.125,
        time: 1701377111750,
        color: "black",
      },
      {
        x: 70,
        y: 70.125,
        time: 1701377111831,
        color: "black",
      },
      {
        x: 83,
        y: 62.125,
        time: 1701377111848,
        color: "black",
      },
      {
        x: 132,
        y: 40.125,
        time: 1701377111865,
        color: "black",
      },
      {
        x: 166,
        y: 31.125,
        time: 1701377111882,
        color: "black",
      },
      {
        x: 188,
        y: 27.125,
        time: 1701377111899,
        color: "black",
      },
      {
        x: 225,
        y: 24.125,
        time: 1701377111916,
        color: "black",
      },
      {
        x: 247,
        y: 23.125,
        time: 1701377111933,
        color: "black",
      },
      {
        x: 258,
        y: 23.125,
        time: 1701377111949,
        color: "black",
      },
      {
        x: 273,
        y: 23.125,
        time: 1701377111965,
        color: "black",
      },
      {
        x: 278,
        y: 23.125,
        time: 1701377111983,
        color: "black",
      },
      {
        x: 285,
        y: 23.125,
        time: 1701377111999,
        color: "black",
      },
      {
        x: 290,
        y: 24.125,
        time: 1701377112050,
        color: "black",
      },
      {
        x: 278,
        y: 23.125,
        time: 1701377111983,
        color: "black",
      },
    ],
  ])
);
