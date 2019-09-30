// static
const static = new Entity()
static.addComponent(new GLTFShape("models/static.glb"))
static.addComponent(new Transform({
  position: new Vector3(0, 0, 0),
  scale: new Vector3(1, 1, 1)
}))
engine.addEntity(static)

//tree
const trees = new Entity()
trees.addComponent(new GLTFShape("models/trees.glb"))
trees.addComponent(new Transform({
  position: new Vector3(16.5, 0.5, 8),
  scale: new Vector3(1, 1, 1)
}))

const tree1animator = new Animator();
let cliptree1Wind = new AnimationState("Idle", { speed: 1.3 })
tree1animator.addClip(cliptree1Wind);
trees.addComponent(tree1animator);
cliptree1Wind.play()
engine.addEntity(trees)


//tree2
const trees2 = new Entity()
trees2.addComponent(new GLTFShape("models/trees2.glb"))
trees2.addComponent(new Transform({
  position: new Vector3(10, 0.23, 24),
  scale: new Vector3(1, 1, 1)
}))

const tree2animator = new Animator();
let cliptree2Wind = new AnimationState("Idle", { speed: 1.3 })
tree2animator.addClip(cliptree2Wind);
trees2.addComponent(tree2animator);
cliptree2Wind.play()
engine.addEntity(trees2)


// Water1
let water1 = new Entity()
water1.addComponent(new Transform({
  position: new Vector3(10, 0.6, 10),
  scale: new Vector3(1.08, 1.5, 1.08)
}))
water1.addComponent(new GLTFShape("models/water.glb"))
const water1Anim = new Animator();
let water1Idle = new AnimationState("Idle")
water1Anim.addClip(water1Idle);
water1.addComponent(water1Anim);
water1Idle.play()
engine.addEntity(water1)

// Water2
let water2 = new Entity()
water2.addComponent(new Transform({
  position: new Vector3(22, 0.6, 22),
  scale: new Vector3(1.08, 1.5, 1.08)
}))
water2.addComponent(new GLTFShape("models/water.glb"))
const water2Anim = new Animator();
let water2Idle = new AnimationState("Idle")
water2Anim.addClip(water2Idle);
water2.addComponent(water2Anim);
water2Idle.play()
engine.addEntity(water2)

// Grass

let grass = new Entity()
grass.addComponent(new Transform({
  position: new Vector3(0, 0, 0),
  scale: new Vector3(1, 1.2, 1)
}))
grass.addComponent(new GLTFShape("models/grass.glb"))

const grassanimator = new Animator();
let clipWind = new AnimationState("Wind", { speed: 1.5 })
grassanimator.addClip(clipWind);
grass.addComponent(grassanimator);
clipWind.play()
engine.addEntity(grass)

// Grass2
let grass2 = new Entity()
grass2.addComponent(new Transform({
  position: new Vector3(32, 0, 32),
  rotation: Quaternion.Euler(0, 180, 0),
  scale: new Vector3(1, 1, 1)
}))
grass2.addComponent(new GLTFShape("models/grass.glb"))

const grassanimator2 = new Animator();
let clipWind2 = new AnimationState("Wind", { speed: 1.5 })
grassanimator2.addClip(clipWind2);
grass2.addComponent(grassanimator2);
clipWind2.play()
engine.addEntity(grass2)

// deer
let deer01 = new Entity()
deer01.addComponent(new Transform({
  position: new Vector3(11, 0.48, 14.6),
  rotation: Quaternion.Euler(5, 180, 0),
  scale: new Vector3(1, 1, 1)
}))
deer01.addComponent(new GLTFShape("models/deer01.glb"))

const deerAnimator1 = new Animator();
let deerIdle = new AnimationState("Idle", { speed: 1.2 })
let deerDrink = new AnimationState("Drink", { speed: 1 })
deerAnimator1.addClip(deerIdle);
deerAnimator1.addClip(deerDrink);
deer01.addComponent(deerAnimator1);
deerIdle.play()

deer01.addComponent(new OnClick(e => {
  if (deerDrink.playing) {
    deerDrink.stop()
    deerIdle.play()
  }
  else {
    deerIdle.stop()
    deerDrink.play()
  }
}))

engine.addEntity(deer01)

