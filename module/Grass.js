var LivingCreator=require("./livingCreator.js");

module.exports =class Grass extends LivingCreator {

    mul() {  
        this.multiply++;
        var newCell = Random(this.chooseCell(0));
        if (this.multiply >= 8 && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            GrassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }
   
    
}