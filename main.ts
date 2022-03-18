namespace SpriteKind {
    export const beans = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    meBean,
    [img`
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
        `],
    500,
    false
    )
})
let meBean: Dart = null
meBean = darts.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . e e e . . . . . . . . . 
    . . . e e e e e . . . . . . . . 
    . . e e e e e e . . . . . . . . 
    . . . e e e e e . . . . . . . . 
    . . . e e e e e e . e e . . . . 
    . . . . e e e e e e e e e . . . 
    . . . . . e e e e e e e e . . . 
    . . . . . e e e e e e e e . . . 
    . . . . . . e e e e e e . . . . 
    . . . . . . . . e e e e . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.beans)
meBean.controlWithArrowKeys()
meBean.setTrace()
