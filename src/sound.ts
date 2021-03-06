export class Sound extends Entity {
    constructor(audio: AudioClip, loop: boolean) {
      super()
      engine.addEntity(this)
      this.addComponent(new AudioSource(audio))
      this.getComponent(AudioSource).loop = loop
      this.addComponent(new Transform())
      this.setParent(Attachable.AVATAR)
    }

    playOnce(){
      this.getComponent(AudioSource).volume = 1
      this.getComponent(AudioSource).playOnce()
    }
    playAudio() {
      this.getComponent(AudioSource).playOnce()
    }
  }
  
