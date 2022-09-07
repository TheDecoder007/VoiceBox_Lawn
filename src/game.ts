import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../ff9257ec-9d62-404f-97c7-cf19c4035761/src/item"
import * as utils from '@dcl/ecs-scene-utils'
import { hud } from 'dcl-builder-hud'
import { explosionSound, blastBird, ChoasCocaine, DeadIntro, Detective, DoYouDare, GodVoice, HeavenMade, Octopus, PaperHands, RobotQuest, StormComing, YouAreDiamond } from './data'
import { Sound } from './sound'
import { getUserData } from "@decentraland/Identity"
//for bird fly
import { birdIdleShape, birdFlyShape } from './modules/models'
import { realDistance } from './modules/utilities'
import { movePlayerTo, triggerEmote } from '@decentraland/RestrictedActions'
import { Color3 } from 'node_modules/decentraland-ecs/dist/index'
export { _scene }
import { Poop } from './poop'
export { insideParent }
export { hideGround, hideInside, showGround, poop}
import { hideThird, thirdParent, showThird } from 'src/third'
import { DanceSystem, danceAreas, PredefinedEmote } from './danceArea'
let sandShape = new GLTFShape('models/sand.glb')
export { avatar1, avatarShape1 }

 

const billboard = new Billboard(false, true, false)
//VOICE BOX VOICE BOX VOICE BOX

let myBlackButton = new GLTFShape('2e1c4446-c99a-4698-9e13-819d232ca849/models/Black_Fantasy_Button.glb')
// const myBlackButtonClip = new AnimationState('trigger', { looping: false })
const messageBus = new MessageBus()

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const murpheusnickeditd1 = new Entity('murpheusnickeditd1')
engine.addEntity(murpheusnickeditd1)
murpheusnickeditd1.setParent(_scene)
if (!murpheusnickeditd1.hasComponent(Billboard)) murpheusnickeditd1.addComponent(billboard)

const transform2 = new Transform({
  position: new Vector3(8, 6.3, 4),
  rotation: new Quaternion(1.04254907e-14, -1, 1.19209261e-7, 0.000002220273),
  scale: new Vector3(1.5, 2, 1.5)
})
murpheusnickeditd1.addComponentOrReplace(transform2)
const gltfShape = new GLTFShape("2d8fafc8-3b0c-4f5e-8e25-ab17d0ac26dc/Murpheus nickedit3D.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
murpheusnickeditd1.addComponentOrReplace(gltfShape)
hud.attachToEntity(murpheusnickeditd1)


const blackbutton3 = new Entity('blackbutton3')
engine.addEntity(blackbutton3)
blackbutton3.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(2.279,0,10.474),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 3, 2)
})
blackbutton3.addComponentOrReplace(transform3)

blackbutton3.addComponent(myBlackButton)
hud.attachToEntity(blackbutton3)
blackbutton3.addComponent(new Animator())
blackbutton3.getComponent(Animator).addClip(new AnimationState('trigger', { looping: false }))
blackbutton3.addComponent(
  new OnPointerDown(
    () => { 
      
    messageBus.emit('click', {entity: 'blackbutton3'})
      Detective.playOnce()
    },
    {
      button: ActionButton.POINTER,
      hoverText: 'Detective',
      distance: 6,
    }
  )
)

const blackbutton4 = new Entity('blackbutton4')
engine.addEntity(blackbutton4)
blackbutton4.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(4.679,0,12.974),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 3, 2)
})
blackbutton4.addComponentOrReplace(transform32)

blackbutton4.addComponent(myBlackButton)
hud.attachToEntity(blackbutton4)
blackbutton4.addComponent(new Animator())
blackbutton4.getComponent(Animator).addClip(new AnimationState('trigger', { looping: false }))
blackbutton4.addComponent(
  new OnPointerDown(
    () => {
      
    messageBus.emit('click', {entity: 'blackbutton4'})
      DeadIntro.playOnce()
    },
    {
      button: ActionButton.POINTER,
      hoverText: 'Dead Intro',
      distance: 6,
    }
  )
)

const blackbutton5 = new Entity('blackbutton5')
engine.addEntity(blackbutton5)
blackbutton5.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(11.079,0,13.074),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 3, 2)
})
blackbutton5.addComponentOrReplace(transform33)

blackbutton5.addComponent(myBlackButton)
hud.attachToEntity(blackbutton5)
blackbutton5.addComponent(new Animator())
blackbutton5.getComponent(Animator).addClip(new AnimationState('trigger', { looping: false }))
blackbutton5.addComponent(
  new OnPointerDown(
    () => {
      
    messageBus.emit('click', {entity: 'blackbutton5'})
      YouAreDiamond.playOnce()
    },
    {
      button: ActionButton.POINTER,
      hoverText: 'Diamond Hands',
      distance: 6,
    }
  )
)

const murpheusnickeditd3 = new Entity('murpheusnickeditd3')
engine.addEntity(murpheusnickeditd3)
murpheusnickeditd3.setParent(_scene)
if (!murpheusnickeditd3.hasComponent(Billboard)) murpheusnickeditd3.addComponent(billboard)
const transform4 = new Transform({
  position: new Vector3(8, 4.6, 0.5),
  rotation: new Quaternion(1.04254907e-14, -1, 1.19209261e-7, 0.000002220273),
  scale: new Vector3(0.49999994, 1, 0.49999994)
})
murpheusnickeditd3.addComponentOrReplace(transform4)
const gltfShape2 = new GLTFShape("2d8fafc8-3b0c-4f5e-8e25-ab17d0ac26dc/Murpheus nickedit3D.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
murpheusnickeditd3.addComponentOrReplace(gltfShape2)
hud.attachToEntity(murpheusnickeditd3)




const murpheustext = new Entity('murpheustext')
engine.addEntity(murpheustext)
murpheustext.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(7.8, 16.4, 15.3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(24.9, 23.5, 1)
})
murpheustext.addComponentOrReplace(transform5)
const gltfShape3 = new GLTFShape("c935e005-716e-47fe-9df0-b7fe8eaffb7f/Murpheus text.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
murpheustext.addComponentOrReplace(gltfShape3)
hud.attachToEntity(murpheustext)


const murpheusnickeditd4 = new Entity('murpheusnickeditd4')
engine.addEntity(murpheusnickeditd4)
murpheusnickeditd4.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(0.3, 8.07, 8.8),
  rotation: new Quaternion(1.74724919e-15, -0.707106, 8.429359e-8, 0.7071076),
  scale: new Vector3(11.690567, 12.3055487, 1.00000024)
})
murpheusnickeditd4.addComponentOrReplace(transform6)
const gltfShape4 = new GLTFShape("2d8fafc8-3b0c-4f5e-8e25-ab17d0ac26dc/Murpheus nickedit3D.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
murpheusnickeditd4.addComponentOrReplace(gltfShape4)
hud.attachToEntity(murpheusnickeditd4)


const blackbutton6 = new Entity('blackbutton6')
engine.addEntity(blackbutton6)
blackbutton6.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(7.99,0,13.837),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 3, 2)
})
blackbutton6.addComponentOrReplace(transform7)

blackbutton6.addComponent(myBlackButton)
hud.attachToEntity(blackbutton6)
blackbutton6.addComponent(new Animator())
blackbutton6.getComponent(Animator).addClip(new AnimationState('trigger', { looping: false }))
blackbutton6.addComponent(
  new OnPointerDown(
    () => {
      
    messageBus.emit('click', {entity: 'blackbutton6'})
      ChoasCocaine.playOnce()
    },
    {
      button: ActionButton.POINTER,
      hoverText: 'Chaos',
      distance: 6,
    }
  )
)

const blackbutton7 = new Entity('blackbutton7')
engine.addEntity(blackbutton7)
blackbutton7.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(3.255,0,3.401),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 3, 2)
})
blackbutton7.addComponentOrReplace(transform8)

blackbutton7.addComponent(myBlackButton)
hud.attachToEntity(blackbutton7)
blackbutton7.addComponent(new Animator())
blackbutton7.getComponent(Animator).addClip(new AnimationState('trigger', { looping: false }))
blackbutton7.addComponent(
  new OnPointerDown(
    () => {
      
    messageBus.emit('click', {entity: 'blackbutton7'})
      PaperHands.playOnce()
    },
    {
      button: ActionButton.POINTER,
      hoverText: 'Paper Hands',
      distance: 6,
    }
  )
)

