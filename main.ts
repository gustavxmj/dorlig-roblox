function noob_skin () {
    noob = sprites.create(img`
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . 5 f 5 5 f 5 . . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . . 5 f 5 5 f 5 . . . . . 
        . . . . . 5 5 f f 5 5 . . . . . 
        . . . 7 7 7 5 5 5 5 7 7 7 . . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . 7 7 7 7 f 7 7 f 7 7 7 7 . . 
        . . 5 5 5 7 f f 7 f 7 5 5 5 . . 
        . . 5 5 5 7 f 7 f f 7 5 5 5 . . 
        . . 5 5 5 7 f 7 7 f 7 5 5 5 . . 
        . . 5 5 5 7 7 7 7 7 7 5 5 5 . . 
        . . 5 5 5 8 8 8 8 8 8 5 5 5 . . 
        . . . . . 8 8 . . 8 8 . . . . . 
        . . . . . 8 8 . . 8 8 . . . . . 
        . . . . . 8 8 . . 8 8 . . . . . 
        `, SpriteKind.Player)
}
let noob: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
