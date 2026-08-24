
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
    export function move_forward(robot_x: number,robot_y: number):void {
        //  moves robot in a straght line on the grid
        led.enable(true)
        
        for ( robot_x ; robot_x < 5; robot_x++) {
            led.plot(robot_x,robot_y)
        }
     
     }
    //% block robot_x.min=0 robot_x.max=4 robot_y.min=0 robot_y.max=4 robot_speed.min=1 robot_speed.max=4
    export function move_back(robot_x: number, robot_y: number): void {
        //  moves robot in a straght line on the grid
        led.enable(true)

        for (robot_x; robot_x = -1; robot_x=-1) {
            led.plot(robot_x, robot_y)
        }

     }

    
    
     //% block x.min=0 x.max=4 y.min=0 y.max=4
     export function home(x:number,y:number):void{
        basic.clearScreen()
        led.plot(2 , 2)
     }
}