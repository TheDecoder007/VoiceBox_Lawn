import { realDistance } from './modules/utilities'
import { movePlayerTo } from '@decentraland/RestrictedActions'
import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import * as utils from '@dcl/ecs-scene-utils'
import { hud } from 'dcl-builder-hud'
import { insideParent, _scene } from 'src/game'
import { hideGround, hideInside, showGround, poop} from 'src/game'
import { getUserData } from "@decentraland/Identity"
export { thirdParent, thirdFloor, hideThird, showThird, birdControl, BirdController }
import { Poop } from './poop'
import { birdIdleShape, birdFlyShape } from './modules/models'
import { blastBird } from './data'
import {sand} from './modules/models'
// export {sand1}






let thirdParent = new Entity("third floor parent")
thirdParent.addComponent(new Transform({
  position: new Vector3(8,16,0), scale: new Vector3(0,0,0)
}))
engine.addEntity(thirdParent)
hud.attachToEntity(thirdParent)

let thirdFloor = new Entity('third floor')
thirdFloor.addComponent(new PlaneShape())
thirdFloor.setParent(thirdParent)
engine.addEntity(thirdFloor)
thirdFloor.addComponent(new Material()).albedoColor = Color4.Red()
thirdFloor.addComponent(new Transform({ rotation: Quaternion.Euler(90,0,0), scale: new Vector3(15,32,1) }))
hud.attachToEntity(thirdFloor)


let hideThird = new Entity('hideThird')
// hideThird.addComponent(new BoxShape()).withCollisions = false
hideThird.addComponent(new Transform({
  position: new Vector3(8,16,0), scale: new Vector3(16,6,32)
}))
hideThird.addComponent(new AvatarModifierArea({area: { box: new Vector3 (16,6,32) }, modifiers:[AvatarModifiers.HIDE_AVATARS]})),
// {enableDebug:true}
engine.addEntity(hideThird) 
hud.attachToEntity(hideThird)

function showThird(){
    thirdParent.getComponent(Transform).scale.setAll(1)
  sand.getComponent(Transform).scale = new Vector3(0.316,0.852,0.663)

    // onEnterSceneObservable.add(() => {
    //   birdControl.spawnBirds()
    // })


    engine.addEntity(hideGround)
    engine.addEntity(hideInside)
    engine.removeEntity(hideThird)
  
    insideParent.getComponent(Transform).scale.setAll(0)
    _scene.getComponent(Transform).scale.setAll(0)
    // engine.addEntity(hideInside)
    movePlayerTo({x: 8, y:75.5, z:3})
    
  }

  let groundTrigger = new Entity('groundTrigger')
// groundTrigger.addComponent(new BoxShape()).withCollisions = false
groundTrigger.addComponent(new Transform( {position: new Vector3(2.3,0.8,11.8), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(1,1,1)}))
groundTrigger.setParent(thirdParent)
groundTrigger.addComponent(new utils.TriggerComponent(new utils.TriggerBoxShape(new Vector3(2,6,2), new Vector3(-2.3,1.5,0)), {
  enableDebug: false,
  onCameraEnter:()=>{
                showGround()
                
  }
}))
hud.attachToEntity(groundTrigger)


const GreenHouse5 = new Entity('GreenHouse5')
engine.addEntity(GreenHouse5)
GreenHouse5.setParent(thirdParent)
const transform49 = new Transform({
  position: new Vector3(0, -0.7, 12),
  rotation: new Quaternion(0, 180, 0),
  scale: new Vector3(.4,3.3,0.4)
})
GreenHouse5.addComponentOrReplace(transform49)
const gltfshape23 = new GLTFShape("GreenHouse/GreenHouse.glb")
gltfshape23.withCollisions = true
gltfshape23.isPointerBlocker = true
gltfshape23.visible = true
GreenHouse5.addComponentOrReplace(gltfshape23)
hud.attachToEntity(GreenHouse5)

//Third Floor Colliders
let colliderWall20 = new Entity('collider wall 20')
colliderWall20.addComponent(new PlaneShape())
colliderWall20.addComponent(new Transform(
  {position: new Vector3(-7.4,2.7,0), 
    rotation: Quaternion.Euler(0,90,0),
  scale: new Vector3(31.9,6.3,1)}))
colliderWall20.setParent(thirdParent)
colliderWall20.getComponent(PlaneShape).visible = false
// colliderWall20.addComponent(new Material()).albedoColor = Color4.Red()
hud.attachToEntity(colliderWall20)

