export {}

// Scenario: Vehicle configuration management with immutable configurations.

interface CarConfig {
  readonly make: string;
  readonly model: string;
  readonly features: ReadonlyArray<string>;
}

function configureCar(baseConfig: CarConfig, additionalFeatures: ReadonlyArray<string>): CarConfig {
  return { ...baseConfig, features: [...baseConfig.features, ...additionalFeatures] };
}

const baseConfig: CarConfig = { make: 'Toyota', model: 'Camry', features: ['Navigation', 'Sunroof'] };
const updatedConfig = configureCar(baseConfig, ['Leather Seats', 'Video Display']);
console.log(updatedConfig);
console.log(updatedConfig.features);
