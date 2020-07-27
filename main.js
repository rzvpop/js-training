class Problem {
    constructor(func, param) {
        this.func = func;
        this.param = param;
    }

    get func() {
        return this._func;
    }

    set func(func) {
        this._func = func;
    }

    get param() {
        return this._param;
    }

    set param(value) {
        this._param = value;
    }

    getAnswer() {
        if(typeof this.func !== "undefined")
            return this.func(this.param);
        else
            console.log("You must assign a function!");
    }
}

const massesStr = ["64010\n" +
    "104993\n" +
    "95523\n" +
    "87818\n" +
    "88717\n" +
    "107983\n" +
    "145542\n" +
    "105501\n" +
    "114620\n" +
    "58641\n" +
    "103006\n" +
    "143491\n" +
    "50414\n" +
    "112904\n" +
    "87089\n" +
    "128212\n" +
    "65482\n" +
    "55270\n" +
    "135648\n" +
    "104915\n" +
    "82940\n" +
    "117582\n" +
    "140160\n" +
    "108526\n" +
    "89334\n" +
    "56984\n" +
    "56359\n" +
    "92300\n" +
    "93287\n" +
    "122020\n" +
    "121921\n" +
    "58083\n" +
    "78671\n" +
    "115880\n" +
    "63348\n" +
    "59915\n" +
    "124435\n" +
    "93727\n" +
    "100850\n" +
    "121204\n" +
    "58303\n" +
    "70936\n" +
    "106085\n" +
    "101849\n" +
    "88080\n" +
    "136756\n" +
    "146614\n" +
    "126070\n" +
    "108147\n" +
    "55586\n" +
    "72262\n" +
    "74494\n" +
    "113382\n" +
    "139642\n" +
    "91326\n" +
    "109113\n" +
    "104840\n" +
    "112594\n" +
    "123700\n" +
    "130201\n" +
    "135021\n" +
    "75904\n" +
    "148338\n" +
    "117256\n" +
    "92802\n" +
    "86456\n" +
    "124484\n" +
    "127723\n" +
    "53713\n" +
    "55862\n" +
    "120367\n" +
    "77904\n" +
    "138061\n" +
    "65166\n" +
    "135541\n" +
    "109393\n" +
    "102805\n" +
    "131760\n" +
    "130030\n" +
    "114953\n" +
    "101461\n" +
    "72993\n" +
    "146507\n" +
    "112431\n" +
    "145712\n" +
    "139519\n" +
    "122758\n" +
    "80609\n" +
    "91775\n" +
    "73807\n" +
    "77878\n" +
    "112319\n" +
    "110665\n" +
    "119908\n" +
    "124568\n" +
    "67409\n" +
    "123830\n" +
    "130549\n" +
    "114312\n" +
    "79899"];

let masses = massesStr[0].split("\n").map(massStr => {
    const val = parseInt(massStr);
    return isNaN(val) ? 0 : val;
});

const modules = masses.map(mass => {
    return {
        mass: mass,
        computeFuel: function() {
            const fuel = Math.floor(this.mass / 3) - 2;
            return fuel > 0 ? fuel : 0;
        }
    };
});

function totalFuel(modules) {
    return modules.map(module => module.computeFuel()).reduce((acc, curr) => acc + curr);
}

// https://adventofcode.com/2019/day/1
let prob = new Problem(totalFuel, modules);
// console.log(prob.getAnswer());

const recursiveFuelCalc = (fuel) => {
    if(fuel < 9)
        return 0;
    else
    {
        const curr = Math.floor(fuel / 3) - 2;
        return curr + recursiveFuelCalc(curr);
    }
};

function totalFuelPlusAdditional(modules) {
    let sum = 0;
    modules.map(module => module.computeFuel()).forEach((fuel) => {
        sum += fuel + recursiveFuelCalc(fuel);
    });

    return sum;
}

// https://adventofcode.com/2019/day/1#part2
prob.func = totalFuelPlusAdditional;
console.log(prob.getAnswer());