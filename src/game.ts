import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../ff9257ec-9d62-404f-97c7-cf19c4035761/src/item"
import * as utils from '@dcl/ecs-scene-utils'
import { hud } from 'dcl-builder-hud'
import { explosionSound, blastBird, ChoasCocaine, DeadIntro, Detective, DoYouDare, GodVoice, HeavenMade, Octopus, PaperHands, RobotQuest, StormComing, YouAreDiamond } from './data'
import { Sound } from './sound'
import { getUserData } from "@decentraland/Identity"
//for bird fly
import { birdIdleShape, birdFlyShape, sandShape, } from './modules/models'
import { realDistance } from './modules/utilities'
import { movePlayerTo } from '@decentraland/RestrictedActions'
import { BoxShape, Color3 } from 'node_modules/decentraland-ecs/dist/index'
export { _scene }
import { Poop } from './poop'
 



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
  position: new Vector3(8, 3.5, 4),
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
  position: new Vector3(8, 2, 0.5),
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
  scale: new Vector3(14.0002384, 13.0001507, 4.00002766)
})
irishglowjpegspikes.addComponentOrReplace(transform13)
const gltfShape5 = new GLTFShape("c2ac20f4-5a4c-41b9-be94-cfb5490ef984/Irish glow JPEGSpikes.glb")
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
  position: new Vector3(8, 2.5, 1.5),
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
  position: new Vector3(8, 5, 6.5),
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
  position: new Vector3(8, 9.8, 15.4),
  rotation: new Quaternion(1.04254907e-14, -1, 1.19209261e-7, 0.000002220273),
  scale: new Vector3(9.2, 10.7, 1)
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
  position: new Vector3(8, 7, 10),
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

let trigger = new Entity("trigger area")
trigger.addComponent(new Transform({position: new Vector3(8,0,5), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(1,1,1)}))
trigger.addComponent(new utils.TriggerComponent(new utils.TriggerBoxShape(new Vector3(15, 5, 20),new Vector3(0, 0, 0)),
{

  enableDebug:false,
  onCameraEnter:()=>{
    GodVoice.playOnce()
  
  }
}))
trigger.setParent(_scene)
//attatches builder tool to entity(trigger, button, etc)
hud.attachToEntity(trigger)

