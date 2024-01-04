// Constructor functions

function Person(fullName, money, sleepMode, healthRate) {
    this.fullName = fullName;
    this.money = money;
    this.sleepMode = sleepMode;
    this.healthRate = healthRate;

    this.sleep = (hours) => {
        if (hours === 7) {
            this.sleepMode = "Happy";
        } else if (hours < 7) {
            this.sleepMode = "Tired";
        } else if (hours > 7) {
            this.sleepMode = "Lazy";
        }
        return this.sleepMode;
    }

    this.eat = (meals) => {
        if (meals === 3) {
            this.healthRate = 100;
        } else if (meals === 2) {
            this.healthRate = 75;
        } else if (meals === 1) {
            this.healthRate = 50;
        }
        return this.healthRate;
    }

    this.buy = (items) => {
        this.money = this.money - (10 * items);
        return this.money;
    }

    this.showDetails = () => {
        document.write(`
        <h2>Person1 Details</h2>
        <p>FullName: ${this.fullName},</p>
        <p>Money: ${this.money},</p>
        <p>SleepMode: ${this.sleepMode},</p>
        <p>HealthRate: ${this.healthRate}.</p>
        <hr/>
        `);
    }
}

const person1 = new Person("Marawn Mohamed", 100, "normal", 100);
person1.sleep(7);
person1.eat(3);
person1.buy(1);
person1.showDetails();

// Using Class

class Person_c {
    constructor(fullName, money, sleepMode, healthRate) {
        this.fullName = fullName;
        this.money = money;
        this.sleepMode = sleepMode;
        this.healthRate = healthRate;
    }

    sleep = (hours) => {
        if (hours === 7) {
            this.sleepMode = "Happy";
        } else if (hours < 7) {
            this.sleepMode = "Tired";
        } else if (hours > 7) {
            this.sleepMode = "Lazy";
        }
        return this.sleepMode;
    }

    eat = (meals) => {
        if (meals === 3) {
            this.healthRate = 100;
        } else if (meals === 2) {
            this.healthRate = 75;
        } else if (meals === 1) {
            this.healthRate = 50;
        }
        return this.healthRate;
    }

    buy = (items) => {
        this.money = this.money - (10 * items);
        return this.money;
    }

    showDetails = () => {
        document.write(`
        <h2>Person2 Details</h2>
        <p>FullName: ${this.fullName},</p>
        <p>Money: ${this.money},</p>
        <p>SleepMode: ${this.sleepMode},</p>
        <p>HealthRate: ${this.healthRate}.</p>
        <hr/>
        `);
    }
}

const person2 = new Person_c("Marawn Mohamed", 100, "normal", 100);
person2.sleep(5);
person2.eat(2);
person2.buy(2);
person2.showDetails();

// Using Objects Linking to Other Objects (OLOO)

const personPrototype = {
    init: function(fullName, money, sleepMode, healthRate) {
        this.fullName = fullName;
        this.money = money;
        this.sleepMode = sleepMode;
        this.healthRate = healthRate;
        return this;
    },

    sleep: function(hours) {
        if (hours === 7) {
            this.sleepMode = "Happy";
        } else if (hours < 7) {
            this.sleepMode = "Tired";
        } else if (hours > 7) {
            this.sleepMode = "Lazy";
        }
        return this.sleepMode;
    },

    eat: function(meals) {
        if (meals === 3) {
            this.healthRate = 100;
        } else if (meals === 2) {
            this.healthRate = 75;
        } else if (meals === 1) {
            this.healthRate = 50;
        }
        return this.healthRate;
    },

    buy: function(items) {
        this.money = this.money - (10 * items);
        return this.money;
    },

    showDetails: function() {
        document.write(`
        <h2>Person3 Details</h2>
        <p>FullName: ${this.fullName},</p>
        <p>Money: ${this.money},</p>
        <p>SleepMode: ${this.sleepMode},</p>
        <p>HealthRate: ${this.healthRate}.</p>
        <hr/>
        `);
    }
}

const person3 = Object.create(personPrototype).init("Marawn Mohamed", 100, "normal", 100);
person3.sleep(9);
person3.eat(1);
person3.buy(3);
person3.showDetails();

// Using Factory functions

function Person_F(fullName, money, sleepMode, healthRate) {

    return {
        fullName,
        money,
        sleepMode,
        healthRate,

        sleep(hours) {
            if (hours === 7) {
                this.sleepMode = "Happy";
            } else if (hours < 7) {
                this.sleepMode = "Tired";
            } else if (hours > 7) {
                this.sleepMode = "Lazy";
            }
            return this.sleepMode;
        },
    
        eat(meals){
            if (meals === 3) {
                this.healthRate = 100;
            } else if (meals === 2) {
                this.healthRate = 75;
            } else if (meals === 1) {
                this.healthRate = 50;
            }
            return this.healthRate;
        },
    
        buy(items) {
            this.money = this.money - (10 * items);
            return this.money;
        },
    
        showDetails() {
            document.write(`
            <h2>Person4 Details</h2>
            <p>FullName: ${this.fullName},</p>
            <p>Money: ${this.money},</p>
            <p>SleepMode: ${this.sleepMode},</p>
            <p>HealthRate: ${this.healthRate}.</p>
            `);
        }
    }

}

const person4 = Person_F("Marawn Mohamed", 100, "normal", 100);
person4.sleep(7);
person4.eat(3);
person4.buy(4);
person4.showDetails();