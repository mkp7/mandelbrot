function mandelbrot(z, c, i) {
  const xx = z[0] * z[0]
  const yy = z[1] * z[1]
  const xy = z[0] * z[1]

  const nz = [xx - yy + c[0], 2 * xy + c[1]]
  if (xx + yy > 4 || i === 20) {
    return i
  }

  return mandelbrot(nz, c, i + 1)
}

function setup() {
  const width = 900

  createCanvas(width, width)
  background(0)
  noLoop()

  const B = 2
  const boundary = [-B, B]
  const step = boundary[1] / (width / 2)
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < width; j++) {
      const x = boundary[0] + step * i
      const y = boundary[0] + step * j

      const z = [0, 0]
      const c = [x, y]
      const wg = mandelbrot(z, c, 1)

      stroke(255, 255, 255, wg * 5 * 2.55)
      point(i, j)
    }
  }
}