const blackbutton8 = new Entity('blackbutton8')
engine.addEntity(blackbutton8)
blackbutton8.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(1.861,0.089,6.928),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 3, 2)
})
blackbutton8.addComponentOrReplace(transform9)

blackbutton8.addComponent(myBlackButton)
hud.attachToEntity(blackbutton8)
blackbutton8.addComponent(new Animator())
blackbutton8.getComponent(Animator).addClip(new AnimationState('trigger', { looping: false }))
blackbutton8.addComponent(
  new OnPointerDown(
    () => {
      
    messageBus.emit('click', {entity: 'blackbutton8'})
      StormComing.playOnce()
    },
    {
      button: ActionButton.POINTER,
      hoverText: 'Category 5',
      distance: 6,
    }
  )
)

const blackbutton9 = new Entity('blackbutton9')
engine.addEntity(blackbutton9)
blackbutton9.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(12.051,0,3.141),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 3, 2)
})
blackbutton9.addComponentOrReplace(transform10)

blackbutton9.addComponent(myBlackButton)
hud.attachToEntity(blackbutton9)
blackbutton9.addComponent(new Animator())
blackbutton9.getComponent(Animator).addClip(new AnimationState('trigger', { looping: false }))
blackbutton9.addComponent(
  new OnPointerDown(
    () => {
      
    messageBus.emit('click', {entity: 'blackbutton9'})
      RobotQuest.playOnce()
    },
    {
      button: ActionButton.POINTER,
      hoverText: 'Docile Robot',
      distance: 6,
    }
  )
)

const blackbutton10 = new Entity('blackbutton10')
engine.addEntity(blackbutton10)
blackbutton10.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(13.573,0,10.433),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 3, 2)
})
blackbutton10.addComponentOrReplace(transform11)

blackbutton10.addComponent(myBlackButton)
hud.attachToEntity(blackbutton10)
blackbutton10.addComponent(new Animator())
blackbutton10.getComponent(Animator).addClip(new AnimationState('trigger', { looping: false }))
blackbutton10.addComponent(
  new OnPointerDown(
    () => {
      
    messageBus.emit('click', {entity: 'blackbutton10'})
      HeavenMade.playOnce()
    },
    {
      button: ActionButton.POINTER,
      hoverText: 'Heaven Made',
      distance: 6,
    }
  )
)

const blackbutton11 = new Entity('blackbutton11')
engine.addEntity(blackbutton11)
blackbutton11.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(13.865,0,6.252),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 3, 2)
})
blackbutton11.addComponentOrReplace(transform12)

blackbutton11.addComponent(myBlackButton)
hud.attachToEntity(blackbutton11)
blackbutton11.addComponent(new Animator())
blackbutton11.getComponent(Animator).addClip(new AnimationState('trigger', { looping: false }))
blackbutton11.addComponent(
  new OnPointerDown(
    () => {
      
    messageBus.emit('click', {entity: 'blackbutton11'})
      Octopus.playOnce()
    },
    {
      button: ActionButton.POINTER,
      hoverText: 'Octopus',
      distance: 6,
    }
  )
)

const irishglowjpegspikes = new Entity('irishglowjpegspikes')
engine.addEntity(irishglowjpegspikes)
irishglowjpegspikes.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0.00000166893, 0.707106, 0.707107663, 0.00000171363354),
  scale: new Vector3(14.3, 13.4, 4.0)
})
irishglowjpegspikes.addComponentOrReplace(transform13)
const gltfShape5 = new GLTFShape("models/Irish glow3D.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
irishglowjpegspikes.addComponentOrReplace(gltfShape5)
hud.attachToEntity(irishglowjpegspikes)


const murpheusnickeditd5 = new Entity('murpheusnickeditd5')
engine.addEntity(murpheusnickeditd5)
murpheusnickeditd5.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(15.59, 8.07, 8.77),
  rotation: new Quaternion(3.55271368e-15, 0.707106, -8.429359e-8, 0.707107544),
  scale: new Vector3(11.6905394, 12.31, 1)
})
murpheusnickeditd5.addComponentOrReplace(transform14)
const gltfShape6 = new GLTFShape("2d8fafc8-3b0c-4f5e-8e25-ab17d0ac26dc/Murpheus nickedit3D.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
murpheusnickeditd5.addComponentOrReplace(gltfShape6)
hud.attachToEntity(murpheusnickeditd5)


const murpheusnickeditd6 = new Entity('murpheusnickeditd6')
engine.addEntity(murpheusnickeditd6)
murpheusnickeditd6.setParent(_scene)
if (!murpheusnickeditd6.hasComponent(Billboard)) murpheusnickeditd6.addComponent(billboard)
const transform19 = new Transform({
  position: new Vector3(8, 5.1, 1.5),
  rotation: new Quaternion(1.04254907e-14, -1, 1.19209261e-7, 0.000002220273),
  scale: new Vector3(0.99999994, 1.5, 0.5)
})
murpheusnickeditd6.addComponentOrReplace(transform19)
const gltfShape7 = new GLTFShape("2d8fafc8-3b0c-4f5e-8e25-ab17d0ac26dc/Murpheus nickedit3D.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
murpheusnickeditd6.addComponentOrReplace(gltfShape7)
hud.attachToEntity(murpheusnickeditd6)


const murpheusnickeditd = new Entity('murpheusnickeditd')
engine.addEntity(murpheusnickeditd)
murpheusnickeditd.setParent(_scene)
if (!murpheusnickeditd.hasComponent(Billboard)) murpheusnickeditd.addComponent(billboard)
const transform20 = new Transform({
  position: new Vector3(8, 7.8, 6.5),
  rotation: new Quaternion(1.04254907e-14, -1, 1.19209261e-7, 0.000002220273),
  scale: new Vector3(2.5, 3, 1.00000024)
})
murpheusnickeditd.addComponentOrReplace(transform20)
const gltfShape8 = new GLTFShape("2d8fafc8-3b0c-4f5e-8e25-ab17d0ac26dc/Murpheus nickedit3D.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
murpheusnickeditd.addComponentOrReplace(gltfShape8)
hud.attachToEntity(murpheusnickeditd)

const murpheusnickeditd2 = new Entity('murpheusnickeditd2')
engine.addEntity(murpheusnickeditd2)
murpheusnickeditd2.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(7.93, 8, 15.8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(12.96, 12.3, 1)
})
murpheusnickeditd2.addComponentOrReplace(transform22)
const gltfShape10 = new GLTFShape("2d8fafc8-3b0c-4f5e-8e25-ab17d0ac26dc/Murpheus nickedit3D.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
murpheusnickeditd2.addComponentOrReplace(gltfShape10)
hud.attachToEntity(murpheusnickeditd2)


const murpheustext2 = new Entity('murpheustext2')
engine.addEntity(murpheustext2)
murpheustext2.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(8.3, 16.5, 15.7),
  rotation: new Quaternion(-1.78957835e-14, -1, 1.19209261e-7, 0.00000235438347),
  scale: new Vector3(24.1, 21.5, 1)
})
murpheustext2.addComponentOrReplace(transform23)
const gltfShape11 = new GLTFShape("c935e005-716e-47fe-9df0-b7fe8eaffb7f/Murpheus text.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
murpheustext2.addComponentOrReplace(gltfShape11)
hud.attachToEntity(murpheustext2)


const murpheusnickeditd7 = new Entity('murpheusnickeditd7')
engine.addEntity(murpheusnickeditd7)
murpheusnickeditd7.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(0.42, 8, 9),
  rotation: new Quaternion(-2.49791846e-14, 0.7071124, -8.429433e-8, 0.7071013),
  scale: new Vector3(9.999991, 11.5, 0.5000007)
})
murpheusnickeditd7.addComponentOrReplace(transform24)
const gltfShape12 = new GLTFShape("2d8fafc8-3b0c-4f5e-8e25-ab17d0ac26dc/Murpheus nickedit3D.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
murpheusnickeditd7.addComponentOrReplace(gltfShape12)
hud.attachToEntity(murpheusnickeditd7)


const murpheusnickeditd8 = new Entity('murpheusnickeditd8')
engine.addEntity(murpheusnickeditd8)
murpheusnickeditd8.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(8, 10.9, 15.4),
  rotation: new Quaternion(1.04254907e-14, -1, 1.19209261e-7, 0.000002220273),
  scale: new Vector3(7.2, 8.7, 1)
})
murpheusnickeditd8.addComponentOrReplace(transform29)
const gltfShape13 = new GLTFShape("2d8fafc8-3b0c-4f5e-8e25-ab17d0ac26dc/Murpheus nickedit3D.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
murpheusnickeditd8.addComponentOrReplace(gltfShape13)
hud.attachToEntity(murpheusnickeditd8)


const murpheusnickeditd9 = new Entity('murpheusnickeditd9')
engine.addEntity(murpheusnickeditd9)
murpheusnickeditd9.setParent(_scene)
if (!murpheusnickeditd9.hasComponent(Billboard)) murpheusnickeditd9.addComponent(billboard)
const transform30 = new Transform({
  position: new Vector3(8, 9.5, 10),
  rotation: new Quaternion(1.04254907e-14, -1, 1.19209261e-7, 0.000002220273),
  scale: new Vector3(4.5, 4.5, 1.00000024)
})
murpheusnickeditd9.addComponentOrReplace(transform30)
const gltfShape14 = new GLTFShape("2d8fafc8-3b0c-4f5e-8e25-ab17d0ac26dc/Murpheus nickedit3D.glb")
gltfShape14.withCollisions = true
gltfShape14.isPointerBlocker = true
gltfShape14.visible = true
murpheusnickeditd9.addComponentOrReplace(gltfShape14)
hud.attachToEntity(murpheusnickeditd9)


const murpheusnickeditd10 = new Entity('murpheusnickeditd10')
engine.addEntity(murpheusnickeditd10)
murpheusnickeditd10.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(15.5, 8, 8),
  rotation: new Quaternion(7.10542736e-15, 0.7071029, -8.429319e-8, -0.707110643),
  scale: new Vector3(9.999971, 11.5, 0.499999285)
})
murpheusnickeditd10.addComponentOrReplace(transform31)
const gltfShape15 = new GLTFShape("2d8fafc8-3b0c-4f5e-8e25-ab17d0ac26dc/Murpheus nickedit3D.glb")
gltfShape15.withCollisions = true
gltfShape15.isPointerBlocker = true
gltfShape15.visible = true
murpheusnickeditd10.addComponentOrReplace(gltfShape15)
hud.attachToEntity(murpheusnickeditd10)





