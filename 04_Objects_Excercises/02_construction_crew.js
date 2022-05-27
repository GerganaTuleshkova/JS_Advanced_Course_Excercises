function modify(worker) {
    let requiredAmountWaterMl = 0.1;

    if (worker.dizziness) {
        worker.levelOfHydrated += requiredAmountWaterMl * worker.weight * worker.experience;
        worker.dizziness = false;
    }
    return worker;
}

console.log(modify({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  ));