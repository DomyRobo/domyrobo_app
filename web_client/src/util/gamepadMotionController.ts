import MotionController from "./motionController";

export default class GamepadMotionController extends MotionController {
  move(code: string): void {
    console.info(`>> Key pressed: ${code}`);

    // TODO!
  }
}