// script1.spawn(blackbutton, {}, createChannel(channelId, blackbutton, channelBus))

let trigger = new Entity("voice trigger")
trigger.addComponent(new Transform({position: new Vector3(8,0,5), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(1,1,1)}))
trigger.addComponent(new utils.TriggerComponent(new utils.TriggerBoxShape(new Vector3(15, 5, 20),new Vector3(0, 0, 0)),
{

  enableDebug:false,
  onCameraEnter:()=>{
    GodVoice.playOnce()
  
    engine.removeEntity(trigger)
  }
}
))
trigger.setParent(_scene)
//attatches builder tool to entity(trigger, button, etc)
hud.attachToEntity(trigger)

//adding 3d models to scene 
let email= new Entity('emails')
email.addComponent(new GLTFShape('models/voice_email.glb'))
email.addComponent(new Transform({
  position: new Vector3(8, -0.20, 15.5),
  rotation: new Quaternion(NaN, 180, 0, 1),
  scale: new Vector3(21, 21, 2)
})) 
email.setParent(_scene)
hud.attachToEntity(email)


messageBus.on('click', (pkg:any) => {
  log('message bus message from', pkg.entity)
  const clip = getEntityByName(pkg.entity).getComponent(Animator).getClip('trigger')
    clip.stop()
    clip.play()
})

export const getEntityByName = (name: string) =>
  Object.keys(engine.entities)
    .map((key) => engine.entities[key])
    .filter((entity) => (entity as Entity).name === name)[0]



//FRONT LAWN FRONT LAWN FRONT LAWN


const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape16 = new GLTFShape("6b33f46e-9667-45e5-bd90-85f372ee2490/CityTile.glb")
gltfShape16.withCollisions = true
gltfShape16.isPointerBlocker = true
gltfShape16.visible = true
entity.addComponentOrReplace(gltfShape16)
const transform34 = new Transform({
  position: new Vector3(8, 0, -8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform34)

const lastSlicePizzaBox = new Entity('lastSlicePizzaBox')
engine.addEntity(lastSlicePizzaBox)
lastSlicePizzaBox.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(8.4, 0.03, -13.5),
  rotation: new Quaternion(0.2, 0.20526227355003357, 0.6766590476036072, 0.6766590476036072),
  scale: new Vector3(0.415, 0.25, 0.27)
})
lastSlicePizzaBox.addComponentOrReplace(transform35)
hud.attachToEntity(lastSlicePizzaBox)


const gltfShape17 = new GLTFShape("4d5ab1ac-99b6-4a4f-8317-4f3f8e8df33a/last_slice_pizza_box.glb")
gltfShape17.withCollisions = true
gltfShape17.isPointerBlocker = true
gltfShape17.visible = true
lastSlicePizzaBox.addComponentOrReplace(gltfShape17)

const neatDRotating = new Entity('neatDRotating')
engine.addEntity(neatDRotating)
neatDRotating.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(14.4, 2.65, -14.2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.25, 1)
})
neatDRotating.addComponentOrReplace(transform36)
hud.attachToEntity(neatDRotating)
const gltfShape18 = new GLTFShape("43b77ce0-07eb-493f-8c21-c091815984c7/NEAT_3D_rotating.glb")
gltfShape18.withCollisions = true
gltfShape18.isPointerBlocker = true
gltfShape18.visible = true
neatDRotating.addComponentOrReplace(gltfShape18)

const neatDRotating2 = new Entity('neatDRotating2')
engine.addEntity(neatDRotating2)
neatDRotating2.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(1.6, 2.65, -14.2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.25, 1)
})
neatDRotating2.addComponentOrReplace(transform37)
hud.attachToEntity(neatDRotating2)
const gltfShape19 = new GLTFShape("43b77ce0-07eb-493f-8c21-c091815984c7/NEAT_3D_rotating.glb")
gltfShape19.withCollisions = true
gltfShape19.isPointerBlocker = true
gltfShape19.visible = true
neatDRotating2.addComponentOrReplace(gltfShape19)


const GreenHouse = new Entity('GreenHouse')
engine.addEntity(GreenHouse)
GreenHouse.setParent(_scene)
const transform39 = new Transform({
  position: new Vector3(8, 0, 7.6),
  rotation: new Quaternion(0, 180, 0),
  scale: new Vector3(0.19, 0.28, 0.5)
})
GreenHouse.addComponentOrReplace(transform39)
const gltfshape20 = new GLTFShape("GreenHouse/GreenHouse.glb")
gltfshape20.withCollisions = true
gltfshape20.isPointerBlocker = true
gltfshape20.visible = true
GreenHouse.addComponentOrReplace(gltfshape20)
hud.attachToEntity(GreenHouse)

let houseTrigger = new Entity('houseTrigger')
// houseTrigger.addComponent(new BoxShape())
houseTrigger.addComponent(new Transform( {position: new Vector3(10.2,0,5), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(1,1,1)}))
houseTrigger.setParent(_scene)
houseTrigger.addComponent(new utils.TriggerComponent(new utils.TriggerBoxShape(new Vector3(14.5,12,17), new Vector3(-2.3,1.5,0)), {
  enableDebug: false,
  onCameraEnter:()=>{
    GreenHouse.addComponent(new utils.ScaleTransformComponent(
      new Vector3(0.19,0.28,0.5),
      new Vector3(0.4,0.8,1.3),
      0.5
      ));
    },
  onCameraExit:()=> {
    GreenHouse.addComponent(new utils.ScaleTransformComponent(
      new Vector3(0.4,0.8,1.3),
      new Vector3(0.19,0.28,0.5),
      0.5
      ));
    },
  
  }))
hud.attachToEntity(houseTrigger)

let upTrigger = new Entity('upTrigger')
// houseTrigger.addComponent(new BoxShape())
upTrigger.addComponent(new Transform( {position: new Vector3(10.3,0,2), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(1,1,1)}))
upTrigger.setParent(_scene)
upTrigger.addComponent(new utils.TriggerComponent(new utils.TriggerBoxShape(new Vector3(2,3,1), new Vector3(-2.3,1.5,0)), {
    enableDebug: false,
         onCameraEnter: ()=>{

             showInside()

          // const transform = new Transform({
          //   position: new Vector3(6, 0, 0),
          //   rotation: new Quaternion(0, 0, 0, 1),
          //   scale: new Vector3(1, 1, 1)
          // })
          // _scene.addComponentOrReplace(transform)

          //  _scene.addComponent(new utils.ScaleTransformComponent(
          //    new Vector3(1,1,1),
          //    new Vector3(0.1,0.1,0.1),
          //    3
          //    ))
            
             //  _scene.addComponent(new Transform( {position: new Vector3(8,0,0)}))
            // _scene.setParent(Attachable.AVATAR)
            // upTrigger.addComponent(new utils.Delay(5000, () => {
              
            // }))
}}))
hud.attachToEntity(upTrigger)


