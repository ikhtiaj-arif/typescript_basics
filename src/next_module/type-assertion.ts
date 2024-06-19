//means ami tmr theke beshi bujhi

let emni: any;

emni = "next lev";

(emni as string).length;

<string>emni.length;

function kgToGram(param: string | number): string | number | undefined {
  if (typeof param === "string") {
    const val = parseFloat(param) * 1000;
    return `Result: ${val}gm`;
  }
  if (typeof param === "number") {
    const val = param * 1000;
    return val;
  }
}

const weight = kgToGram(12) as number
const weightStr = kgToGram("12") as string