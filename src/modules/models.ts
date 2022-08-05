export let birdIdleShape = new GLTFShape('models/bird.glb')
export let birdFlyShape = new GLTFShape('models/bird_fly.glb')
export let sandShape = new GLTFShape('models/sand.glb')
export let glowingBird = new GLTFShape('models/birdSplat.glb')
import { hud } from 'dcl-builder-hud'
import { thirdFloor, thirdParent } from 'src/third'
export {sand}


// preload the animated bird glbs (underground), for faster loading
const birdPreloadDummy = new Entity()      
birdPreloadDummy.addComponent(new Transform({ 
          position: new Vector3(8,-10,0),
          rotation: Quaternion.Euler(0,0,0),
          scale: new Vector3(1,1,1)
        }))        
birdPreloadDummy.addComponent(birdIdleShape )               
engine.addEntity(birdPreloadDummy)
hud.attachToEntity(birdPreloadDummy)


// preload the animated bird glbs (underground), for faster loading
const birdFlyingPreloadDummy = new Entity()      
birdFlyingPreloadDummy.addComponent(new Transform({ 
          position: new Vector3(8,-10,0),
          rotation: Quaternion.Euler(0,0,0),
          scale: new Vector3(1,1,1)
        }))        
        birdFlyingPreloadDummy.addComponent(birdFlyShape )               
engine.addEntity(birdFlyingPreloadDummy)
hud.attachToEntity(birdFlyingPreloadDummy)

const glowingBirdDummy = new Entity()      
glowingBirdDummy.addComponent(new Transform({ 
          position: new Vector3(8,-10,0),
          rotation: Quaternion.Euler(0,0,0),
          scale: new Vector3(1,1,1)
        }))        
        glowingBirdDummy.addComponent(glowingBird)               
engine.addEntity(glowingBirdDummy)
hud.attachToEntity(glowingBirdDummy)




// Add ground terrain
const sand = new Entity( 'sand' )      
sand.addComponent(new Transform({ 
  position: new Vector3(0.520,16.01,-15.92),
  rotation: Quaternion.Euler(0,0,0),
  scale: new Vector3(0.316,0.852,0.663)
}))        
// sand.setParent(thirdParent)
sand.addComponent(sandShape)   
engine.addEntity(sand)
hud.attachToEntity(sand)
