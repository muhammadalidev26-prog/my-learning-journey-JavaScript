

/** 
Normally when we want to channge value of one parameter of a function that takes a lot of parameters we have to write all of them like
showMenu(undefined, undefined, 200, undefined)
but with Smart Parameters we would just pass a object that destructs itself in the function
*/

// We only care about changing the title and items. 
// We don't specify width or height, so they use the defaults!
let userPreferences = {
  title: "Game Menu",
  items: ["Start Game", "Settings", "Exit"]
};

function showMenu({ title = "Untitled", width = 200, height = 100, items = [] }) {
  console.log(`Menu: ${title} | Size: ${width}x${height}`);
  console.log("Items:", items);
}

showMenu(userPreferences);
// Output:
// Menu: Game Menu | Size: 200x100
// Items: ["Start Game", "Settings", "Exit"]