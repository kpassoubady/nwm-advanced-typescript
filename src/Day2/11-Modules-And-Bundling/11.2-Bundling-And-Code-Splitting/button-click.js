
// Button click handler
document.getElementById('loadModuleButton').addEventListener('click', async () => {
  const module = await import('./dynamicModule');
  module.dynamicFunction();
});

