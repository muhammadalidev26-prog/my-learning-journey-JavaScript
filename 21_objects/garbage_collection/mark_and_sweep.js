class GCObject {
  constructor(name) {
    this.name = name;
    this.references = new Set(); // outgoing refs to other GCObjects
    this.marked = false;
  }
  addRef(obj) {
    this.references.add(obj);
  }
}

class GC {
  constructor() {
    this.allObjects = new Set(); // every object the "engine" has ever allocated
    this.roots = new Set();      // things reachable by definition
  }

  allocate(name) {
    const obj = new GCObject(name);
    this.allObjects.add(obj);
    return obj;
  }

  addRoot(obj) {
    this.roots.add(obj);
  }
  removeRoot(obj) {
    this.roots.delete(obj);
  }

  // --- STEP 1 & 2: mark phase ---
  mark() {
    const visited = new Set();
    const stack = [...this.roots];

    while (stack.length) {
      const obj = stack.pop();
      if (visited.has(obj)) continue; // don't revisit — avoids infinite loops on cycles
      visited.add(obj);
      obj.marked = true;
      for (const ref of obj.references) {
        stack.push(ref);
      }
    }
  }

  // --- STEP 3: sweep phase ---
  sweep() {
    for (const obj of [...this.allObjects]) {
      if (!obj.marked) {
        console.log(`🗑️  collecting: ${obj.name}`);
        this.allObjects.delete(obj);
      } else {
        obj.marked = false; // reset for next GC cycle
      }
    }
  }

  collect() {
    this.mark();
    this.sweep();
  }
}