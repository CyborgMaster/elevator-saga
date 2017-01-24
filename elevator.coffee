init =  (elevators, floors) ->
  elevator = elevators[0] # Let's use the first elevator

  # Whenever the elevator is idle (has no more queued destinations) ...
  elevator.on "idle", ->
    # let's go to all the floors (or did we forget one?)
    elevator.goToFloor 0
    elevator.goToFloor 1
    elevator.goToFloor 2

update = (dt, elevators, floors) ->
  # We normally don't need to do anything here

return init: init, update: update
