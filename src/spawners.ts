import * as utils from '@dcl/ecs-scene-utils'
import { hud } from 'dcl-builder-hud'
import { Enemy } from './enemy'

const spaceships = {
  redSpaceship: new GLTFShape('models/redSpaceship.glb'),
  greenSpaceship: new GLTFShape('models/greenSpaceship.glb'),
  blueSpaceship: new GLTFShape('models/blueSpaceship.glb')
}

// General config
const BASE_SPAWN_TIME = 1500 // In milliseconds
const MAX_TIME_OFFSET = 1500
const POSITION_Z = 30

function spawnEnemy(index: string, x: number, y: number, z: number): void {
  const enemy = new Enemy(
    spaceships[index],
    new Transform({ position: new Vector3(x, y, z),
      rotation: new Quaternion(0,0,0),       
        scale: new Vector3(0.5, 0.5, 0.5) })
  )
}

// Randomise the spawn time
function getRandomSpawnTime(): number {
  return BASE_SPAWN_TIME + Math.random() * MAX_TIME_OFFSET
}

// Spawning from a circle
const circle = {
  radius: .65,
  centerX: 1.2,
  centerY: 1.2
}
const circleSpawner = new Entity()
circleSpawner.addComponent(

  new utils.Interval(getRandomSpawnTime(), () => {
    const randomRadius = circle.radius * Math.sqrt(Math.random())
    const angle = Math.random() * 2 * Math.PI
    const x = circle.centerX + randomRadius * Math.cos(angle)
    const y = circle.centerY + randomRadius * Math.sin(angle)
    new Transform({ rotation: new Quaternion(0,90,0)})
    spawnEnemy('greenSpaceship', 0.2, 12, 7)
    
  })
  )
  engine.addEntity(circleSpawner)
  hud.attachToEntity(circleSpawner)

const circleSpawner2 = new Entity()
circleSpawner2.addComponent(

  new utils.Interval(getRandomSpawnTime(), () => {
    const randomRadius = circle.radius * Math.sqrt(Math.random())
    const angle = Math.random() * 2 * Math.PI
    const x = circle.centerX + randomRadius * Math.cos(angle)
    const y = circle.centerY + randomRadius * Math.sin(angle)
    spawnEnemy('greenSpaceship', 15.8, 12, 10)
    
  })
  )
  engine.addEntity(circleSpawner2)
  hud.attachToEntity(circleSpawner2)

// // Spawning from a triangle
// const triangle = {
//   pointA: new Vector2(3.114, -3.106),
//   pointB: new Vector2(0, 2.289),
//   pointC: new Vector2(-3.114, -3.106),
//   centerX: 16,
//   centerY: 6
// }
// const triangleSpawner = new Entity()
// triangleSpawner.addComponent(
//   new utils.Interval(getRandomSpawnTime(), () => {
//     const r1 = Math.random()
//     const r2 = Math.random()
//     const sqrtR1 = Math.sqrt(r1)
//     const x =
//       triangle.centerX +
//       (1 - sqrtR1) * triangle.pointA.x +
//       sqrtR1 * (1 - r2) * triangle.pointB.x +
//       sqrtR1 * r2 * triangle.pointC.x
//     const y =
//       triangle.centerY +
//       (1 - sqrtR1) * triangle.pointA.y +
//       sqrtR1 * (1 - r2) * triangle.pointB.y +
//       sqrtR1 * r2 * triangle.pointC.y
//     spawnEnemy('greenSpaceship', x, y, POSITION_Z)
//   })
// )
// engine.addEntity(triangleSpawner)

// // Spawning from a rectangle
// const rectangle = {
//   sizeX: 6,
//   sizeY: 6,
//   centerX: 27,
//   centerY: 6
// }
// const rectangleSpawner = new Entity()
// rectangleSpawner.addComponent(
//   new utils.Interval(getRandomSpawnTime(), () => {
//     const x =
//       rectangle.centerX - rectangle.sizeX / 2 + Math.random() * rectangle.sizeX
//     const y =
//       rectangle.centerY - rectangle.sizeY / 2 + Math.random() * rectangle.sizeY
//     spawnEnemy('blueSpaceship', x, y, POSITION_Z)
//   })
// )
// engine.addEntity(rectangleSpawner)