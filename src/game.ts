import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../ff9257ec-9d62-404f-97c7-cf19c4035761/src/item"
import * as utils from '@dcl/ecs-scene-utils'
import { hud } from 'dcl-builder-hud'
import { AnnouncerShort, ChoasCocaine, DeadIntro, Detective, DoYouDare, GodVoice, HeavenMade, Octopus, PaperHands, RobotQuest, StormComing, YouAreDiamond } from './data'

import { getUserData } from "@decentraland/Identity"

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

const murpheusnickeditd2345678 = new Entity('murpheusnickeditd2345678')
engine.addEntity(murpheusnickeditd2345678)
murpheusnickeditd2345678.setParent(_scene)
if (!murpheusnickeditd2345678.hasComponent(Billboard)) murpheusnickeditd2345678.addComponent(billboard)

const transform2 = new Transform({
  position: new Vector3(8, 3.5, 4),
  rotation: new Quaternion(1.04254907e-14, -1, 1.19209261e-7, 0.000002220273),
  scale: new Vector3(1.5, 2, 1.5)
})
murpheusnickeditd2345678.addComponentOrReplace(transform2)
const gltfShape = new GLTFShape("2d8fafc8-3b0c-4f5e-8e25-ab17d0ac26dc/Murpheus nickedit3D.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
murpheusnickeditd2345678.addComponentOrReplace(gltfShape)

engine.addEntity(murpheusnickeditd2345678)


const blackbutton23456789 = new Entity('blackbutton23456789')
engine.addEntity(blackbutton23456789)
blackbutton23456789.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(2.279,0,10.474),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 3, 2)
})
blackbutton23456789.addComponentOrReplace(transform3)

blackbutton23456789.addComponent(myBlackButton)
hud.attachToEntity(blackbutton23456789)
blackbutton23456789.addComponent(new Animator())
blackbutton23456789.getComponent(Animator).addClip(new AnimationState('trigger', { looping: false }))
blackbutton23456789.addComponent(
  new OnPointerDown(
    () => {
      
    messageBus.emit('click', {entity: 'blackbutton23456789'})
      Detective.playOnce()
    },
    {
      button: ActionButton.POINTER,
      hoverText: 'Detective',
      distance: 6,
    }
  )
)

const blackbutton234567899 = new Entity('blackbutton234567899')
engine.addEntity(blackbutton234567899)
blackbutton234567899.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(4.679,0,12.974),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 3, 2)
})
blackbutton234567899.addComponentOrReplace(transform32)

blackbutton234567899.addComponent(myBlackButton)
hud.attachToEntity(blackbutton234567899)
blackbutton234567899.addComponent(new Animator())
blackbutton234567899.getComponent(Animator).addClip(new AnimationState('trigger', { looping: false }))
blackbutton234567899.addComponent(
  new OnPointerDown(
    () => {
      
    messageBus.emit('click', {entity: 'blackbutton234567899'})
      DeadIntro.playOnce()
    },
    {
      button: ActionButton.POINTER,
      hoverText: 'Dead Intro',
      distance: 6,
    }
  )
)

const blackbutton2345678991 = new Entity('blackbutton2345678991')
engine.addEntity(blackbutton2345678991)
blackbutton234567899.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(11.079,0,13.074),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 3, 2)
})
blackbutton2345678991.addComponentOrReplace(transform33)

blackbutton2345678991.addComponent(myBlackButton)
hud.attachToEntity(blackbutton2345678991)
blackbutton2345678991.addComponent(new Animator())
blackbutton2345678991.getComponent(Animator).addClip(new AnimationState('trigger', { looping: false }))
blackbutton2345678991.addComponent(
  new OnPointerDown(
    () => {
      
    messageBus.emit('click', {entity: 'blackbutton2345678991'})
      YouAreDiamond.playOnce()
    },
    {
      button: ActionButton.POINTER,
      hoverText: 'Diamond Hands',
      distance: 6,
    }
  )
)

