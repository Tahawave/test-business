function loadModule(moduleName) {
  var moduleContent = document.getElementById('moduleContent');
  switch (moduleName) {
    case 'math':
      moduleContent.innerHTML = `
        <h2>Math Adventures</h2>
        <p>Learn numbers and counting through games and puzzles.</p>
        <p>Practice addition and subtraction with interactive quizzes.</p>
      `;
      break;
    case 'science':
      moduleContent.innerHTML = `
        <h2>Science Explorers</h2>
        <p>Discover the world of plants, animals, and the environment.</p>
        <p>Conduct simple experiments with virtual tools.</p>
      `;
      break;
    case 'language':
      moduleContent.innerHTML = `
        <h2>Language Arts Journey</h2>
        <p>Explore letters, words, and sentences through storytelling.</p>
        <p>Practice reading and writing with interactive stories.</p>
      `;
      break;
    case 'art':
      moduleContent.innerHTML = `
        <h2>Art and Creativity</h2>
        <p>Express yourself through colors, shapes, and patterns.</p>
        <p>Create digital artwork using drawing tools.</p>
      `;
      break;
    default:
      moduleContent.innerHTML = `<p>Select a module to begin your learning adventure!</p>`;
  }
}

