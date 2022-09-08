export class Poop extends Entity {
    constructor(model: GLTFShape, transform: Transform) {
      super()
      engine.addEntity(this)
      this.addComponent(model)
      this.addComponent(transform)

      this.addComponent(new Animator())
      this.getComponent(Animator).addClip(
        new AnimationState('Running', { looping: true })
      )
      this.getComponent(Animator).addClip(
        new AnimationState('Idle', { looping: true })
      )
    }
 
}