const murpheusnickeditd2345 = new Entity('murpheusnickeditd2345')
engine.addEntity(murpheusnickeditd2345)
murpheusnickeditd2345.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(8, 2, 0.5),
  rotation: new Quaternion(1.04254907e-14, -1, 1.19209261e-7, 0.000002220273),
  scale: new Vector3(0.49999994, 1, 0.49999994)
})
murpheusnickeditd2345.addComponentOrReplace(transform4)
const gltfShape2 = new GLTFShape("2d8fafc8-3b0c-4f5e-8e25-ab17d0ac26dc/Murpheus nickedit3D.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
murpheusnickeditd2345.addComponentOrReplace(gltfShape2)

if (!murpheusnickeditd2345.hasComponent(Billboard)) murpheusnickeditd2345.addComponent(billboard)
engine.addEntity(murpheusnickeditd2345)


const murpheustext = new Entity('murpheustext')
engine.addEntity(murpheustext)
murpheustext.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(8, 16.5, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(22.5, 21.5, 1.00000072)
})
murpheustext.addComponentOrReplace(transform5)
const gltfShape3 = new GLTFShape("c935e005-716e-47fe-9df0-b7fe8eaffb7f/Murpheus text.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
murpheustext.addComponentOrReplace(gltfShape3)

const murpheusnickeditd234567891011 = new Entity('murpheusnickeditd234567891011')
engine.addEntity(murpheusnickeditd234567891011)
murpheusnickeditd234567891011.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(1, 8.071875, 8.5),
  rotation: new Quaternion(1.74724919e-15, -0.707106, 8.429359e-8, 0.7071076),
  scale: new Vector3(11.690567, 12.3055487, 1.00000024)
})
murpheusnickeditd234567891011.addComponentOrReplace(transform6)
const gltfShape4 = new GLTFShape("2d8fafc8-3b0c-4f5e-8e25-ab17d0ac26dc/Murpheus nickedit3D.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
murpheusnickeditd234567891011.addComponentOrReplace(gltfShape4)

const blackbutton23456 = new Entity('blackbutton23456')
engine.addEntity(blackbutton23456)
blackbutton23456.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(7.99,0,13.837),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 3, 2)
})
blackbutton23456.addComponentOrReplace(transform7)

blackbutton23456.addComponent(myBlackButton)
hud.attachToEntity(blackbutton23456)
blackbutton23456.addComponent(new Animator())
blackbutton23456.getComponent(Animator).addClip(new AnimationState('trigger', { looping: false }))
blackbutton23456.addComponent(
  new OnPointerDown(
    () => {
      
    messageBus.emit('click', {entity: 'blackbutton23456'})
      ChoasCocaine.playOnce()
    },
    {
      button: ActionButton.POINTER,
      hoverText: 'Chaos',
      distance: 6,
    }
  )
)

const blackbutton2345678910111213 = new Entity('blackbutton2345678910111213')
engine.addEntity(blackbutton2345678910111213)
blackbutton2345678910111213.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(3.255,0,3.401),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 3, 2)
})
blackbutton2345678910111213.addComponentOrReplace(transform8)

blackbutton2345678910111213.addComponent(myBlackButton)
hud.attachToEntity(blackbutton2345678910111213)
blackbutton2345678910111213.addComponent(new Animator())
blackbutton2345678910111213.getComponent(Animator).addClip(new AnimationState('trigger', { looping: false }))
blackbutton2345678910111213.addComponent(
  new OnPointerDown(
    () => {
      
    messageBus.emit('click', {entity: 'blackbutton2345678910111213'})
      PaperHands.playOnce()
    },
    {
      button: ActionButton.POINTER,
      hoverText: 'Paper Hands',
      distance: 6,
    }
  )
)

const blackbutton234 = new Entity('blackbutton234')
engine.addEntity(blackbutton234)
blackbutton234.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(1.861,0.089,6.928),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 3, 2)
})
blackbutton234.addComponentOrReplace(transform9)

blackbutton234.addComponent(myBlackButton)
hud.attachToEntity(blackbutton234)
blackbutton234.addComponent(new Animator())
blackbutton234.getComponent(Animator).addClip(new AnimationState('trigger', { looping: false }))
blackbutton234.addComponent(
  new OnPointerDown(
    () => {
      
    messageBus.emit('click', {entity: 'blackbutton234'})
      StormComing.playOnce()
    },
    {
      button: ActionButton.POINTER,
      hoverText: 'Category 5',
      distance: 6,
    }
  )
)

