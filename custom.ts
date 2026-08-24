
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/



/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace robot {
    //% block robot_x.min=0 robot_x.max=4 robot_y.min=0 robot_y.max=4 robot_speed.min=1 robot_speed.max=4
    export function move(robot_x: number,robot_y: number):void {
        //  moves robot randomly on the grid
        led.enable(true)
        
        for ( robot_x = 0; robot_x < 4; robot_x++) {
            led.plot(robot_x,robot_y)
        }
     
     }

}

