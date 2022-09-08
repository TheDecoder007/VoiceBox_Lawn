import * as utils from '@dcl/ecs-scene-utils'
import { hud } from 'dcl-builder-hud'
import { Enemy } from './enemy'
import { _scene } from './game'
// import {_scene} from "./game"

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
      enemy.setParent(_scene)
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
    spawnEnemy('greenSpaceship', 6, 13.5, 15)
    
  })
  )
  engine.addEntity(circleSpawner)
  hud.attachToEntity(circleSpawner)
  circleSpawner.setParent(_scene)

const circleSpawner2 = new Entity()
circleSpawner2.addComponent(
  
  new utils.Interval(getRandomSpawnTime(), () => {
    const randomRadius = circle.radius * Math.sqrt(Math.random())
    const angle = Math.random() * 2 * Math.PI
    const x = circle.centerX + randomRadius * Math.cos(angle)
    const y = circle.centerY + randomRadius * Math.sin(angle)
    spawnEnemy('greenSpaceship', 10, 13.5, 15)
    
  })
  )
  engine.addEntity(circleSpawner2)
  hud.attachToEntity(circleSpawner2)
  circleSpawner2.setParent(_scene)

  