// CODE FOR PORTAL UPSTAIRS ON FANTASY CHEST
// GreenHouse.addComponent(new utils.TriggerComponent(new utils.TriggerBoxShape(
//   new Vector3(4, 5, 1)), {
//     enableDebug: true,
//     onCameraEnter: ()=>{
//         showInside()
//       }}))

const fantasyChest = new Entity('fantasyChest')
engine.addEntity(fantasyChest)
fantasyChest.setParent(_scene)
const transform38 = new Transform({
  position: new Vector3(8, 0.1, -7),
  rotation: new Quaternion(0,180,NaN),
  scale: new Vector3(1.000000238418579, 1, 1.000000238418579)
})
fantasyChest.addComponentOrReplace(transform38)
hud.attachToEntity(fantasyChest)


const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
script1.init()
script1.spawn(fantasyChest, {"onClickText":"Open/Close","onClick":[{"entityName":"fantasyChest","actionId":"toggle","values":{}}]}, createChannel(channelId, fantasyChest, channelBus))


      
      //grows chest by 5 over 3 seconds. need original scale, new scale, time period
      //     fantasyChest.addComponent(new utils.ScaleTransformComponent(
      //         new Vector3(1,1,1),
      //         new Vector3(5,5,5),
      //         3
      // ))}}))


      //CODE FOR UPSTAIRS 

  // HIDE AVATAR AREAS 
  let hideGround = new Entity('hideGround')
  // hideGround.addComponent(new BoxShape()).withCollisions = false
  hideGround.addComponent(new Transform({
    position: new Vector3(8,0,0), scale: new Vector3(16,8,32)
  }))
  hideGround.addComponent(new AvatarModifierArea({area: { box: new Vector3 (16,8,32)}, modifiers:[AvatarModifiers.HIDE_AVATARS]}))
//engine.addEntity(hideGround)
hud.attachToEntity(hideGround)

let hideInside = new Entity('hideInside')
// hideInside.addComponent(new BoxShape()).withCollisions = false
hideInside.addComponent(new Transform({
  position: new Vector3(8,8,0), scale: new Vector3(16,6,32)
}))
hideInside.addComponent(new AvatarModifierArea({area: { box: new Vector3 (16,6,32) }, modifiers:[AvatarModifiers.HIDE_AVATARS]})),
// {enableDebug:true}
engine.addEntity(hideInside) 
hud.attachToEntity(hideInside)







// let visibleWall = new Entity('visible wall')
// visibleWall.addComponent(new GLTFShape(""))
// visibleWall.addComponent(new Transform({position: new Vector3(0,0,0)}))
// visibleWall.setParent(parent)


//inside area
let insideParent = new Entity("red area parent")
insideParent.addComponent(new Transform({
  position: new Vector3(8,8,0), scale: new Vector3(0,0,0)
}))
engine.addEntity(insideParent)
hud.attachToEntity(insideParent)

let insideFloor = new Entity('inside floor')
insideFloor.addComponent(new PlaneShape())
insideFloor.setParent(insideParent)
engine.addEntity(insideFloor)
insideFloor.addComponent(new Material()).albedoColor = Color4.Red()
insideFloor.addComponent(new Transform({ rotation: Quaternion.Euler(90,0,0), scale: new Vector3(15,30,1) }))
// const gltfShape20 = new GLTFShape("6b33f46e-9667-45e5-bd90-85f372ee2490/CityTile.glb")
// gltfShape20.withCollisions = true
// gltfShape20.isPointerBlocker = true
// gltfShape20.visible = true

// insideFloor.addComponentOrReplace(gltfShape20)
// const transform41 = new Transform({
//   position: new Vector3(0, 0, 0),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// insideFloor.addComponentOrReplace(transform41)
hud.attachToEntity(insideFloor)



// let insideBuilding = new Entity()
// insideBuilding.addComponent(new GLTFShape("models/Chest_Fantasy.glb"))
// insideBuilding.addComponent(new Transform())
// insideBuilding.setParent(insideParent)
// hud.attachToEntity(insideBuilding)

let thirdTrigger = new Entity('thirdTrigger')
// thirdTrigger.addComponent(new BoxShape())
thirdTrigger.addComponent(new Transform( {position: new Vector3(2.3,0.75,8.3), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(1,1,1)}))
thirdTrigger.setParent(insideParent)
thirdTrigger.addComponent(new utils.TriggerComponent(new utils.TriggerBoxShape(new Vector3(2,2,3), new Vector3(-2.3,1.5,0)), {
  enableDebug: false,
  onCameraEnter:()=>{
    poop.getComponent(Transform).scale.setAll(0)
    GreenHouse4.addComponent(new utils.ScaleTransformComponent(
      new Vector3(.4, 1.5,0.9),
      new Vector3(0.01,0.01,0.01),
      0.5
      ))
      thirdTrigger.addComponent(new utils.Delay(500, () => {
        showThird()
        
      }))
  }
}))
hud.attachToEntity(thirdTrigger)

//code for showInside/showGround for moving player/hiding land
// _scene replaces groundAreaParent
function showInside() {
  _scene.getComponent(Transform).scale.setAll(0)
  thirdParent.getComponent(Transform).scale.setAll(0)
  engine.addEntity(hideGround)
  engine.addEntity(hideThird)

  insideParent.getComponent(Transform).scale.setAll(1)
  // engine.removeEntity(hideInside)
  movePlayerTo({x: 8, y:8.3, z:-12.5})
}

function showGround(){
  _scene.getComponent(Transform).scale.setAll(1)
  engine.removeEntity(hideGround)

  insideParent.getComponent(Transform).scale.setAll(0)
  thirdParent.getComponent(Transform).scale.setAll(0)
  // engine.addEntity(hideInside)
  movePlayerTo({x: 8, y:1, z:-2})
}

//UPSTAIRS WALL COLLIDERS
let colliderWall = new Entity('collider wall')
colliderWall.addComponent(new PlaneShape())
colliderWall.addComponent(new Transform(
  {position: new Vector3(-7.4,1.3,0), 
    rotation: Quaternion.Euler(0,90,0),
  scale: new Vector3(30,2.3,1)}))
colliderWall.setParent(insideParent)
colliderWall.getComponent(PlaneShape).visible = false
// colliderWall.addComponent(new Material()).albedoColor = Color4.Red()
hud.attachToEntity(colliderWall)

let colliderWall2 = new Entity('collider wall2')
colliderWall2.addComponent(new PlaneShape())
colliderWall2.addComponent(new Transform(
  {position: new Vector3(7.4,1.3,0), 
    rotation: Quaternion.Euler(0,90,0),
  scale: new Vector3(30,2.3,1)}))
colliderWall2.setParent(insideParent)
colliderWall2.getComponent(PlaneShape).visible = false
// colliderWall2.addComponent(new Material()).albedoColor = Color4.Red()
hud.attachToEntity(colliderWall2)

let colliderWall3 = new Entity('collider wall3')
colliderWall3.addComponent(new PlaneShape())
colliderWall3.addComponent(new Transform(
  {position: new Vector3(0,1.3,-15), 
    rotation: Quaternion.Euler(0,0,0),
  scale: new Vector3(15,2.3,1)}))
colliderWall3.setParent(insideParent)
colliderWall3.getComponent(PlaneShape).visible = false
// colliderWall3.addComponent(new Material()).albedoColor = Color4.Red()
hud.attachToEntity(colliderWall3)

let colliderWall4 = new Entity('collider wall4')
colliderWall4.addComponent(new PlaneShape())
colliderWall4.addComponent(new Transform(
  {position: new Vector3(0,1.3,15), 
    rotation: Quaternion.Euler(0,0,0),
  scale: new Vector3(15,2.3,1)}))
colliderWall4.setParent(insideParent)
colliderWall4.getComponent(PlaneShape).visible = false
// colliderWall4.addComponent(new Material()).albedoColor = Color4.Red()
hud.attachToEntity(colliderWall4)

let colliderWall5 = new Entity('collider wall5')
colliderWall5.addComponent(new PlaneShape())
colliderWall5.addComponent(new Transform(
  {position: new Vector3(-4.6,1.3,-11), 
    rotation: Quaternion.Euler(0,0,0),
  scale: new Vector3(5,2.3,1)}))
