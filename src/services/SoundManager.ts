import { Howl } from 'howler'

interface SoundConfig {
  src: string
  loop?: boolean
  volume?: number
  preload?: boolean
}

const soundConfigs: Record<string, SoundConfig> = {
  ambience: {
    src: '/sounds/ambient_piano_1.mp3',
    loop: true,
    volume: 1,
    preload: true
  },
  
  mouse: {
    src: '/sounds/mouse_click_1.mp3',
    loop: false,
    volume: 1,
    preload: true
  }
}

class SoundManager {
  private sounds: Record<string, Howl> = {}
  private masterVolume = 1

  constructor() {
    this.initSounds()
  }

  private initSounds() {
    Object.entries(soundConfigs).forEach(([key, config]) => {
      this.sounds[key] = new Howl({
        src: config.src,
        loop: config.loop ?? false,
        volume: config.volume ?? 1,
        preload: config.preload ?? false,

        onloaderror: () => {
          console.error(`Erreur lors du chargement du son: ${key}`)
        }
      })
    })
  }

  play(soundKey: string) {
    if (!this.sounds[soundKey]) {
      console.warn(`Son "${soundKey}" non trouvé`)
      return
    }
    this.sounds[soundKey].play()
  }

  stop(soundKey: string) {
    this.sounds[soundKey]?.stop()
  }

  pause(soundKey: string) {
    this.sounds[soundKey]?.pause()
  }

  resume(soundKey: string) {
    this.sounds[soundKey]?.play()
  }

  setVolume(soundKey: string, volume: number) {
    if (this.sounds[soundKey]) {
      this.sounds[soundKey].volume(Math.min(1, Math.max(0, volume)))
    }
  }

  setMasterVolume(volume: number) {
    this.masterVolume = Math.min(1, Math.max(0, volume))
    Howler.volume(this.masterVolume)
  }

  getMasterVolume() {
    return this.masterVolume
  }

  stopAll() {
    Object.values(this.sounds).forEach(sound => sound.stop())
  }

  destroy() {
    this.stopAll()
    Object.values(this.sounds).forEach(sound => sound.unload())
  }
}

export const soundManager = new SoundManager()