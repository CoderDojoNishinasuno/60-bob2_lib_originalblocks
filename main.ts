// % block="右手うごかす %angle 度"
// % group="うで"
function 右手うごかす (度: number) {
    servos.P1.setAngle(60 - 度)
}
// % block="うしろに進む"
// % group="動き"
function 後ろに進む () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
// % block="左に回る %t 秒"
// % group="動き"
function 左に回る (秒: number) {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(秒 * 1000)
}
// % block="右手をふる %num 回"
// % group="うで"
function 右手ふる (回数: number) {
    for (let index = 0; index < 回数; index++) {
        null
        basic.pause(200)
        null
        basic.pause(200)
    }
}
// % block="右に回る %t 秒"
// % group="動き"
function 右に回る (秒: number) {
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.pause(秒 * 1000)
}
// % block="止める"
// % group="動き"
function 止まる () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
// % block="左手うごかす %angle 度"
// % group="うで"
function 左手うごかす (度: number) {
    servos.P2.setAngle(120 - 度)
}
// % block="左手をふる %num 回"
// % group="うで"
function 左手ふる (回数: number) {
    for (let index = 0; index < 回数; index++) {
        null
        basic.pause(200)
        null
        basic.pause(200)
    }
}
// % block="まえに進む"
// % group="動き"
function 前にすすむ () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
