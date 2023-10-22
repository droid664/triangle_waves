import p5 from 'p5'
import './style.css'

const LENGTH = Math.floor(innerWidth * 0.15)
let color = 0
let xOffset = []
let yOffset = []
let offset = 0

const sketch = (p) => {
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight)
        p.background(0)
        p.colorMode(p.HSB)
    }
    p.draw = () => {
        p.stroke(0)
        p.strokeWeight(0.5)

        for (let y = -5; y < 30; y++) {
            for (let x = -5; x < 30; x++) {
                let isEven = x % 2

                if (y % 2) {
                    isEven = !isEven
                }

                let pointX1 = x * LENGTH / 2 
                let pointY1 = y * LENGTH - 50
                let pointX2 = pointX1 - LENGTH / 2
                let pointY2 = pointY1 + LENGTH
                let pointX3 = pointX1 + LENGTH / 2
                let pointY3 = pointY1 + LENGTH
                let triangleColor = color + x / 35 * 360 + y / 10 * 360

                if (triangleColor > 360) {
                    triangleColor = triangleColor - 360
                }

                if (isEven) {
                    pointY1 += LENGTH
                    pointY2 -= LENGTH
                    pointY3 -= LENGTH
                }

                p.triangle(pointX1, pointY1, pointX2, pointY2, pointX3, pointY3)
                p.fill(triangleColor, 40, 100)
            }
        }

        color += 1
        color %= 360
    }
}

new p5(sketch)