const blackbutton234567891011 = new Entity('blackbutton234567891011')
engine.addEntity(blackbutton234567891011)
blackbutton234567891011.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(12.051,0,3.141),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 3, 2)
})
blackbutton234567891011.addComponentOrReplace(transform10)

blackbutton234567891011.addComponent(myBlackButton)
hud.attachToEntity(blackbutton234567891011)
blackbutton234567891011.addComponent(new Animator())
blackbutton234567891011.getComponent(Animator).addClip(new AnimationState('trigger', { looping: false }))
blackbutton234567891011.addComponent(
  new OnPointerDown(
    () => {
      
    messageBus.emit('click', {entity: 'blackbutton234567891011'})
      RobotQuest.playOnce()
    },
    {
      button: ActionButton.POINTER,
      hoverText: 'Docile Robot',
      distance: 6,
    }
  )
)

const blackbutton234567 = new Entity('blackbutton234567')
engine.addEntity(blackbutton234567)
blackbutton234567.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(13.573,0,10.433),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 3, 2)
})
blackbutton234567.addComponentOrReplace(transform11)

blackbutton234567.addComponent(myBlackButton)
hud.attachToEntity(blackbutton234567)
blackbutton234567.addComponent(new Animator())
blackbutton234567.getComponent(Animator).addClip(new AnimationState('trigger', { looping: false }))
blackbutton234567.addComponent(
  new OnPointerDown(
    () => {
      
    messageBus.emit('click', {entity: 'blackbutton234567'})
      HeavenMade.playOnce()
    },
    {
      button: ActionButton.POINTER,
      hoverText: 'Heaven Made',
      distance: 6,
    }
  )
)

const blackbutton234567891011121314 = new Entity('blackbutton234567891011121314')
engine.addEntity(blackbutton234567891011121314)
blackbutton234567891011121314.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(13.865,0,6.252),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 3, 2)
})
blackbutton234567891011121314.addComponentOrReplace(transform12)

blackbutton234567891011121314.addComponent(myBlackButton)
hud.attachToEntity(blackbutton234567891011121314)
blackbutton234567891011121314.addComponent(new Animator())
blackbutton234567891011121314.getComponent(Animator).addClip(new AnimationState('trigger', { looping: false }))
blackbutton234567891011121314.addComponent(
  new OnPointerDown(
    () => {
      
    messageBus.emit('click', {entity: 'blackbutton234567891011121314'})
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

const murpheusnickeditd234 = new Entity('murpheusnickeditd234')
engine.addEntity(murpheusnickeditd234)
murpheusnickeditd234.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(14.9023438, 8.071875, 8.574951),
  rotation: new Quaternion(3.55271368e-15, 0.707106, -8.429359e-8, 0.707107544),
  scale: new Vector3(11.6905394, 12.3055487, 0.9999988)
})
murpheusnickeditd234.addComponentOrReplace(transform14)
const gltfShape6 = new GLTFShape("2d8fafc8-3b0c-4f5e-8e25-ab17d0ac26dc/Murpheus nickedit3D.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
murpheusnickeditd234.addComponentOrReplace(gltfShape6)

const blackbutton23456789101112131415 = new Entity('blackbutton23456789101112131415')
engine.addEntity(blackbutton23456789101112131415)
blackbutton23456789101112131415.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(2.34301758, 0, 12.77417),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 3, 2)
})
blackbutton23456789101112131415.addComponentOrReplace(transform15)

const blackbutton2 = new Entity('blackbutton2')
engine.addEntity(blackbutton2)
blackbutton2.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(9, 0, 13.06543),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 3, 2)
})
blackbutton2.addComponentOrReplace(transform16)

const blackbutton2345 = new Entity('blackbutton2345')
engine.addEntity(blackbutton2345)
blackbutton2345.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(2.41772461, 0.0380592346, 2.57189941),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 3, 2)
})
blackbutton2345.addComponentOrReplace(transform17)

const blackbutton23456789101112 = new Entity('blackbutton23456789101112')
engine.addEntity(blackbutton23456789101112)
blackbutton23456789101112.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(13.5510254, 0, 1.94067383),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 3, 2)
})
blackbutton23456789101112.addComponentOrReplace(transform18)

