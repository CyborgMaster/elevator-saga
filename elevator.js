{
  init: (elevators, floors) => {
    elevator = elevators[0];

    elevator.on("idle", function() {
    });

    elevator.on("floor_button_pressed", (num) => {
      elevator.goToFloor(num);
    });

    floors.forEach(floor => {
      floor.on("up_button_pressed", () => {
        elevator.goToFloor(floor.floorNum);
      });
    });
  },
  update: (dt, elevators, floors) => {
    // We normally don't need to do anything here
  }
}
