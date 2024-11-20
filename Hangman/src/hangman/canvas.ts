const canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
if (!canvas) {
  throw new Error("Canvas no encontrado");
}
const ctx = canvas.getContext("2d");
if (!ctx) {
  throw new Error("Error en el contexto");
}

ctx.moveTo(100, 50);
ctx.lineTo(200, 100);
ctx.stroke();