const murpheusnickeditd23 = new Entity('murpheusnickeditd23')
engine.addEntity(murpheusnickeditd23)
murpheusnickeditd23.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(8, 2.5, 1.5),
  rotation: new Quaternion(1.04254907e-14, -1, 1.19209261e-7, 0.000002220273),
  scale: new Vector3(0.99999994, 1.5, 0.5)
})
murpheusnickeditd23.addComponentOrReplace(transform19)
const gltfShape7 = new GLTFShape("2d8fafc8-3b0c-4f5e-8e25-ab17d0ac26dc/Murpheus nickedit3D.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
murpheusnickeditd23.addComponentOrReplace(gltfShape7)

if (!murpheusnickeditd23.hasComponent(Billboard)) murpheusnickeditd23.addComponent(billboard)
engine.addEntity(murpheusnickeditd23)


const murpheusnickeditd = new Entity('murpheusnickeditd')
engine.addEntity(murpheusnickeditd)
murpheusnickeditd.setParent(_scene)
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

if (!murpheusnickeditd.hasComponent(Billboard)) murpheusnickeditd.addComponent(billboard)
engine.addEntity(murpheusnickeditd)

const glossyaethereatiles = new Entity('glossyaethereatiles')
engine.addEntity(glossyaethereatiles)
glossyaethereatiles.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyaethereatiles.addComponentOrReplace(transform21)
const gltfShape9 = new GLTFShape("6b33f46e-9667-45e5-bd90-85f372ee2490/CityTile.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
glossyaethereatiles.addComponentOrReplace(gltfShape9)

const murpheusnickeditd2 = new Entity('murpheusnickeditd2')
engine.addEntity(murpheusnickeditd2)
murpheusnickeditd2.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(7.91552734, 8.071875, 15.5174561),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(11.690567, 12.3055487, 1.00000012)
})
murpheusnickeditd2.addComponentOrReplace(transform22)
const gltfShape10 = new GLTFShape("2d8fafc8-3b0c-4f5e-8e25-ab17d0ac26dc/Murpheus nickedit3D.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
murpheusnickeditd2.addComponentOrReplace(gltfShape10)

const murpheustext2 = new Entity('murpheustext2')
engine.addEntity(murpheustext2)
murpheustext2.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(8, 16.5, 15.5),
  rotation: new Quaternion(-1.78957835e-14, -1, 1.19209261e-7, 0.00000235438347),
  scale: new Vector3(22.5, 21.5, 1.00000072)
})
murpheustext2.addComponentOrReplace(transform23)
const gltfShape11 = new GLTFShape("c935e005-716e-47fe-9df0-b7fe8eaffb7f/Murpheus text.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
murpheustext2.addComponentOrReplace(gltfShape11)

const murpheusnickeditd23456 = new Entity('murpheusnickeditd23456')
engine.addEntity(murpheusnickeditd23456)
murpheusnickeditd23456.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(1.5, 8, 9),
  rotation: new Quaternion(-2.49791846e-14, 0.7071124, -8.429433e-8, 0.7071013),
  scale: new Vector3(9.999991, 11.5, 0.5000007)
})
murpheusnickeditd23456.addComponentOrReplace(transform24)
const gltfShape12 = new GLTFShape("2d8fafc8-3b0c-4f5e-8e25-ab17d0ac26dc/Murpheus nickedit3D.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
murpheusnickeditd23456.addComponentOrReplace(gltfShape12)

const blackbutton = new Entity('blackbutton')
engine.addEntity(blackbutton)
blackbutton.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(2.336914, 0, 7.220337),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 3, 2)
})
blackbutton.addComponentOrReplace(transform25)

const blackbutton23 = new Entity('blackbutton23')
engine.addEntity(blackbutton23)
blackbutton23.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(13.2243652, 0, 13.2862549),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 3, 2)
})
blackbutton23.addComponentOrReplace(transform26)

const blackbutton2345678 = new Entity('blackbutton2345678')
engine.addEntity(blackbutton2345678)
blackbutton2345678.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(4.287842, 0, 12.77417),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 3, 2)
})
blackbutton2345678.addComponentOrReplace(transform27)

