import MotionController from "./motionController";

export default class KeypadMotionController extends MotionController {
  move(code: string): void {
    console.info(`>> Key pressed: ${code}`);

    switch (code) {
      case "ArrowUp":
      case "KeyW":
        super.linear_vel = Number(
          import.meta.env.VITE_ROBOT_MOVE_FORWARD_LINEAR_VEL
        );
        super.angular_vel = Number(
          import.meta.env.VITE_ROBOT_MOVE_FORWARD_ANGULAR_VEL
        );
        console.info(">> Move forward!");
        break;
      case "ArrowDown":
      case "KeyS":
        super.linear_vel = Number(
          import.meta.env.VITE_ROBOT_MOVE_BACKWARD_LINEAR_VEL
        );
        super.angular_vel = Number(
          import.meta.env.VITE_ROBOT_MOVE_BACKWARD_ANGULAR_VEL
        );
        console.info(">> Move backward!");
        break;
      case "ArrowRight":
      case "KeyD":
        super.linear_vel = Number(
          import.meta.env.VITE_ROBOT_TURN_RIGHT_LINEAR_VEL
        );
        super.angular_vel = Number(
          import.meta.env.VITE_ROBOT_TURN_RIGHT_ANGULAR_VEL
        );
        console.info(">> Turn right!");
        break;
      case "ArrowLeft":
      case "KeyA":
        super.linear_vel = Number(
          import.meta.env.VITE_ROBOT_TURN_LEFT_LINEAR_VEL
        );
        super.angular_vel = Number(
          import.meta.env.VITE_ROBOT_TURN_LEFT_ANGULAR_VEL
        );
        console.info(">> Turn left!");
        break;
      default:
        super.linear_vel = 0.0;
        super.angular_vel = 0.0;
        console.info(">> Stop!");
    }

    super.publish();
  }
}