colliderWall5.setParent(insideParent)
colliderWall5.getComponent(PlaneShape).visible = false
// colliderWall5.addComponent(new Material()).albedoColor = Color4.Red()
hud.attachToEntity(colliderWall5)

let colliderWall6 = new Entity('collider wall6')
colliderWall6.addComponent(new PlaneShape())
colliderWall6.addComponent(new Transform(
  {position: new Vector3(4.6,1.3,-11), 
    rotation: Quaternion.Euler(0,0,0),
  scale: new Vector3(5,2.3,1)}))
colliderWall6.setParent(insideParent)
colliderWall6.getComponent(PlaneShape).visible = false
// colliderWall6.addComponent(new Material()).albedoColor = Color4.Red()
hud.attachToEntity(colliderWall6)

let colliderWall7 = new Entity('collider wall7')
colliderWall7.addComponent(new PlaneShape())
colliderWall7.addComponent(new Transform(
  {position: new Vector3(0,2.6,-10), 
    rotation: Quaternion.Euler(90,0,0),
  scale: new Vector3(14,5.3,1)}))
colliderWall7.setParent(insideParent)
colliderWall7.getComponent(PlaneShape).visible = false
// colliderWall7.addComponent(new Material()).albedoColor = Color4.Red()
hud.attachToEntity(colliderWall7)

let colliderWall8 = new Entity('collider wall8')
colliderWall8.addComponent(new PlaneShape())
colliderWall8.addComponent(new Transform(
  {position: new Vector3(0,4,4), 
    rotation: Quaternion.Euler(90,0,0),
  scale: new Vector3(14,18,1)}))
colliderWall8.setParent(insideParent)
colliderWall8.getComponent(PlaneShape).visible = false
// colliderWall8.addComponent(new Material()).albedoColor = Color4.Red()
hud.attachToEntity(colliderWall8)

let colliderWall9 = new Entity('collider wall9')
colliderWall9.addComponent(new PlaneShape())
colliderWall9.addComponent(new Transform(
  {position: new Vector3(-5.2,2.3,-4), 
    rotation: Quaternion.Euler(0,0,0),
  scale: new Vector3(4.5,4,1)}))
colliderWall9.setParent(insideParent)
colliderWall9.getComponent(PlaneShape).visible = false
// colliderWall9.addComponent(new Material()).albedoColor = Color4.Red()
hud.attachToEntity(colliderWall9)

let colliderWall10 = new Entity('collider wall10')
colliderWall10.addComponent(new PlaneShape())
colliderWall10.addComponent(new Transform(
  {position: new Vector3(5.2,2.3,-4), 
    rotation: Quaternion.Euler(0,0,0),
  scale: new Vector3(4.5,4,1)}))
colliderWall10.setParent(insideParent)
colliderWall10.getComponent(PlaneShape).visible = false
// colliderWall10.addComponent(new Material()).albedoColor = Color4.Red()
hud.attachToEntity(colliderWall10)

const wolf = new Entity('wolf')
engine.addEntity(wolf)
wolf.setParent(insideParent)
const transform45 = new Transform({
  position: new Vector3(3.4, 0.1, 8.3),
  rotation: new Quaternion(0, 180, 0,),
  scale: new Vector3(.5, .5, .5)
})
wolf.addComponentOrReplace(transform45)
hud.attachToEntity(wolf)
const gltfShape27 = new GLTFShape("models/Wolfglb.glb")
gltfShape27.withCollisions = true
gltfShape27.isPointerBlocker = true 
gltfShape27.visible = true
wolf.addComponentOrReplace(gltfShape27)

      

const wolf2 = new Entity('wolf2')
engine.addEntity(wolf2)
wolf2.setParent(insideParent)
const transform46 = new Transform({
  position: new Vector3(-3.8, 0.1, 8.1),
  rotation: new Quaternion(0, 180, 0,),
  scale: new Vector3(.5, .5, .5)
})
wolf2.addComponentOrReplace(transform46)
hud.attachToEntity(wolf2)
const gltfShape28 = new GLTFShape("models/Wolfglb.glb")
gltfShape28.withCollisions = true
gltfShape28.isPointerBlocker = true 
gltfShape28.visible = true
wolf2.addComponentOrReplace(gltfShape28)