// deer2
let deer02 = new Entity()
deer02.addComponent(new Transform({
  position: new Vector3(9, 0.5, 14.3),
  rotation: Quaternion.Euler(4, 150, 0),
  scale: new Vector3(.65, .65, .65)
}))
deer02.addComponent(new GLTFShape("models/deer02.glb"))

const deerAnimator2 = new Animator();
let deerIdle2 = new AnimationState("Idle", { speed: 1 })
let deerDrink2 = new AnimationState("Drink", { speed: 1.2 })
deerAnimator2.addClip(deerIdle2);
deerAnimator2.addClip(deerDrink2);
deer02.addComponent(deerAnimator2);
deerDrink2.play()
engine.addEntity(deer02)


// bird1
let bird01 = new Entity()
bird01.addComponent(new Transform({
  position: new Vector3(22, 0.9, 17.5),
  rotation: Quaternion.Euler(0, -80, 0),
  scale: new Vector3(.1, .1, .1)
}))
bird01.addComponent(new GLTFShape("models/bird1.glb"))

const bird1Animator = new Animator();
let bird1Idle = new AnimationState("Idle", { speed: 1.2 })
bird1Animator.addClip(bird1Idle);
bird01.addComponent(bird1Animator);
bird1Idle.play()
engine.addEntity(bird01)

// bird2
let bird02 = new Entity()
bird02.addComponent(new Transform({
  position: new Vector3(15.9, 1.4, 6.8),
  rotation: Quaternion.Euler(0, 0, 0),
  scale: new Vector3(.1, .1, .1)
}))
bird02.addComponent(new GLTFShape("models/bird1.glb"))

const bird2Animator = new Animator();
let bird2Idle = new AnimationState("Idle", { speed: 1 })
bird2Animator.addClip(bird2Idle);
bird02.addComponent(bird2Animator);
bird2Idle.play()
engine.addEntity(bird02)

// bird3
let bird03 = new Entity()
bird03.addComponent(new Transform({
  position: new Vector3(12, 0.65, 22),
  rotation: Quaternion.Euler(0, 135, 0),
  scale: new Vector3(.1, .1, .1)
}))
bird03.addComponent(new GLTFShape("models/bird1.glb"))

const bird3Animator = new Animator();
let bird3Idle = new AnimationState("Idle", { speed: 0.9 })
bird3Animator.addClip(bird3Idle);
bird03.addComponent(bird3Animator);
bird3Idle.play()
engine.addEntity(bird03)


//ambient music
const audioClip = new AudioClip("music/ambient.mp3")
const audioSource = new AudioSource(audioClip)
water1.addComponent(audioSource)
water2.addComponent(audioSource)
audioSource.playing = true
audioSource.loop = true
audioSource.volume = 1

//Drums
let drum01 = new Entity()
drum01.addComponent(new Transform({
  position: new Vector3(19, 0, 10.3),
  rotation: Quaternion.Euler(0, 60, 0),
  scale: new Vector3(1, 1, 1)
}))
drum01.addComponent(new GLTFShape("models/Drum1.glb"))

const drumAnimator1 = new Animator();
let drum1Play = new AnimationState("play", { speed: 1 })
drumAnimator1.addClip(drum1Play);
drum01.addComponent(drumAnimator1);
drum1Play.looping = false
drum1Play.play()

const drum1Clip = new AudioClip("music/tone1.wav")
const drum1Source = new AudioSource(drum1Clip)
drum01.addComponent(drum1Source)
drum1Source.playing = false
drum1Source.loop = false
drum1Source.volume = 1

drum01.addComponent(new OnClick(e => {
  drum1Play.stop()
  drum1Play.reset()
  drum1Play.play()
  drum1Source.playOnce()
}))
engine.addEntity(drum01)

//*******************/

let drum02 = new Entity()
drum02.addComponent(new Transform({
  position: new Vector3(19, 0, 10.3),
  rotation: Quaternion.Euler(0, 60, 0),
  scale: new Vector3(1, 1, 1)
}))
drum02.addComponent(new GLTFShape("models/Drum2.glb"))

const drumAnimator2 = new Animator();
let drum2Play = new AnimationState("play", { speed: 1 })
drumAnimator2.addClip(drum2Play);
drum02.addComponent(drumAnimator2);
drum2Play.looping = false
drum2Play.play()

const drum2Clip = new AudioClip("music/tone2.wav")
const drum2Source = new AudioSource(drum2Clip)
drum02.addComponent(drum2Source)
drum2Source.playing = false
drum2Source.loop = false
drum2Source.volume = 1

