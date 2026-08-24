
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/



/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace robot {
    //% block
    export function Trace(robot_x: number,robot_y: number,robot_move:number):void {
       while(robot_x<4); {
        led.plot(robot_x, robot_y)
        robot_x+1;
        }
        return led.plot(robot_x, robot_y)
    }

}
