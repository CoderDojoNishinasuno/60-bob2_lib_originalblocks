// % block="うしろに進む"
// % group="動き"
function backword () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
// % block="左手うごかす %angle 度"
// % group="うで"
function leftHand (angle: number) {
    servos.P2.setAngle(120 - angle)
}
// % block="止める"
// % group="動き"
function stop () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
// % block="右に回る %t 秒"
// % group="動き"
function turnRight (t: number) {
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.pause(t * 1000)
}
// % block="まえに進む"
// % group="動き"
function forward () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
// % block="右手うごかす %angle 度"
// % group="うで"
function rightHand (angle: number) {
    servos.P1.setAngle(60 - angle)
}