//adding 3d models to scene 
let email= new Entity('emails')
email.addComponent(new GLTFShape('models/voice_email.glb'))
email.addComponent(new Transform({
  position: new Vector3(8, -2.20, 15.5),
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
  position: new Vector3(8.4, 0.03, -9.9),
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




// STARTING CODE OF THE ANTICOLLIDER
// const antiCollider = new Entity('antiCollider')
// antiCollider.addComponent(new BoxShape())
// engine.addEntity(antiCollider)
// antiCollider.setParent(_scene)
// antiCollider.addComponent(new Transform({
//   position: new Vector3(8,0,1),
//   rotation: Quaternion.Euler(0,0,0),
//   scale: new Vector3(1,1,1)
// }))
// antiCollider.addComponentOrReplace(transform45)
// const myMaterial = new Material()
// myMaterial.albedoColor = Color3.Blue()
// myMaterial.albedoColor = new Color4(0.9)
// myMaterial.transparencyMode = 1
// antiCollider.addComponent(myMaterial)
// hud.attachToEntity(antiCollider)

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

// CODE FOR PORTAL UPSTAIRS ON FANTASY CHEST
fantasyChest.addComponent(new utils.TriggerComponent(new utils.TriggerBoxShape(
  new Vector3(4, 5, 4)), {
    enableDebug: false,
    onCameraEnter: ()=>{
        showInside()
      }}))
      
      //grows chest by 5 over 3 seconds. need original scale, new scale, time period
      //     fantasyChest.addComponent(new utils.ScaleTransformComponent(
      //         new Vector3(1,1,1),
      //         new Vector3(5,5,5),
      //         3
      // ))}}))

// const mineCart = new Entity('mine cart')
// engine.addEntity(mineCart)
// mineCart.setParent(_scene)
// const transform45 = new Transform({
//   position: new Vector3(8,0,-1),
//   rotation: new Quaternion(0,0,0),
//   scale: new Vector3(1,1,1)
// })
// mineCart.addComponentOrReplace(transform45)
// hud.attachToEntity(mineCart)
// const gltfShape20 = new GLTFShape("models/goldCoin2.glb")
// gltfShape20.withCollisions = true
// gltfShape20.isPointerBlocker = true
// gltfShape20.visible = true
// mineCart.addComponentOrReplace(gltfShape20)



  //solid water child of fantasyChest
  // const solidWater = new Entity('solidWater')
  // engine.addEntity(solidWater)
  // solidWater.setParent(fantasyChest)
  // const transform39 = new Transform({
  //   position: new Vector3(0, 0.1, 0),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1.23, 0.16, 0.86)
  // })
  // solidWater.addComponentOrReplace(transform39)
  // const gltfShape20 = new GLTFShape("models/solid_water.glb")
  // gltfShape20.withCollisions = true
  // gltfShape20.isPointerBlocker = true
  // gltfShape20.visible = true
  // solidWater.addComponentOrReplace(gltfShape20)
  // hud.attachToEntity(solidWater)



  // HIDE AVATAR AREAS 
  let hideGround = new Entity('hideGround')
  // hideGround.addComponent(new BoxShape()).withCollisions = false
  hideGround.addComponent(new Transform({
    position: new Vector3(8,0,0), scale: new Vector3(16,5,25)
  }))
  hideGround.addComponent(new AvatarModifierArea({area: { box: new Vector3 (16,6,16)}, modifiers:[AvatarModifiers.HIDE_AVATARS]}))
//engine.addEntity(hideGround)
hud.attachToEntity(hideGround)

let hideInside = new Entity('hideInside')
// hideInside.addComponent(new BoxShape()).withCollisions = false
hideInside.addComponent(new Transform({
  position: new Vector3(8,6,0), scale: new Vector3(8,6,16)
}))
hideInside.addComponent(new AvatarModifierArea({area: { box: new Vector3 (8,6,16)}, modifiers:[AvatarModifiers.HIDE_AVATARS]}))
engine.addEntity(hideInside) 
hud.attachToEntity(hideInside)

//CODE FOR UPSTAIRS

// let visibleWall = new Entity('visible wall')
// visibleWall.addComponent(new GLTFShape(""))
// visibleWall.addComponent(new Transform({position: new Vector3(0,0,0)}))
// visibleWall.setParent(parent)



//inside area
let insideParent = new Entity("red area parent")
insideParent.addComponent(new Transform({
  position: new Vector3(8,4,0), scale: new Vector3(0,0,0)
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

let insideBuilding = new Entity()
insideBuilding.addComponent(new GLTFShape("models/Chest_Fantasy.glb"))
insideBuilding.addComponent(new Transform())
insideBuilding.setParent(insideParent)
hud.attachToEntity(insideBuilding)

let groundTrigger = new Entity('groundTrigger')
// groundTrigger.addComponent(new BoxShape())
groundTrigger.addComponent(new Transform( {position: new Vector3(2,0,14.8), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(1,1,1)}))
groundTrigger.setParent(insideParent)
groundTrigger.addComponent(new utils.TriggerComponent(new utils.TriggerBoxShape(new Vector3(3,3,0.5), new Vector3(-2.3,1.5,0)), {
  enableDebug: true,
  onCameraEnter:()=>{
    showGround()
  }
}))
hud.attachToEntity(groundTrigger)

//code for showInside/showGround for moving player/hiding land
// _scene replaces groundAreaParent
function showInside() {
  _scene.getComponent(Transform).scale.setAll(0)
  engine.addEntity(hideGround)

  insideParent.getComponent(Transform).scale.setAll(1)
  engine.removeEntity(hideInside)
  movePlayerTo({x: 8, y:5, z:-13.5})
}

function showGround(){
  _scene.getComponent(Transform).scale.setAll(1)
  engine.removeEntity(hideGround)

  insideParent.getComponent(Transform).scale.setAll(0)
  engine.addEntity(hideInside)
  movePlayerTo({x: 8, y:1, z:-15})
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

const wolf = new Entity('wolf')
engine.addEntity(wolf)
wolf.setParent(insideParent)
const transform45 = new Transform({
  position: new Vector3(2, 0.1, 9.7),
  rotation: new Quaternion(0, 180, 0,),
  scale: new Vector3(1, 1, 1)
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
  position: new Vector3(-2.7, 0.1, 9.7),
  rotation: new Quaternion(0, 180, 0,),
  scale: new Vector3(1, 1, 1)
})
wolf2.addComponentOrReplace(transform46)
hud.attachToEntity(wolf2)
const gltfShape28 = new GLTFShape("models/Wolfglb.glb")
gltfShape28.withCollisions = true
gltfShape28.isPointerBlocker = true 
gltfShape28.visible = true
wolf2.addComponentOrReplace(gltfShape28)

let wolfTrigger = new Entity('wolfTrigger')
// wolfTrigger.addComponent(new BoxShape())
wolfTrigger.addComponent(new Transform( {position: new Vector3(2,0,0), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(1,1,1)}))
wolfTrigger.setParent(insideParent)
wolfTrigger.addComponent(new utils.TriggerComponent(new utils.TriggerBoxShape(new Vector3(14.5,3,1), new Vector3(-2.3,1.5,0)), {
  enableDebug: false,
  onCameraEnter:()=>{
    wolf.addComponent(new utils.ScaleTransformComponent(
      new Vector3(1,1,1),
      new Vector3(2,2,2),
      0.5
))
wolf2.addComponent(new utils.ScaleTransformComponent(
new Vector3(1,1,1),
new Vector3(2,2,2),
0.5
)); engine.removeEntity(wolfTrigger)
}}))
hud.attachToEntity(wolfTrigger)

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


// let whiteSplat= new Entity('whiteSplat')
// whiteSplat.addComponent(new GLTFShape('models/birdSplat2.glb'))
// whiteSplat.addComponent(new Transform({
//   position: new Vector3(8, 1, -4),
//   rotation: new Quaternion( 0, 0, 0),
//   scale: new Vector3(1, 1, 1)
// }))
// whiteSplat.setParent(_scene)
// hud.attachToEntity(whiteSplat)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
script1.init()
script1.spawn(fantasyChest, {"onClickText":"Open/Close","onClick":[{"entityName":"fantasyChest","actionId":"toggle","values":{}}]}, createChannel(channelId, fantasyChest, channelBus))


//CODE FOR MIRROR
// const stand = new Entity();
// stand.addComponent(new BoxShape());
// stand.addComponent(new Transform({ position: new Vector3(8.0, -0, 10.3),
//   rotation: new Quaternion(0,180,0),
//   scale: new Vector3(0.8, 0.1, 0.9) }));
// engine.addEntity(stand);

const avatar = new Entity();
const avatarShape = new AvatarShape();
// hud.attachToEntity(stand)


avatarShape.bodyShape = "urn:decentraland:off-chain:base-avatars:BaseFemale";
avatarShape.wearables = [
  "urn:decentraland:off-chain:base-avatars:f_sweater",
  "urn:decentraland:off-chain:base-avatars:f_jeans",
  "urn:decentraland:off-chain:base-avatars:bun_shoes",
  "urn:decentraland:off-chain:base-avatars:standard_hair",
  "urn:decentraland:off-chain:base-avatars:f_eyes_00",
  "urn:decentraland:off-chain:base-avatars:f_eyebrows_00",
  "urn:decentraland:off-chain:base-avatars:f_mouth_00",
];
avatarShape.skinColor = new Color4(0.94921875, 0.76171875, 0.6484375, 1);
avatarShape.eyeColor = new Color4(0.23046875, 0.625, 0.3125, 1);
avatarShape.hairColor = new Color4(0.234375, 0.12890625, 0.04296875, 1);
avatar.addComponent(avatarShape);
avatar.addComponent(new Transform({ position: new Vector3(1.3, -1.16, -2.3),
  rotation: new Quaternion(0,180,0),
  scale: new Vector3(2,2,2) }));
engine.addEntity(avatar);
if (!avatar.hasComponent(Billboard)) avatar.addComponent(billboard)
hud.attachToEntity(avatar) 
 

void getUserData().then(async a => {
  const res = await fetch(`https://peer.decentraland.org/lambdas/profiles/${a?.publicKey}`)
  const json = await res.json()
  const av = json.avatars[0].avatar
  avatarShape.bodyShape = av.bodyShape
  avatarShape.skinColor = new Color4(av.skin.color.r, av.skin.color.g, av.skin.color.b, 1);
  avatarShape.eyeColor = new Color4(av.eyes.color.r, av.eyes.color.g, av.eyes.color.b, 1);
  avatarShape.hairColor = new Color4(av.hair.color.r, av.hair.color.g, av.hair.color.b, 1);
  avatarShape.wearables = av.wearables

})

//MIRROR 2
// const stand = new Entity();
// stand.addComponent(new BoxShape());
// stand.addComponent(new Transform({ position: new Vector3(8.0, -0, 10.3),
//   rotation: new Quaternion(0,180,0),
//   scale: new Vector3(0.8, 0.1, 0.9) }));
// engine.addEntity(stand);
// hud.attachToEntity(stand)

const avatar2 = new Entity();
const avatarShape2 = new AvatarShape();


avatarShape2.bodyShape = "urn:decentraland:off-chain:base-avatars:BaseFemale";
avatarShape2.wearables = [
  "urn:decentraland:off-chain:base-avatars:f_sweater",
  "urn:decentraland:off-chain:base-avatars:f_jeans",
  "urn:decentraland:off-chain:base-avatars:bun_shoes",
  "urn:decentraland:off-chain:base-avatars:standard_hair",
  "urn:decentraland:off-chain:base-avatars:f_eyes_00",
  "urn:decentraland:off-chain:base-avatars:f_eyebrows_00",
  "urn:decentraland:off-chain:base-avatars:f_mouth_00",
];
avatarShape2.skinColor = new Color4(0.94921875, 0.76171875, 0.6484375, 1);
avatarShape2.eyeColor = new Color4(0.23046875, 0.625, 0.3125, 1);
avatarShape2.hairColor = new Color4(0.234375, 0.12890625, 0.04296875, 1);
avatar2.addComponent(avatarShape2);
avatar2.addComponent(new Transform({ position: new Vector3(14.3, -1.16, -2.3),
  rotation: new Quaternion(0,180,0),
  scale: new Vector3(2,2,2) }));
engine.addEntity(avatar2);
if (!avatar2.hasComponent(Billboard)) avatar2.addComponent(billboard)
hud.attachToEntity(avatar2)



void getUserData().then(async a => {
  const res = await fetch(`https://peer.decentraland.org/lambdas/profiles/${a?.publicKey}`)
  const json = await res.json()
  const av = json.avatars[0].avatar
  avatarShape2.bodyShape = av.bodyShape
  avatarShape2.skinColor = new Color4(av.skin.color.r, av.skin.color.g, av.skin.color.b, 1);
  avatarShape2.eyeColor = new Color4(av.eyes.color.r, av.eyes.color.g, av.eyes.color.b, 1);
  avatarShape2.hairColor = new Color4(av.hair.color.r, av.hair.color.g, av.hair.color.b, 1);
  avatarShape2.wearables = av.wearables

})

// BIRD FLY BIRD FLY

// Add ground terrain
const sand = new Entity()      
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
  radius:number = 4 // how close you can get to a bird before it reacts
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
  sideLength:number = 8 // size of the area to spawn birds in
  rows:number = 4
  cols:number = 4
  spacing:number = this.sideLength/this.rows
  base:Vector3 = new Vector3(8,0,-7) 

  constructor(){      

    //set the center of the bird scattering area to the center of the scene
    this.center = new Vector3(8,0,7)    
    
    //set the starting positions of the bird spawn grid to the south-west corner of the spawn area
    this.base = new Vector3(this.center.x - this.sideLength/2, this.center.y, this.center.z - this.sideLength/2) 
  }

  spawnBirds(){

    // for(let i=0; i< this.rows; i++){
    //   for(let j=0; j< this.cols; j++){     

    //     //generate positions iterating through all rows and columns  and add large random offsets along X an Z (Y will adapt to the terrain later)
    //     let newPos = new Vector3(
    //       this.base.x + i* this.spacing + Math.random()*8-4, 
    //       this.base.y , 
    //       this.base.z  + j * this.spacing + Math.random()*8-4
    //       ) 

    //       // create a ray at the X,Z coord of the generated position which starts high up and has a downward direction
    //       let rayDown: Ray = {
    //         origin: new Vector3(newPos.x, 15, newPos.z),
    //         direction: Vector3.Down(),
    //         distance: 17,
    //       }

    //       // cast the ray downward and try to intersect it with the terrain's collider
    //       physicsCast.hitFirst(
    //         rayDown,
    //         (e) => {
    //           if(e.didHit){          
                
    //             //if we hit the collider set the generated bird position's Y coord to the hitpoint's height
    //             newPos.y = e.hitPoint.y 
                
                //spawn a bird at the generated and terrain adapted position
                const bird = new Entity()      
                bird.addComponent(new Transform({ 
                  position: new Vector3(6.5, 0.1, -8.5),
                  scale: new Vector3(.5, .5, .5),
                  rotation: Quaternion.Euler(0, Math.random()*360,0) 
                }))       
                
                // position: newPos,
                
                // save the bird's original position to the DistanceBird component
                bird.addComponent(new DistanceBird( new Vector3(6.5,0.1,-8.5) ))          
                bird.addComponent(birdIdleShape) 
                bird.setParent(_scene)            
                engine.addEntity(bird)    
                hud.attachToEntity(bird)

          //Shoot the birds
                bird.addComponent(
                  new OnPointerDown(
                    () => {
                      bird.removeComponent(utils.MoveTransformComponent) // Stop the spaceship
                      glowingBird.getComponent(Transform).scale.setAll(1)
                      glowingBird.getComponent(Transform).position =
                        bird.getComponent(Transform).position
            
                      // Glow for 1/4 of a second before disappearing
                      engine.removeEntity(bird)
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
                bird2.addComponent(new DistanceBird( new Vector3(9.3,.57,-8) ))          
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
                bird3.addComponent(new DistanceBird( new Vector3(7,.5,-7) ))          
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
                bird4.addComponent(new DistanceBird( new Vector3(9,.2,-9.5) ))          
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
              }        
            }            
//           )
//       }
//     }
//   }  
// }

let birdControl = new BirdController()

// delay bird spawning to only start casting rays on the terrain it's collider is fully loaded
onSceneReadyObservable.add(()=>{
  birdControl.spawnBirds()  
})

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
hideAvatarsEntity.addComponent(
  new AvatarModifierArea({
    area: { box: new Vector3(15, 4,24) },
    modifiers: [AvatarModifiers.HIDE_AVATARS]
  })
)
hideAvatarsEntity.addComponent(
  new Transform({ position: new Vector3(0, 3, 5) })
)
hud.attachToEntity(hideAvatarsEntity)
engine.addEntity(hideAvatarsEntity)
hideAvatarsEntity.setParent(insideParent)

// Create to show poop avatar
hideAvatarsEntity.addComponent(
  new utils.TriggerComponent(
    new utils.TriggerBoxShape(new Vector3(15, 4, 24), Vector3.Zero()),
    
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

// // Check if player is moving
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
