class ECTS {
  constructor(points){
    this.#validation(points);
    this.score = points;
  }

  #validation(inputPoints){
    if(typeof inputPoints !== 'number'){
      throw new Error(`The score should be a "number" type. Got: ${typeof inputPoints}`);
    }
    if(inputPoints < 0 || inputPoints > 100){
      throw new Error(`The score should be in range from 0 to 100. Got: ${inputPoints}`);
    }
    return;
  }

  ectsFromScore() {
    let gradeEctsFormat;
    this.score <= 59 && (gradeEctsFormat = 'F')
    this.score >= 60 && this.score <= 64 && (gradeEctsFormat = 'E')
    this.score >= 65 && this.score <= 73 && (gradeEctsFormat = 'D')
    this.score >= 74 && this.score <= 81 && (gradeEctsFormat = 'C')
    this.score >= 82 && this.score <= 89 && (gradeEctsFormat = 'B')
    this.score >= 90 && (gradeEctsFormat = 'A')
    return gradeEctsFormat;
  }
};

module.exports = ECTS