const blackbutton2345678910 = new Entity('blackbutton2345678910')
engine.addEntity(blackbutton2345678910)
blackbutton2345678910.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(11, 0, 12.77417),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 3, 2)
})
blackbutton2345678910.addComponentOrReplace(transform28)

const murpheusnickeditd234567 = new Entity('murpheusnickeditd234567')
engine.addEntity(murpheusnickeditd234567)
murpheusnickeditd234567.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(8, 10, 15),
  rotation: new Quaternion(1.04254907e-14, -1, 1.19209261e-7, 0.000002220273),
  scale: new Vector3(8.5, 10, 1.00000024)
})
murpheusnickeditd234567.addComponentOrReplace(transform29)
const gltfShape13 = new GLTFShape("2d8fafc8-3b0c-4f5e-8e25-ab17d0ac26dc/Murpheus nickedit3D.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
murpheusnickeditd234567.addComponentOrReplace(gltfShape13)

const murpheusnickeditd23456789 = new Entity('murpheusnickeditd23456789')
engine.addEntity(murpheusnickeditd23456789)
murpheusnickeditd23456789.setParent(_scene)
const transform30 = new Transform({
  position: new Vector3(8, 7, 10),
  rotation: new Quaternion(1.04254907e-14, -1, 1.19209261e-7, 0.000002220273),
  scale: new Vector3(4.5, 4.5, 1.00000024)
})
murpheusnickeditd23456789.addComponentOrReplace(transform30)
const gltfShape14 = new GLTFShape("2d8fafc8-3b0c-4f5e-8e25-ab17d0ac26dc/Murpheus nickedit3D.glb")
gltfShape14.withCollisions = true
gltfShape14.isPointerBlocker = true
gltfShape14.visible = true
murpheusnickeditd23456789.addComponentOrReplace(gltfShape14)

if (!murpheusnickeditd23456789.hasComponent(Billboard)) murpheusnickeditd23456789.addComponent(billboard)
engine.addEntity(murpheusnickeditd23456789)


const murpheusnickeditd2345678910 = new Entity('murpheusnickeditd2345678910')
engine.addEntity(murpheusnickeditd2345678910)
murpheusnickeditd2345678910.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(14.6782227, 8, 8),
  rotation: new Quaternion(7.10542736e-15, 0.7071029, -8.429319e-8, -0.707110643),
  scale: new Vector3(9.999971, 11.5, 0.499999285)
})
murpheusnickeditd2345678910.addComponentOrReplace(transform31)
const gltfShape15 = new GLTFShape("2d8fafc8-3b0c-4f5e-8e25-ab17d0ac26dc/Murpheus nickedit3D.glb")
gltfShape15.withCollisions = true
gltfShape15.isPointerBlocker = true
gltfShape15.visible = true
murpheusnickeditd2345678910.addComponentOrReplace(gltfShape15)




// script1.spawn(blackbutton, {}, createChannel(channelId, blackbutton, channelBus))

let trigger = new Entity("trigger area")
trigger.addComponent(new Transform({position: new Vector3(8,0,8), rotation: Quaternion.Euler(0,0,0), scale: new Vector3(1,1,1)}))
trigger.addComponent(new utils.TriggerComponent(new utils.TriggerBoxShape(new Vector3(15, 15, 15),new Vector3(0, 0, 0)),
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
  position: new Vector3(8, -2.0, 15.5),
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

const fantasyChest = new Entity('fantasyChest')
engine.addEntity(fantasyChest)
fantasyChest.setParent(_scene)
const transform38 = new Transform({
  position: new Vector3(8, 0, -7),
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
  scale: new Vector3(2.5, 2.5, 2.5) }));
engine.addEntity(avatar);
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

const avatar2 = new Entity();
const avatarShape2 = new AvatarShape();
// hud.attachToEntity(stand)


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
  scale: new Vector3(2.5, 2.5, 2.5) }));
engine.addEntity(avatar2);
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


//SMOKE
// Add a smoke source that creates a smoke puff every 0.2 seconds
// fantasyChest.addComponent(new SmokeSource(0.4))
// engine.addEntity(fantasyChest)

// Initiate systems
// engine.addSystem(new ThrowSmoke())
// engine.addSystem(new SmokeSystem())