let colliderWall21 = new Entity('collider wall 21')
colliderWall21.addComponent(new PlaneShape())
colliderWall21.addComponent(new Transform(
  {position: new Vector3(7.4,2.7,0), 
    rotation: Quaternion.Euler(0,90,0),
  scale: new Vector3(31.9,6.3,1)}))
colliderWall21.setParent(thirdParent)
colliderWall21.getComponent(PlaneShape).visible = false
// colliderWall21.addComponent(new Material()).albedoColor = Color4.Red()
hud.attachToEntity(colliderWall21)

let colliderWall22 = new Entity('collider wall 22')
colliderWall22.addComponent(new PlaneShape())
colliderWall22.addComponent(new Transform(
  {position: new Vector3(0,2.7,-15.8), 
    rotation: Quaternion.Euler(0,0,0),
  scale: new Vector3(15,6.3,1)}))
colliderWall22.setParent(thirdParent)
colliderWall22.getComponent(PlaneShape).visible = false
// colliderWall22.addComponent(new Material()).albedoColor = Color4.Red()
hud.attachToEntity(colliderWall22)

let colliderWall23 = new Entity('collider wall 23')
colliderWall23.addComponent(new PlaneShape())
colliderWall23.addComponent(new Transform(
  {position: new Vector3(0,2.7,15.8), 
    rotation: Quaternion.Euler(0,0,0),
  scale: new Vector3(15,6.3,1)}))
colliderWall23.setParent(thirdParent)
colliderWall23.getComponent(PlaneShape).visible = false
// colliderWall23.addComponent(new Material()).albedoColor = Color4.Red()
hud.attachToEntity(colliderWall23)

// FLY BIRDS FLY

// const sand1 = new Entity('sand1')      
// const transform51 = new Transform({ 
//           position: new Vector3(-7.520,0.01,-15.92),
//           rotation: Quaternion.Euler(0,0,0),
//           scale: new Vector3(0.316,0.852,0.663)
//         })      
// sand1.addComponentOrReplace(transform51)
// const sandShape1 = new GLTFShape('models/sand1.glb')
// sand1.addComponentOrReplace(sandShape1)
// sand1.setParent(thirdParent)
// engine.addEntity(sand1)
// hud.attachToEntity(sand1)

// pre loading glowing bird
const glowingBird = new Entity()
engine.addEntity(glowingBird)
glowingBird.addComponent(new GLTFShape('models/birdSplat2.glb'))
glowingBird.addComponent(new Transform())
glowingBird.getComponent(Transform).scale.setAll(0)


// used for raycasting later on to generate bird positions along the terrain collider surface
let physicsCast = PhysicsCast.instance


// used to get player position, player distance to birds etc.
let player = Camera.instance

// a component to store each bird's default idle positions, animation state, and a timer with a random delay
@Component("DistanceBird")
export class DistanceBird {  
  originalPos:Vector3    
  flying:boolean = false
  elapsed:number = Math.random()

  constructor(pos:Vector3){
    this.originalPos = new Vector3(pos.x, pos.y, pos.z)           
  }
}


// System that checks distances to each bird
class ProximitySystem {
  radius:number = 8 // how close you can get to a bird before it reacts
  amplitude:number = 1    
  group = engine.getComponentGroup(Transform, DistanceBird)

  update(dt: number) {

    // iterate through all the birds that have the DistanceBird component
    for (let bird of this.group.entities){

      const transform = bird.getComponent(Transform)
      const birdInfo = bird.getComponent(DistanceBird)      

      // calculate the distance between the player and the birds original position
      let dist = realDistance(birdInfo.originalPos, player.position)

      
      // if the player is within a certain distance from the birds original perching position
      if( dist < this.radius ){     

        // calculate a ratio (0-1) based on how close the player is to the bird and multiply it with a constant to amplify the effect
        let multiplier = ( 1 - dist / this.radius) * this.amplitude

        // calculate the direction pointing from the player to the bird's default position
        let playerDir = birdInfo.originalPos.subtract(player.position)

        // if the bird was idle, change it to flying and replace the GLTF model with the flying one
        if(!birdInfo.flying){
          birdInfo.flying = true
          bird.addComponentOrReplace(birdFlyShape)
        }
        
        // move the bird away from the player on the X and Z axis based on the closeness multiplier
        transform.position = birdInfo.originalPos.add(playerDir.multiplyByFloats(multiplier, 0, multiplier))

        // always move the bird upwards on the Y axis (never downwards) regardless of player direction
        transform.position.y = birdInfo.originalPos.y + 6*multiplier

        // increment the timer stored for each bird and use the sine of this time to wiggle the bird around the actual position calculated above
        birdInfo.elapsed +=dt
        transform.position.x += Math.sin( birdInfo.elapsed * 10) * multiplier
        transform.position.y += Math.sin( birdInfo.elapsed * 8 ) * multiplier
        transform.position.z += Math.sin( birdInfo.elapsed * 11) * multiplier

        // make the flying bird always face the player
        transform.lookAt(player.position)
      }
      // in case the player is farther from the bird than the given radius
      else{

        // make the flying bird change GLTF shape to the idle one
        if(birdInfo.flying){
          birdInfo.flying = false
          bird.addComponentOrReplace(birdIdleShape)

        }
        //make the bird land on its original position
        transform.position.copyFrom(birdInfo.originalPos)
        
      }
    }
  }
}
engine.addSystem(new ProximitySystem())


