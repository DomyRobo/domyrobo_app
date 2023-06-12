import { createRenderEffect, onCleanup } from "solid-js";
import Ros from "../util/ros";
import RosTopic from "../util/rosTopic";
import KeypadMotionController from "../util/keypadMotionController";
import GamepadMotionController from "../util/gamepadMotionController";
import Head from "../component/head/Head";

export default function ControllerScreen() {
  // Initialize ROS
  const ros = new Ros();

  // Initialize ROS Topic
  const rosTopic = new RosTopic(
    ros.val,
    import.meta.env.VITE_ROBOT_NAME +
      import.meta.env.VITE_ROBOT_UID +
      "/velocity",
    "domyrobo_lib/msg/DiffDriveVelocity"
  );

  // Initialize motion controller
  const keypadMotionController = new KeypadMotionController(rosTopic);
  const gamepadMotionController = new GamepadMotionController(rosTopic);

  // Bind to keypad
  createRenderEffect(() => {
    function keydownCallback(e: KeyboardEvent) {
      keypadMotionController.move(e.code);
    }
    window.addEventListener("keydown", keydownCallback);

    onCleanup(() => {
      window.removeEventListener("keydown", keydownCallback);
    });
  });

  // Bind to gamepad
  createRenderEffect(() => {
    function onGamepadConnected(e: GamepadEvent) {
      console.log(e.gamepad);
      console.log(
        "Gamepad connected at index %d: %s. %d buttons, %d axes.",
        e.gamepad.index,
        e.gamepad.id,
        e.gamepad.buttons.length,
        e.gamepad.axes.length
      );
    }
    window.addEventListener("gamepadconnected", onGamepadConnected);

    onCleanup(() => {
      window.removeEventListener("gamepadconnected", onGamepadConnected);
    });
  });

  // Subscribe to ROS Topic
  createRenderEffect(() => {
    function printSubsMsg(msg: ROSLIB.Message) {
      console.log(msg);
    }
    rosTopic.subscribe(printSubsMsg);

    onCleanup(() => {
      rosTopic.unsubscribe(printSubsMsg);
    });
  });

  return (
    <>
      <Head title="Controller" />
    </>
  );
}