drum02.addComponent(new OnClick(e => {
  drum2Play.stop()
  drum2Play.reset()
  drum2Play.play()
  drum2Source.playOnce()
}))
engine.addEntity(drum02)

//*******************/

let drum03 = new Entity()
drum03.addComponent(new Transform({
  position: new Vector3(19, 0, 10.3),
  rotation: Quaternion.Euler(0, 60, 0),
  scale: new Vector3(1, 1, 1)
}))
drum03.addComponent(new GLTFShape("models/Drum3.glb"))

const drumAnimator3 = new Animator();
let drum3Play = new AnimationState("play", { speed: 1 })
drumAnimator3.addClip(drum3Play);
drum03.addComponent(drumAnimator3);
drum3Play.looping = false
drum3Play.play()

const drum3Clip = new AudioClip("music/tone3.wav")
const drum3Source = new AudioSource(drum3Clip)
drum03.addComponent(drum3Source)
drum3Source.playing = false
drum3Source.loop = false
drum3Source.volume = 1

drum03.addComponent(new OnClick(e => {
  drum3Play.stop()
  drum3Play.reset()
  drum3Play.play()
  drum3Source.playOnce()
}))
engine.addEntity(drum03)


//*******************/

let drum04 = new Entity()
drum04.addComponent(new Transform({
  position: new Vector3(19, 0, 10.3),
  rotation: Quaternion.Euler(0, 60, 0),
  scale: new Vector3(1, 1, 1)
}))
drum04.addComponent(new GLTFShape("models/Drum4.glb"))

const drumAnimator4 = new Animator();
let drum4Play = new AnimationState("play", { speed: 1 })
drumAnimator4.addClip(drum4Play);
drum04.addComponent(drumAnimator4);
drum4Play.looping = false
drum4Play.play()

const drum4Clip = new AudioClip("music/tone4.wav")
const drum4Source = new AudioSource(drum4Clip)
drum04.addComponent(drum4Source)
drum4Source.playing = false
drum4Source.loop = false
drum4Source.volume = 1

drum04.addComponent(new OnClick(e => {
  drum4Play.stop()
  drum4Play.reset()
  drum4Play.play()
  drum4Source.playOnce()
}))
engine.addEntity(drum04)


//*******************/

let drum05 = new Entity()
drum05.addComponent(new Transform({
  position: new Vector3(19, 0, 10.3),
  rotation: Quaternion.Euler(0, 60, 0),
  scale: new Vector3(1, 1, 1)
}))
drum05.addComponent(new GLTFShape("models/Drum5.glb"))

const drumAnimator5 = new Animator();
let drum5Play = new AnimationState("play", { speed: 1 })
drumAnimator5.addClip(drum5Play);
drum05.addComponent(drumAnimator5);
drum5Play.looping = false
drum5Play.play()

const drum5Clip = new AudioClip("music/tone5.wav")
const drum5Source = new AudioSource(drum5Clip)
drum05.addComponent(drum5Source)
drum5Source.playing = false
drum5Source.loop = false
drum5Source.volume = 1

drum05.addComponent(new OnClick(e => {
  drum5Play.stop()
  drum5Play.reset()
  drum5Play.play()
  drum5Source.playOnce()
}))
engine.addEntity(drum05)


//*******************/

let drum06 = new Entity()
drum06.addComponent(new Transform({
  position: new Vector3(19, 0, 10.3),
  rotation: Quaternion.Euler(0, 60, 0),
  scale: new Vector3(1, 1, 1)
}))
drum06.addComponent(new GLTFShape("models/Drum6.glb"))

const drumAnimator6 = new Animator();
let drum6Play = new AnimationState("play", { speed: 1 })
drumAnimator6.addClip(drum6Play);
drum06.addComponent(drumAnimator6);
drum6Play.looping = false
drum6Play.play()

const drum6Clip = new AudioClip("music/tone6.wav")
const drum6Source = new AudioSource(drum6Clip)
drum06.addComponent(drum6Source)
drum6Source.playing = false
drum6Source.loop = false
drum6Source.volume = 1

drum06.addComponent(new OnClick(e => {
  drum6Play.stop()
  drum6Play.reset()
  drum6Play.play()
  drum6Source.playOnce()
}))
engine.addEntity(drum06)