//left side
const glossyaethereatiles = new Entity('glossyaethereatiles')
engine.addEntity(glossyaethereatiles)
glossyaethereatiles.setParent(insideParent)
const transform21 = new Transform({
  position: new Vector3(-7.4, 3.2, 0.39), 
  rotation: Quaternion.Euler(0, 0, 90,),
  scale: new Vector3(0.4, 0.6, 1.92)

})
glossyaethereatiles.addComponentOrReplace(transform21)
const gltfShape9 = new GLTFShape("6b33f46e-9667-45e5-bd90-85f372ee2490/CityTile.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
glossyaethereatiles.addComponentOrReplace(gltfShape9)
hud.attachToEntity(glossyaethereatiles)

//right side
const glossyaethereatiles2 = new Entity('glossyaethereatiles2')
engine.addEntity(glossyaethereatiles2)
glossyaethereatiles2.setParent(insideParent)
const transform40 = new Transform({
  position: new Vector3(7.4, 3.2, 0.47),
  rotation: Quaternion.Euler(0, 0, -90,),
  scale: new Vector3(0.4, 0.6, 1.931)

})
glossyaethereatiles2.addComponentOrReplace(transform40)
const gltfShape22 = new GLTFShape("6b33f46e-9667-45e5-bd90-85f372ee2490/CityTile.glb")
gltfShape22.withCollisions = true
gltfShape22.isPointerBlocker = true
gltfShape22.visible = true
glossyaethereatiles2.addComponentOrReplace(gltfShape22)
hud.attachToEntity(glossyaethereatiles2)

//floor
const glossyaethereatiles3 = new Entity('glossyaethereatiles3')
engine.addEntity(glossyaethereatiles3)
glossyaethereatiles3.setParent(insideParent)
const transform41 = new Transform({
  position: new Vector3(0, 0.06, 7),
  rotation: Quaternion.Euler(0, 0, 0,),
  scale: new Vector3(0.93, 1, 1)

})
glossyaethereatiles3.addComponentOrReplace(transform41)
const gltfShape23 = new GLTFShape("6b33f46e-9667-45e5-bd90-85f372ee2490/CityTile.glb")
gltfShape23.withCollisions = true
gltfShape23.isPointerBlocker = true
gltfShape23.visible = true
glossyaethereatiles3.addComponentOrReplace(gltfShape23)
hud.attachToEntity(glossyaethereatiles3)

//floor 2
const glossyaethereatiles4 = new Entity('glossyaethereatiles4')
engine.addEntity(glossyaethereatiles4)
glossyaethereatiles4.setParent(insideParent)
const transform42 = new Transform({
  position: new Vector3(0, 0.06, -8),
  rotation: Quaternion.Euler(0, 0, 0,),
  scale: new Vector3(0.93, 1, 0.88)

})
glossyaethereatiles4.addComponentOrReplace(transform42)
const gltfShape24 = new GLTFShape("6b33f46e-9667-45e5-bd90-85f372ee2490/CityTile.glb")
gltfShape24.withCollisions = true
gltfShape24.isPointerBlocker = true
gltfShape24.visible = true
glossyaethereatiles4.addComponentOrReplace(gltfShape24)
hud.attachToEntity(glossyaethereatiles4)

//entry side
const glossyaethereatiles5 = new Entity('glossyaethereatiles5')
engine.addEntity(glossyaethereatiles5)
glossyaethereatiles5.setParent(insideParent)
const transform43 = new Transform({
  position: new Vector3(0, 3.16, -15),
  rotation: Quaternion.Euler(-90, 0, 0,),
  scale: new Vector3(0.93, 0.4, 0.4)

})
glossyaethereatiles5.addComponentOrReplace(transform43)
const gltfShape25 = new GLTFShape("6b33f46e-9667-45e5-bd90-85f372ee2490/CityTile.glb")
gltfShape25.withCollisions = true
gltfShape25.isPointerBlocker = true
gltfShape25.visible = true
glossyaethereatiles5.addComponentOrReplace(gltfShape25)
hud.attachToEntity(glossyaethereatiles5)

//exit side
const glossyaethereatiles6 = new Entity('glossyaethereatiles6')
engine.addEntity(glossyaethereatiles6)
glossyaethereatiles6.setParent(insideParent)
const transform44 = new Transform({
  position: new Vector3(0, 3.16, 15),
  rotation: Quaternion.Euler(90, 0, 0,),
  scale: new Vector3(0.93, 0.4, 0.4)

})
glossyaethereatiles6.addComponentOrReplace(transform44)
const gltfShape26 = new GLTFShape("6b33f46e-9667-45e5-bd90-85f372ee2490/CityTile.glb")
gltfShape26.withCollisions = true
gltfShape26.isPointerBlocker = true
gltfShape26.visible = true
glossyaethereatiles6.addComponentOrReplace(gltfShape26)
hud.attachToEntity(glossyaethereatiles6)

//upstairs greenhouses

const GreenHouse2 = new Entity('GreenHouse2')
engine.addEntity(GreenHouse2)
GreenHouse2.setParent(insideParent)
const transform47 = new Transform({
  position: new Vector3(0, 0.1, -11.7),
  rotation: new Quaternion(0, 0, 0),
  scale: new Vector3(0.43, 0.62, 0.72)
})
GreenHouse2.addComponentOrReplace(transform47)
const gltfshape21 = new GLTFShape("GreenHouse/GreenHouse.glb")
gltfshape21.withCollisions = true
gltfshape21.isPointerBlocker = true
gltfshape21.visible = true
GreenHouse2.addComponentOrReplace(gltfshape21)
hud.attachToEntity(GreenHouse2)

const GreenHouse3 = new Entity('GreenHouse3')
engine.addEntity(GreenHouse3)
GreenHouse3.setParent(insideParent)
const transform48 = new Transform({
  position: new Vector3(0, -0.3, 5),
  rotation: new Quaternion(0, 180, 0),
  scale: new Vector3(1.71, 2.0, 2.2)
})
GreenHouse3.addComponentOrReplace(transform48)
const gltfshape22 = new GLTFShape("GreenHouse/GreenHouse.glb")
gltfshape22.withCollisions = true
gltfshape22.isPointerBlocker = true
gltfshape22.visible = true
GreenHouse3.addComponentOrReplace(gltfshape22)
hud.attachToEntity(GreenHouse3)

const GreenHouse4 = new Entity('GreenHouse4')
engine.addEntity(GreenHouse4)
GreenHouse4.setParent(insideParent)
const transform49 = new Transform({
  position: new Vector3(0, -0.3, 10),
  rotation: new Quaternion(0, 180, 0),
  scale: new Vector3(.4, 0.7,0.9)
})
GreenHouse4.addComponentOrReplace(transform49)
const gltfshape23 = new GLTFShape("GreenHouse/GreenHouse.glb")
gltfshape23.withCollisions = true
gltfshape23.isPointerBlocker = true
gltfshape23.visible = true
GreenHouse4.addComponentOrReplace(gltfshape23)
hud.attachToEntity(GreenHouse4)


let wolfTrigger = new Entity('wolfTrigger')
// wolfTrigger.addComponent(new BoxShape())
wolfTrigger.addComponent(new Transform( {position: new Vector3(2,0,3.3), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(1,1,1)}))
wolfTrigger.setParent(insideParent)
wolfTrigger.addComponent(new utils.TriggerComponent(new utils.TriggerBoxShape(new Vector3(14.5,6,14), new Vector3(-2.3,1.5,0)), {
  enableDebug: false,
  onCameraEnter:()=>{
    wolf.addComponent(new utils.ScaleTransformComponent(
      new Vector3(.65, .65, .65),
      new Vector3(2,2,2),
      0.5
))
wolf2.addComponent(new utils.ScaleTransformComponent(
new Vector3(.65, .65, .65),
new Vector3(2,2,2),
0.5
))
// ; engine.removeEntity(wolfTrigger)
},
  onCameraExit: ()=> {
    wolf.addComponent(new utils.ScaleTransformComponent(
      new Vector3(2,2,2),
      new Vector3(.65, .65, .65),
      0.5
))
wolf2.addComponent(new utils.ScaleTransformComponent(
  new Vector3(2,2,2),
new Vector3(.65, .65, .65),
0.5
))}}))
hud.attachToEntity(wolfTrigger)

let GreenTrigger = new Entity('GreenTrigger')
// GreenTrigger.addComponent(new BoxShape())
GreenTrigger.addComponent(new Transform( {position: new Vector3(2,0,3.3), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(1,1,1)}))
GreenTrigger.setParent(insideParent)
GreenTrigger.addComponent(new utils.TriggerComponent(new utils.TriggerBoxShape(new Vector3(14.5,6,14), new Vector3(-2.3,1.5,0)), {
  enableDebug: false,
  onCameraEnter:()=>{
GreenHouse4.addComponent(new utils.ScaleTransformComponent(
  new Vector3(.4, 0.7,0.9),
  new Vector3(.4,1.5,0.9),
  0.5
  ))},
onCameraExit:()=> {
  GreenHouse4.addComponent(new utils.ScaleTransformComponent(
    new Vector3(.4,1.5,0.9),
    new Vector3(.4, 0.7,0.9),
    0.5
    ))
}}))
hud.attachToEntity(GreenTrigger)


// let whiteSplat= new Entity('whiteSplat')   
// whiteSplat.addComponent(new GLTFShape('models/birdSplat2.glb'))
// whiteSplat.addComponent(new Transform({
//   position: new Vector3(8, 1, -4),
//   rotation: new Quaternion( 0, 0, 0),
//   scale: new Vector3(1, 1, 1)
// }))
// whiteSplat.setParent(_scene)
// hud.attachToEntity(whiteSplat)


//CODE FOR MIRROR
// const stand = new Entity();
// stand.addComponent(new BoxShape());
// stand.addComponent(new Transform({ position: new Vector3(8.0, -0, 10.3),
//   rotation: new Quaternion(0,180,0),
//   scale: new Vector3(0.8, 0.1, 0.9) }));
// engine.addEntity(stand);

// const avatar = new Entity();
// const avatarShape = new AvatarShape();
// // hud.attachToEntity(stand)


// avatarShape.bodyShape = "urn:decentraland:off-chain:base-avatars:BaseFemale";
// avatarShape.wearables = [
//   "urn:decentraland:off-chain:base-avatars:f_sweater",
//   "urn:decentraland:off-chain:base-avatars:f_jeans",
//   "urn:decentraland:off-chain:base-avatars:bun_shoes",
//   "urn:decentraland:off-chain:base-avatars:standard_hair",
//   "urn:decentraland:off-chain:base-avatars:f_eyes_00",
//   "urn:decentraland:off-chain:base-avatars:f_eyebrows_00",
//   "urn:decentraland:off-chain:base-avatars:f_mouth_00",
// ];
// avatarShape.skinColor = new Color4(0.94921875, 0.76171875, 0.6484375, 1);
// avatarShape.eyeColor = new Color4(0.23046875, 0.625, 0.3125, 1);
// avatarShape.hairColor = new Color4(0.234375, 0.12890625, 0.04296875, 1);
// avatar.addComponent(avatarShape);
// avatar.addComponent(new Transform({ position: new Vector3(1.3, 0, -2.3),
//   rotation: new Quaternion(0,180,0),
//   scale: new Vector3(2,2,2) }));
// engine.addEntity(avatar);
// if (!avatar.hasComponent(Billboard)) avatar.addComponent(billboard)
// hud.attachToEntity(avatar) 
 

// void getUserData().then(async a => {
//   const res = await fetch(`https://peer.decentraland.org/lambdas/profiles/${a?.publicKey}`)
//   const json = await res.json()
//   const av = json.avatars[0].avatar
//   avatarShape.bodyShape = av.bodyShape
//   avatarShape.skinColor = new Color4(av.skin.color.r, av.skin.color.g, av.skin.color.b, 1);
//   avatarShape.eyeColor = new Color4(av.eyes.color.r, av.eyes.color.g, av.eyes.color.b, 1);
//   avatarShape.hairColor = new Color4(av.hair.color.r, av.hair.color.g, av.hair.color.b, 1);
//   avatarShape.wearables = av.wearables

// })

//MIRROR 2


// const avatar2 = new Entity();
// const avatarShape2 = new AvatarShape();


// avatarShape2.bodyShape = "urn:decentraland:off-chain:base-avatars:BaseFemale";
// avatarShape2.wearables = [
//   "urn:decentraland:off-chain:base-avatars:f_sweater",
//   "urn:decentraland:off-chain:base-avatars:f_jeans",
//   "urn:decentraland:off-chain:base-avatars:bun_shoes",
//   "urn:decentraland:off-chain:base-avatars:standard_hair",
//   "urn:decentraland:off-chain:base-avatars:f_eyes_00",
//   "urn:decentraland:off-chain:base-avatars:f_eyebrows_00",
//   "urn:decentraland:off-chain:base-avatars:f_mouth_00",
// ];
// avatarShape2.skinColor = new Color4(0.94921875, 0.76171875, 0.6484375, 1);
// avatarShape2.eyeColor = new Color4(0.23046875, 0.625, 0.3125, 1);
// avatarShape2.hairColor = new Color4(0.234375, 0.12890625, 0.04296875, 1);
// avatar2.addComponent(avatarShape2);
// avatar2.addComponent(new Transform({ position: new Vector3(14.3,  0, -2.3),
//   rotation: new Quaternion(0,180,0),
//   scale: new Vector3(2,2,2) }));
// engine.addEntity(avatar2);
// if (!avatar2.hasComponent(Billboard)) avatar2.addComponent(billboard)
// hud.attachToEntity(avatar2)



// void getUserData().then(async a => {
//   const res = await fetch(`https://peer.decentraland.org/lambdas/profiles/${a?.publicKey}`)
//   const json = await res.json()
//   const av = json.avatars[0].avatar
//   avatarShape2.bodyShape = av.bodyShape
//   avatarShape2.skinColor = new Color4(av.skin.color.r, av.skin.color.g, av.skin.color.b, 1);
//   avatarShape2.eyeColor = new Color4(av.eyes.color.r, av.eyes.color.g, av.eyes.color.b, 1);
//   avatarShape2.hairColor = new Color4(av.hair.color.r, av.hair.color.g, av.hair.color.b, 1);
//   avatarShape2.wearables = av.wearables

// })

// BIRD FLY BIRD FLY

// Add ground terrain
const sand = new Entity('sand bottom')      
sand.addComponent(new Transform({ 
          position: new Vector3(5.62,-0.06,-9.83),
          rotation: Quaternion.Euler(0,0,0),
          scale: new Vector3(.1,.2,.1)
        }))        
sand.addComponent(sandShape)   
sand.setParent(_scene)
engine.addEntity(sand)
hud.attachToEntity(sand)

//pre loading glowing bird
const glowingBird = new Entity()
engine.addEntity(glowingBird)
glowingBird.addComponent(new GLTFShape('models/birdSplat2.glb'))
glowingBird.addComponent(new Transform())
glowingBird.getComponent(Transform).scale.setAll(0)

               
                //spawn a bird at the generated and terrain adapted position
                const bird5 = new Entity()      
                bird5.addComponent(new Transform({ 
                  position: new Vector3(6.5, 0.1, -8.5),
                  scale: new Vector3(.5, .5, .5),
                  rotation: Quaternion.Euler(0, Math.random()*360,0) 
                }))       
                
                // position: newPos,
                
                // save the bird5's original position to the DistanceBird component
                // bird5.addComponent(new DistanceBird( new Vector3(6.5,0.1,-8.5) ))          
                bird5.addComponent(birdIdleShape) 
                bird5.setParent(_scene)            
                engine.addEntity(bird5)    
                hud.attachToEntity(bird5)

          //Shoot the bird5s
                bird5.addComponent(
                  new OnPointerDown(
                    () => {
                      bird5.removeComponent(utils.MoveTransformComponent) // Stop the spaceship
                      glowingBird.getComponent(Transform).scale.setAll(1)
                      glowingBird.getComponent(Transform).position =
                        bird5.getComponent(Transform).position
            
                      // Glow for 1/4 of a second before disappearing
                      engine.removeEntity(bird5)
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

                const bird2 = new Entity()      
                bird2.addComponent(new Transform({ 
                  position: new Vector3(9.3, 0.57, -8),
                  scale: new Vector3(.5, .5, .5),
                  rotation: Quaternion.Euler(0, Math.random()*360,0) 

                }))       
                // position: newPos,
                
                // save the bird2's original position to the Distancebird2 component
                // bird2.addComponent(new DistanceBird( new Vector3(9.3,.57,-8) ))          
                bird2.addComponent(birdIdleShape)
                bird2.setParent(_scene)            

                engine.addEntity(bird2)    
                hud.attachToEntity(bird2)
                
                //Shoot the birds
                bird2.addComponent(
                  new OnPointerDown(
                    () => {
                      bird2.removeComponent(utils.MoveTransformComponent) // Stop the spaceship
                      glowingBird.getComponent(Transform).scale.setAll(1)
                      glowingBird.getComponent(Transform).position =
                        bird2.getComponent(Transform).position
            
                      // Glow for 1/4 of a second before disappearing
                      glowingBird.addComponent(
                        new utils.Delay(250, () => {
                          glowingBird.getComponent(Transform).scale.setAll(0) // Reset glowing spaceship scale
                          engine.removeEntity(bird2)
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

                
                const bird3 = new Entity()      
                bird3.addComponent(new Transform({ 
                  position: new Vector3(7, 0.5, -7),
                  scale: new Vector3(.5, .5, .5),
                  rotation: Quaternion.Euler(0, Math.random()*360,0) 
                }))       
                // position: newPos,
                
                // save the bird3's original position to the Distancebird3 component
                // bird3.addComponent(new DistanceBird( new Vector3(7,.5,-7) ))          
                bird3.addComponent(birdIdleShape) 
                bird3.setParent(_scene)            
                engine.addEntity(bird3)    
                hud.attachToEntity(bird3)
                //Shoot the birds
                bird3.addComponent(
                  new OnPointerDown(
                    () => {
                      bird3.removeComponent(utils.MoveTransformComponent) // Stop the spaceship
                      glowingBird.getComponent(Transform).scale.setAll(1)
                      glowingBird.getComponent(Transform).position =
                        bird3.getComponent(Transform).position
            
                      // Glow for 1/4 of a second before disappearing
                      glowingBird.addComponent(
                        new utils.Delay(250, () => {
                          glowingBird.getComponent(Transform).scale.setAll(0) // Reset glowing spaceship scale
                          engine.removeEntity(bird3)
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

                
                const bird4 = new Entity()      
                bird4.addComponent(new Transform({ 
                  position: new Vector3(9, 0.2, -9.5),
                  scale: new Vector3(.5, .5, .5),
                  rotation: Quaternion.Euler(0, Math.random()*360,0) 
                }))       
                // position: newPos,
                
                // save the bird4's original position to the Distancebird4 component
                // bird4.addComponent(new DistanceBird( new Vector3(9,.2,-9.5) ))          
                bird4.addComponent(birdIdleShape) 
                bird4.setParent(_scene)            
                engine.addEntity(bird4)    
                hud.attachToEntity(bird4)
                //Shoot the birds
                bird4.addComponent(
                  new OnPointerDown(
                    () => {
                      bird4.removeComponent(utils.MoveTransformComponent) // Stop the spaceship
                      glowingBird.getComponent(Transform).scale.setAll(1)
                      glowingBird.getComponent(Transform).position =
                        bird4.getComponent(Transform).position
            
                      // Glow for 1/4 of a second before disappearing
                      glowingBird.addComponent(
                        new utils.Delay(250, () => {
                          glowingBird.getComponent(Transform).scale.setAll(0) // Reset glowing spaceship scale
                          engine.removeEntity(bird4)
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
              // }        
            // }            
//           )
//       }
//     }
//   }  
// }

// let birdControl = new BirdController()

// delay bird spawning to only start casting rays on the terrain it's collider is fully loaded
// onSceneReadyObservable.add(()=>{
//   birdControl.spawnBirds()  
// })

//END BIRD FLY END BIRD FLY


//SMOKE
// Add a smoke source that creates a smoke puff every 0.2 seconds
// fantasyChest.addComponent(new SmokeSource(0.4))
// engine.addEntity(fantasyChest)

// Initiate systems
// engine.addSystem(new ThrowSmoke())
// engine.addSystem(new SmokeSystem())


//ENEMY SPAWNER ENEMY SPAWNER

//comment IN spawners.ts, enemy.ts, and code below

// // Base
// const base = new Entity()
// base.addComponent(new GLTFShape('models/baseLight.glb'))
// base.addComponent(
//   new Transform({
//     scale: new Vector3(2, 1, 2),
    
//   })
//   )
//   hud.attachToEntity(base)
//   engine.addEntity(base)

// // // Portals
// const POSITION_Z = 30
// const redPortal = new Entity()
// redPortal.addComponent(new GLTFShape('models/redPortal.glb'))
// redPortal.addComponent(
//   new Transform({
//     position: new Vector3(8.1, 10.8, 15.7),
//     rotation: new Quaternion(345,0,0),
//   scale: new Vector3(0.2, 0.2, 0.2)
//   })
// )
// hud.attachToEntity(redPortal)
// engine.addEntity(redPortal)

// const greenPortal = new Entity()
// greenPortal.addComponent(new GLTFShape('models/greenPortal.glb'))
// greenPortal.addComponent(
//   new Transform({
//     position: new Vector3(16, 6, POSITION_Z)
//   })
// )
// engine.addEntity(greenPortal)

// const bluePortal = new Entity()
// bluePortal.addComponent(new GLTFShape('models/bluePortal.glb'))
// bluePortal.addComponent(
//   new Transform({
//     position: new Vector3(27, 6, POSITION_Z)
//   })
// )
// engine.addEntity(bluePortal)

// // Controls/Blaster
// const blasterSound = new Sound(new AudioClip('sounds/blaster.mp3'), false)

// Input.instance.subscribe('BUTTON_DOWN', ActionButton.POINTER, false, () => {
//   blasterSound.getComponent(AudioSource).playOnce()
// })

//END ENEMY SPAWNER END ENEMY SPAWNER


//CHANGE PLAYER TO POOP. 

const poop = new Poop(
  new GLTFShape('models/poopy.glb'),

   new Transform({
    position: new Vector3(0, 0.2, -0.1),
    scale: new Vector3(0, 0, 0),
    rotation: new Quaternion(0, 90, 90)
  })
)
poop.setParent(Attachable.AVATAR)

// Hide avatars
const hideAvatarsEntity = new Entity('poop hide')
// hideAvatarsEntity.addComponent(new BoxShape()).withCollisions = false
hideAvatarsEntity.addComponent(
  new AvatarModifierArea({
    area: { box: new Vector3(15, 5, 25) },
    modifiers: [AvatarModifiers.HIDE_AVATARS]
  })
)
hideAvatarsEntity.addComponent(
  new Transform({ position: new Vector3(0, 3, 2) })
)
hud.attachToEntity(hideAvatarsEntity) 
engine.addEntity(hideAvatarsEntity)
hideAvatarsEntity.setParent(insideParent)

// Create to show poop avatar
hideAvatarsEntity.addComponent(
  new utils.TriggerComponent(
    new utils.TriggerBoxShape(new Vector3(15, 5, 25), Vector3.Zero()),
    
    { enableDebug: false,
      onCameraEnter: () => {
        poop.getComponent(Transform).scale.setAll(0.5)
      },
      onCameraExit: () => {
        poop.getComponent(Transform).scale.setAll(0)
      }
    }
  )
)

// Check if player is moving
// const currentPosition = new Vector3()

// class CheckPlayerIsMovingSystem implements ISystem {
//   update() {
//     if (currentPosition.equals(Camera.instance.position)) {
//       poop.playIdle()
//     } else {
//       currentPosition.copyFrom(Camera.instance.position)
//       poop.playRunning()
//     }
//   }
// }
// engine.addSystem(new CheckPlayerIsMovingSystem())

//Slicer

// const Slicer = new Entity('Slicer')
// engine.addEntity(Slicer)
// Slicer.setParent(_scene)
// const transform50 = new Transform({
//   position: new Vector3(8, 0, -12),
//   rotation: new Quaternion(0, 180, 0),
//   scale: new Vector3(1,1,1)
// })
// Slicer.addComponentOrReplace(transform50)
// const gltfshape30 = new GLTFShape("models/Slicer.glb")
// gltfshape20.withCollisions = true
// gltfshape20.isPointerBlocker = true
// gltfshape20.visible = true
// Slicer.addComponentOrReplace(gltfshape30)
// hud.attachToEntity(Slicer)


//avatar shape

// const dsystem2 = new DanceSystem(PredefinedEmote.TIK)

const avatar1 = new Entity("Avatar1");
const avatarShape1 = new AvatarShape();

avatarShape1.name = 'Murpheus'
avatarShape1.bodyShape = "urn:decentraland:off-chain:base-avatars:BaseMale";
avatarShape1.wearables = [
// Mr. Sinister
"urn:decentraland:matic:collections-v2:0x2dab1140c3ca258363ff3d08ba4e0834dd573611:0"
]
avatarShape1.skinColor = new Color4(0.94921875, 0.76171875, 0.6484375, 1);
avatarShape1.eyeColor = new Color4(0.23046875, 0.625, 0.3125, 1);
avatarShape1.hairColor = new Color4(0.234375, 0.12890625, 0.04296875, 1);
avatar1.addComponent(avatarShape1);
// avatar1.addComponent(new BoxShape())

avatar1.addComponent(new Transform({ position: new Vector3(3.5, -0.7, -13),
  rotation: new Quaternion(0,180,0), 
  scale: new Vector3(2,2,2) }));
  hud.attachToEntity(avatar1) 
  avatar1.setParent(_scene)

  let animator = new Animator
  const clipDance = new AnimationState(PredefinedEmote.HAMMER)
  animator.addClip(clipDance)
  avatar1.addComponent(animator)
  clipDance.play()
  clipDance.looping=true
  // avatar1.getComponent(Animator)
  

  // avatar1.addComponent(new Transform({predefined: PredefinedEmote.HAMMER}))
  // avatar1.addComponent(billboard)
// avatar1.getComponent(PredefinedEmote.HAMMER)
// avatar1.addComponentOrReplace({predefined: PredefinedEmote.HAMMER})
// DanceSystem.apply(avatar1, PredefinedEmote.HAMMER)
// avatar1.addComponent(dsystem2)

// engine.addSystem(dsystem2) 
// avatar1.addComponent(PredefinedEmote.TIK)


//Red Slicer
// "urn:decentraland:matic:collections-v2:0xf87a8372437c40ef9176c1b224cbe9307a617a25:0",
// "urn:decentraland:matic:collections-v2:0xf87a8372437c40ef9176c1b224cbe9307a617a25:2",
// "urn:decentraland:matic:collections-v2:0xf87a8372437c40ef9176c1b224cbe9307a617a25:1",

  // //Black Slicer
  // "urn:decentraland:matic:collections-v2:0xe7cdc8ba8f437954a60bacaccefc0766a5e27af9:2",
  // "urn:decentraland:matic:collections-v2:0xe7cdc8ba8f437954a60bacaccefc0766a5e27af9:1",
  // "urn:decentraland:matic:collections-v2:0xe7cdc8ba8f437954a60bacaccefc0766a5e27af9:0",

  //glow errywhere
//   "urn:decentraland:ethereum:collections-v1:dc_meta:meta_tiara",
// "urn:decentraland:ethereum:collections-v1:dc_meta:meta_upper_body",
// "urn:decentraland:ethereum:collections-v1:dc_meta:meta_hair",
// "urn:decentraland:ethereum:collections-v1:dc_meta:meta_helmet",
// "urn:decentraland:ethereum:collections-v1:dc_meta:meta_lower_body",
// "urn:decentraland:matic:collections-v2:0x6105f0f5ef8b28cf81e64551588d13221d4151ad:0"

//BAYC Robot
// "urn:decentraland:matic:collections-v2:0x9cac588b45b72d0476297cc47947dc488db9878f:1",
// "urn:decentraland:matic:collections-v2:0x9cac588b45b72d0476297cc47947dc488db9878f:3",
// "urn:decentraland:matic:collections-v2:0x9cac588b45b72d0476297cc47947dc488db9878f:2",
// "urn:decentraland:matic:collections-v2:0x9cac588b45b72d0476297cc47947dc488db9878f:0"

//Michael K cyber suit
// "urn:decentraland:ethereum:collections-v1:cybermike_cybersoldier_set:cybersoldier_helmet",
// "urn:decentraland:ethereum:collections-v1:cybermike_cybersoldier_set:cybersoldier_torso_upper_body",
// "urn:decentraland:ethereum:collections-v1:cybermike_cybersoldier_set:cybersoldier_leggings_lower_body",
// "urn:decentraland:ethereum:collections-v1:cybermike_cybersoldier_set:cybersoldier_boots_feet"

//cyber goggles and mask
// "urn:decentraland:ethereum:collections-v1:cybermike_cybersoldier_set:cybersoldier_nightvision_eyewear",
// "urn:decentraland:ethereum:collections-v1:cybermike_cybersoldier_set:cybersoldier_gas_mask"

//Mr. Sinister
// "urn:decentraland:matic:collections-v2:0x2dab1140c3ca258363ff3d08ba4e0834dd573611:0"