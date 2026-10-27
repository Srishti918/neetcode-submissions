class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
         const cars = position.map((pos, i) => ({
        position: pos,
        time: (target - pos) / speed[i]
    }));

    // Sort from closest to target to farthest
    cars.sort((a, b) => b.position - a.position);

    let fleets = 0;
    let slowestTime = 0;

    for (const car of cars) {
        if (car.time > slowestTime) {
            fleets++;
            slowestTime = car.time;
        }
    }

    return fleets;
    }
}
