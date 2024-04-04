function calculateSphereVolume(radius) {
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    return volume;
  }
  const radius = 5;
  console.log(calculateSphereVolume(radius));