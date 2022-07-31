import { realDistance } from './modules/utilities'
import { movePlayerTo } from '@decentraland/RestrictedActions'
import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import * as utils from '@dcl/ecs-scene-utils'
import { hud } from 'dcl-builder-hud'
import { insideParent, _scene } from 'src/game'
import { hideGround, hideInside, showGround, poop} from 'src/game'
import { getUserData } from "@decentraland/Identity"
export { thirdParent, thirdFloor, hideThird, showThird}
import { Poop } from './poop'




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
    engine.addEntity(hideGround)
    engine.addEntity(hideInside)
    engine.removeEntity(hideThird)
  
    insideParent.getComponent(Transform).scale.setAll(0)
    _scene.getComponent(Transform).scale.setAll(0)
    // engine.addEntity(hideInside)
    movePlayerTo({x: 8, y:100.2, z:-14})
  }

  let groundTrigger = new Entity('groundTrigger')
// groundTrigger.addComponent(new BoxShape()).withCollisions = false
groundTrigger.addComponent(new Transform( {position: new Vector3(2.3,0.75,8.3), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(1,1,1)}))
groundTrigger.setParent(thirdParent)
groundTrigger.addComponent(new utils.TriggerComponent(new utils.TriggerBoxShape(new Vector3(2,2,3), new Vector3(-2.3,1.5,0)), {
  enableDebug: false,
  onCameraEnter:()=>{
                showGround()
    // poop.getComponent(Transform).scale.setAll(0)
    // GreenHouse5.addComponent(new utils.ScaleTransformComponent(
    //   new Vector3(.4, 1.5,0.9),
    //   new Vector3(0.01,0.01,0.01),
    //   0.5
    //   ))
    //   groundTrigger.addComponent(new utils.Delay(500, () => {
    //     showGround()
    //   }))
  }
}))
hud.attachToEntity(groundTrigger)


const GreenHouse5 = new Entity('GreenHouse5')
engine.addEntity(GreenHouse5)
GreenHouse5.setParent(thirdParent)
const transform49 = new Transform({
  position: new Vector3(0, -0.7, 10),
  rotation: new Quaternion(0, 180, 0),
  scale: new Vector3(.4,3.3,0.9)
})
GreenHouse5.addComponentOrReplace(transform49)
const gltfshape23 = new GLTFShape("GreenHouse/GreenHouse.glb")
gltfshape23.withCollisions = true
gltfshape23.isPointerBlocker = true
gltfshape23.visible = true
GreenHouse5.addComponentOrReplace(gltfshape23)
hud.attachToEntity(GreenHouse5)