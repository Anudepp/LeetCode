class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(callback);

    return {
      unsubscribe: () => {
        const index = this.events[eventName].indexOf(callback);
        if (index > -1) {
          this.events[eventName].splice(index, 1);
        }
      }
    };
  }

  emit(eventName, args = []) {
    if (!this.events[eventName]) {
      return [];
    }

    return this.events[eventName].map(callback => callback(...args));
  }
}