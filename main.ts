namespace SpriteKind {
    export const Heli = SpriteKind.create()
    export const Cloud = SpriteKind.create()
    export const LandingPad = SpriteKind.create()
    export const Tree = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Heli, SpriteKind.Tree, function (sprite, otherSprite) {
    sprite.vx = 0
    sprite.vy = 0
    scene.cameraShake(10, 500)
    animation.runMovementAnimation(
    sprite,
    animation.animationPresets(animation.shake),
    2000,
    false
    )
    pause(5000)
    game.over(false, effects.clouds)
})
sprites.onCreated(SpriteKind.Cloud, function (sprite) {
    sprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 1 1 1 1 . . . 
        . . . . . . . . 1 1 8 8 1 1 1 . 
        . . . . . . 1 1 1 8 8 8 8 8 1 1 
        . . . . 1 1 8 8 8 8 9 8 9 8 8 1 
        . . . 1 1 1 8 9 8 9 8 9 8 8 8 1 
        . . . 1 1 1 8 8 8 8 8 8 8 1 1 1 
        . . . . 1 1 1 1 1 1 1 8 8 1 . . 
        . . . . . . . . . . 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    sprite.setPosition(randint(16, scene.screenWidth() - 16), randint(20, scene.screenHeight() - 75))
})
sprites.onCreated(SpriteKind.Tree, function (sprite) {
    sprite.setImage(img`
        ......cc66......
        .....c6576c.....
        ....c677576c....
        ....cc677666....
        ...cc6c6667cc...
        ..6c666777cc6c..
        ..c76666766776..
        ..c6777777776c..
        ..cc67777776cc..
        .c67cc76676676c.
        .c777666667777c.
        .c6777777777766.
        .cc7767776776666
        c676cc6766666776
        c777766666677776
        cc7777777777776c
        .c676777677767c.
        ..cc667666766c..
        ...ccc6c66ccc...
        .....cccccc.....
        .......ee.......
        ......eeee......
        .....eeeeee.....
        .......ee.......
        `)
    sprite.setPosition(randint(16, scene.screenWidth() - 16), randint(20, scene.screenHeight() - 75))
})
sprites.onOverlap(SpriteKind.Heli, SpriteKind.Cloud, function (sprite, otherSprite) {
    sprite.x += -1 * sprite.vx
    sprite.y += -1 * sprite.vy
    sprite.vx = 0
    sprite.vy = 0
    otherSprite.y += -1
    pause(100)
    otherSprite.y += 1
})
sprites.onOverlap(SpriteKind.Heli, SpriteKind.LandingPad, function (sprite, otherSprite) {
    sprite.vx = 0
    sprite.vy = 0
    sprite.y += 2
    game.over(true, effects.confetti)
})
game.splash("Generated Clouds", "on sprite created")
scene.setBackgroundColor(9)
let copter = sprites.create(img`
    ................................
    ................................
    ................................
    ......................fff.......
    ...................fffff........
    ......ff......fffffff...........
    ........ffffff..................
    ..............f.................
    ..............f..22.............
    .............f..22ff11111.......
    .............f222fff11111.......
    ...fffff....22222ff111111.......
    .....f......22222f1111111.......
    ......f.222222222f1111111.......
    ......f.222222222f1111111.......
    ......22222222222f1111ff2.......
    ......22222222222fffffff2.......
    .......2222222222fffffff2.......
    .......2222222222fffffff2.......
    ........222222222fffffff2.......
    ........2222222222222ff22.......
    ...........ff...222222222.......
    ...........ff......ff...........
    ...........ff......ff...........
    .........ffffffffffffffff.......
    .........fffffffffffffff........
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Heli)
copter.setStayInScreen(true)
let cloud1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Cloud)
let cloud2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Cloud)
let cloud3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 1 1 1 1 8 . . 
    . . . . . . . . 1 1 8 8 1 1 1 8 
    . . . . . 8 1 1 1 8 8 8 8 8 1 1 
    . . . . 1 1 8 8 8 8 9 8 9 8 8 1 
    . . . 1 8 8 9 9 8 9 8 9 8 8 8 1 
    . . . 1 8 8 8 8 8 8 8 8 8 1 1 1 
    . . . 8 1 1 1 1 1 1 1 8 8 1 8 . 
    . . . . . . . . . 8 1 1 1 1 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Cloud)
let landing = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.LandingPad)
landing.setPosition(randint(16, scene.screenWidth() - 16), 119)
let tree = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Tree)
let tree2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Tree)
game.onUpdate(function () {
    copter.vx += controller.dx(50)
    copter.vy += controller.dy(50)
})