// class that generates bird starting positions and spawns the birds themselves
class BirdController{

  center:Vector3
  sideLength:number = 20 // size of the area to spawn birds in
  rows:number = 10
  cols:number = 10
  spacing:number = this.sideLength/this.rows
  base:Vector3 = new Vector3(0, 0,-15) 

  constructor(){      

    //set the center of the bird scattering area to the center of the scene
    this.center = new Vector3(8,0,0)    
    
    //set the starting positions of the bird spawn grid to the south-west corner of the spawn area
    this.base = new Vector3(this.center.x - this.sideLength/2, this.center.y, this.center.z - this.sideLength/2) 
  }

  spawnBirds(){

    for(let i=0; i< this.rows; i++){
      for(let j=0; j< this.cols; j++){     

        //generate positions iterating through all rows and columns  and add large random offsets along X an Z (Y will adapt to the terrain later)
        let newPos = new Vector3(
          this.base.x + i* this.spacing + Math.random()*20-10, 
          this.base.y , 
          this.base.z  + j * this.spacing + Math.random()*20-10
          
          ) 

          // create a ray at the X,Z coord of the generated position which starts high up and has a downward direction
          let rayDown: Ray = {
            origin: new Vector3(newPos.x, 20, newPos.z),
            direction: Vector3.Down(),
            distance: 22,
            
          }

          // cast the ray downward and try to intersect it with the terrain's collider
          physicsCast.hitFirst(
            rayDown,
            (e) => {
              if(e.didHit){          
                
                //if we hit the collider set the generated bird position's Y coord to the hitpoint's height
                newPos.y = e.hitPoint.y 
                
                //spawn a bird at the generated and terrain adapted position
                const bird = new Entity()      
                bird.addComponent(new Transform({ 
                  position: newPos,
                  rotation: Quaternion.Euler(0, Math.random()*360,0) 
                }))  
                                 
                // save the bird's original position to the DistanceBird component
                bird.addComponent(new DistanceBird( newPos ))          
                bird.addComponent(birdIdleShape) 

                // bird.getComponent(Transform).scale.setAll(0)
                // bird.addComponent(new utils.Delay(100, () => {

                //   bird.setParent(thirdFloor)  
                                    
                //   }))

                engine.addEntity(bird) 

                
                //  shoot birds
                 bird.addComponent(
                    new OnPointerDown(
                      () => {
                        bird.removeComponent(utils.MoveTransformComponent) // Stop the spaceship
                        glowingBird.getComponent(Transform).scale.setAll(1)
                        glowingBird.getComponent(Transform).position =
                          bird.getComponent(Transform).position
                          engine.removeEntity(bird)
              
                        // Glow for 1/4 of a second before disappearing
                        glowingBird.addComponent(
                          new utils.Delay(250, () => {
                            glowingBird.getComponent(Transform).scale.setAll(0) // Reset glowing spaceship scale
                          })
                        )
                        blastBird.getComponent(AudioSource).playOnce()
                      },
                      {
                        button: ActionButton.POINTER,
                        showFeedback: false,
                        distance: 50
                      }
                    )
                  ) 
            } 
                   
        }            
        )
    }
}
}  
}

let birdControl = new BirdController()

// birdControl.spawnBirds()

// delay bird spawning to only start casting rays on the terrain it's collider is fully loaded
onSceneReadyObservable.add(()=>{
  birdControl.spawnBirds()  
})

